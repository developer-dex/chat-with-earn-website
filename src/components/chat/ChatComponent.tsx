import ChatSidebar from "./chatSidebar/ChatSidebar";
import ChatBox from "./chatbox/ChatBox";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../socket/socket";
import { UserListResponseData } from "../../features/chat/fetchUserListSlice";
import { useAppDispatch } from "../../app/hooks";
import { fetchUserProfileData } from "../../features/user/userProfileSlice";
import { OK } from "../../config/httpStatusCodes";
import { setLocalStorageItem } from "../../config/localStorage";
import { UserMessagesThreadResponseData } from "../../features/chat/fetchUserMessagesThreadSlice";

const ChatComponent = () => {

  const [selectedUser, setSelectedUser] = useState<UserListResponseData | null>(null);
  const [messageThread, setMessageThread] = useState<UserMessagesThreadResponseData[]>([]);
  const socketContext = useContext(SocketContext);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const { payload } = await dispatch(fetchUserProfileData());
    if (payload?.data.responseCode === OK) {
      setLocalStorageItem('userData', JSON.stringify(payload.data.responseData.profileData));
    }
  };

  useEffect(() => {
    socketContext.initiateConnection();
  }, []);

  return (
    <div className="flex flex-row gap-10 max-h-[74vh] 2xl:max-h-screen h-full">
      <div className="max-w-[409px] w-full ">
        <ChatSidebar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setMessageThread={setMessageThread}
        />
      </div>
      {selectedUser ?
        <div className="flex flex-col w-full gap-3 max-w-[1222px]">
          <div className="border-[0.5px] border-light-gray-400 w-full rounded-3xl px-4 py-4 bg-white bg-opacity-5 shadow-profileFormShadow h-max">
            <div className="flex flex-row gap-2.5 items-center">
              <img src={selectedUser?.profile_picture} alt="profile" width={50} height={50} />
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
          <ChatBox selectedUser={selectedUser} messageThread={messageThread} setMessageThread={setMessageThread} />
        </div>
        : <>No user Selected</>
      }
    </div>
  );
};

export default ChatComponent;
