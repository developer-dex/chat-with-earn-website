import Input from "../../common/form/Input";
import personImage from "../../../assets/images/profile.png";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { fetchUserListData, UserListResponseData } from "../../../features/chat/fetchUserListSlice";
import { fetchUserMessagesThreadData, UserMessagesThreadResponseData } from "../../../features/chat/fetchUserMessagesThreadSlice";
import { OK } from "../../../config/httpStatusCodes";

interface IProps {
  selectedUser: UserListResponseData | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserListResponseData | null>>;
  setMessageThread: React.Dispatch<React.SetStateAction<UserMessagesThreadResponseData[]>>;
}

const ChatSidebar = ({ selectedUser, setSelectedUser, setMessageThread }: IProps) => {

  const [searchText, setSearchText] = useState<string>("");
  const [userList, setUserList] = useState<UserListResponseData[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedUser) {
      getMessageThreadFromPeople();
    }
  }, []);

  const getMessageThreadFromPeople = async () => {
    selectedUser && await dispatch(fetchUserMessagesThreadData(selectedUser.user_id)).then((res) => {
      setMessageThread(res.payload.data.responseData);
    });
  }

  useEffect(() => {
    getUserLIst();
  }, [searchText]);

  const getUserLIst = async () => {
    const { payload } = await dispatch(fetchUserListData(searchText));
    if (payload.status === OK) {
      setUserList(payload.data.responseData);
    }
  };

  const onUserClick = async (user: UserListResponseData) => {
    setSelectedUser(user);
    await dispatch(fetchUserMessagesThreadData(user._id)).then((res) => {
      setMessageThread(res.payload.data.responseData);
    });
  };

  return (
    <div className="flex flex-col border-[0.5px] border-light-gray-400 shadow-profileFormShadow overflow-hidden max-h-full h-full rounded-3xl bg-white bg-opacity-5">
      <div className="w-full p-5">
        <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
          <Input
            className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
            placeholder="Search or start a new chat"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      {!userList || userList.length === 0 ?
        <>No Data Found</>
        :
        <div className="flex flex-col flex-grow overflow-y-auto h-full">
          {userList.map((user: UserListResponseData) => (
            <div
              key={user._id}
              className={`flex flex-row justify-between cursor-pointer hover:bg-light-gray-300 px-5 py-2.5 ${(selectedUser?._id === user._id || selectedUser?.user_id === user._id) ? "bg-light-gray-300" : ""}`}
              onClick={() => onUserClick(user)}
            >
              <div className="flex flex-row gap-3 items-center">
                <img src={user.profile_picture || personImage} alt="profile" width={60} height={60} />
                <div className="flex flex-col gap-2">
                  <h4 className="text-black font-bold text-base leading-6">{user.first_name} {user.last_name}</h4>
                  <p className="text-black text-xs leading-4 font-normal">{user.last_message}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2.5 items-end">
                <p className="text-xs leading-5 text-gray-600 font-normal">{user.last_message_at}</p>
                {user.unread_count > 0 && (
                  <span className="w-5 h-5 bg-black text-white text-xs font-bold leading-3 rounded-full p-0.5 flex items-center justify-center">
                    {user.unread_count}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default ChatSidebar;
