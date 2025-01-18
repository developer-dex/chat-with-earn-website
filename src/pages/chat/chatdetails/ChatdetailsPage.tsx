import { useContext, useEffect, useState } from "react";
import ChatBox from "../../../components/chat/chatbox/ChatBox";
import PublicLayout from "../../../layouts/PublicLayout";
import { NavLink, useLocation } from "react-router-dom";
import { UserListResponseData } from "../../../features/chat/fetchUserListSlice";
import { UserMessagesThreadResponseData } from "../../../features/chat/fetchUserMessagesThreadSlice";
import { SocketContext } from "../../../socket/socket";
import { IoMdArrowRoundBack } from "react-icons/io";

const ChatDetailsPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const [selectedUser, setSelectedUser] = useState<UserListResponseData | null>(user || null);
  const [messageThread, setMessageThread] = useState<UserMessagesThreadResponseData[]>([]);
  const socketContext = useContext(SocketContext);


  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = async () => {
  //   const { payload } = await dispatch(fetchUserProfileData());
  //   if (payload?.data.responseCode === OK) {
  //     setLocalStorageItem('userData', JSON.stringify(payload.data.responseData.profileData));
  //   }
  // };

  useEffect(() => {
    if (!socketContext.socket?.connected) {
      socketContext.initiateConnection();
    }
  }, []);

  return (
    <PublicLayout>
      <div className="mt-5 px-4 md:px-0 min-h-[calc(100vh-194px)] lg:max-h-[calc(100vh-205px)] lg:min-h-[calc(100vh-205px)] h-full pb-5 md:pb-0">
        <div className="flex lg:hidden flex-col w-full gap-3 max-w-full lg:max-w-[1222px]">
          <div className="border-[0.5px] border-light-gray-400 w-full rounded-md md:rounded-3xl px-4 py-4 bg-white bg-opacity-5 shadow-profileFormShadow h-max flex flex-row gap-4">


            <NavLink to={"/"}>
              <IoMdArrowRoundBack className="w-5 h-5 cursor-pointer" /></NavLink><div className="flex flex-row gap-2.5 items-center">
              <img
                src={"/"}
                alt="profile"
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-2.5">
                <h4 className="text-black font-medium text-lg leading-6">
                  Test
                </h4>
                <p className="text-light-gray-500 text-xs leading-4 font-medium">
                  Details
                </p>
              </div>
            </div>
          </div>
          <ChatBox
            selectedUser={selectedUser}
            messageThread={messageThread}
            setMessageThread={setMessageThread}
          />
        </div>
      </div>
    </PublicLayout>
  );
};

export default ChatDetailsPage;
