import ChatSidebar from "./chatSidebar/ChatSidebar";
import ChatBox from "./chatbox/ChatBox";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../socket/socket";
import { fetchUserListData, UserListResponseData } from "../../features/chat/fetchUserListSlice";
import { useAppDispatch } from "../../app/hooks";
import { fetchUserProfileData } from "../../features/user/userProfileSlice";
import { OK } from "../../config/httpStatusCodes";
import { setLocalStorageItem } from "../../config/localStorage";
import { fetchUserMessagesThreadData, UserMessagesThreadResponseData } from "../../features/chat/fetchUserMessagesThreadSlice";
import { useLocation } from "react-router-dom";
import ChatDetailsPage from "../../pages/chat/chatdetails/ChatdetailsPage";
import dummyImage from "../../assets/images/dummyProfile.png";

const ChatComponent = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const [selectedUser, setSelectedUser] = useState<UserListResponseData | null>(
    user || null
  );
  const [messageThread, setMessageThread] = useState<
    UserMessagesThreadResponseData[]
  >([]);
  const [isUserSelectedInMobile, setIsUserSelectedInMobile] = useState<boolean>(window.innerWidth <= 1024 && selectedUser ? true : false);
  const [userList, setUserList] = useState<UserListResponseData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isImagePopupOpen, setIsImagePopupOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const socketContext = useContext(SocketContext);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const { payload } = await dispatch(fetchUserProfileData());
    if (payload?.data.responseCode === OK) {
      setLocalStorageItem(
        "userData",
        JSON.stringify(payload.data.responseData.profileData)
      );
    }
  };

  useEffect(() => {
    if (!socketContext.socket?.connected) {
      socketContext.initiateConnection();
    }
  }, []);

  const getUserList = async () => {
    const { payload } = await dispatch(fetchUserListData(searchText));
    if (payload.status === OK) {
      setUserList(payload.data.responseData);
    }
  };

  const handleMessageData = async () => {
    selectedUser && await dispatch(fetchUserMessagesThreadData(selectedUser.user_id)).then((res) => {
          setMessageThread(res.payload.data.responseData);
        });

  }

  useEffect( () => {
    handleMessageData()
 },[]) 
 
  return (
    <div className="flex flex-row gap-6 xl:gap-10 h-full">
      { !isUserSelectedInMobile && (
        <div className="max-w-full lg:max-w-[409px] w-full">
          <ChatSidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setMessageThread={setMessageThread}
            getUserList={getUserList}
            userList={userList}
            searchText={searchText}
            setSearchText={setSearchText}
            setIsUserSelectedInMobile={setIsUserSelectedInMobile}
          />
        </div>
      )}
      {Boolean(selectedUser) && (
        <div className="hidden lg:flex flex-col w-full gap-3 max-w-full lg:max-w-[1222px] pb-5 md:pb-0">
          <div className="border-[0.5px] border-light-gray-400 w-full rounded-3xl px-1.5 sm:px-4 py-4 bg-white bg-opacity-5 shadow-profileFormShadow h-max">
            <div></div>{" "}
            <div className="flex flex-row gap-2.5 items-center">
              <img
                src={selectedUser?.profile_picture ? selectedUser?.profile_picture : dummyImage}
                alt="profile"
                className="rounded-[50px] border border-gray-300 cursor-pointer  max-w-[50px] w-[50px] max-h-[50px] h-[50px] "
                height={50}
                width={50}
                style={{ objectFit: "cover" }}
                onClick={() => {
                  setSelectedImage(selectedUser?.profile_picture || dummyImage);
                  setIsImagePopupOpen(true);
                }}
              />
              <div className="flex flex-col gap-2.5">
                <h4 className="text-black font-medium text-lg leading-6">
                  {selectedUser?.first_name} {selectedUser?.last_name}
                </h4>
                <p className="text-light-gray-500 text-xs leading-4 font-medium">
                  {selectedUser?.last_seen}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full">
            <ChatBox
              selectedUser={selectedUser}
              messageThread={messageThread}
              setMessageThread={setMessageThread}
              getUserList={getUserList}
            />
          </div>
        </div>
      )}
      {isUserSelectedInMobile && (
        <div className="block lg:hidden w-full">
          <ChatDetailsPage
            selectedUser={selectedUser}
            messageThread={messageThread}
            setMessageThread={setMessageThread}
            getUserList={getUserList}
            setIsUserSelectedInMobile={setIsUserSelectedInMobile}
          />
        </div>
      )}
      {!selectedUser && (
        <div className="border-[0.5px] border-light-gray-400 w-full rounded-3xl px-1.5 sm:px-4 py-4 bg-white bg-opacity-5 shadow-profileFormShadow h-full min-h-[calc(100vh-194px)] max-h-[calc(100vh-194px)] lg:max-h-[calc(100vh-205px)] lg:min-h-[calc(100vh-205px)] hidden lg:flex items-center justify-center">
          <p className="text-xl font-bold leading-9">No data Found!</p>
        </div>
      )}
      {isImagePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded">
            <button
              className="top-2 right-2 text-black z-10 text-2xl "
              onClick={() => setIsImagePopupOpen(false)}
            >
              &times;
            </button>
            <img
              src={selectedImage || dummyImage}
              alt="Selected"
              className="max-w-[80vw] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
