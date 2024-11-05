import Input from "../../common/form/Input";
import lock from "../../../assets/images/Lock.png"
import { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../../../socket/socket";
import { UserListResponseData } from "../../../features/chat/fetchUserListSlice";
import { getLocalStorageItem } from "../../../config/localStorage";

interface IProps {
  selectedUser: UserListResponseData | null;
  messageThread: any[];
  setMessageThread: React.Dispatch<React.SetStateAction<any[]>>;
}

const ChatBox = ({ selectedUser, messageThread, setMessageThread }: IProps) => {

  const socketContext = useContext(SocketContext);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>("");

  const userData = JSON.parse(getLocalStorageItem('userData') || '');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageThread]);

  useEffect(() => {
    if (socketContext.socket) {
      socketContext.socket.on("receiveMessage", (data: any) => {
        setMessageThread([...messageThread, { senderId: data?.senderId, receiverId: data.receiverId, message: data.message }]);
      });
    }
  }, [socketContext.socket]);

  const handleSendMessage = () => {
    socketContext.socket?.emit("sendMessage", { senderId: userData?._id, receiverId: selectedUser?._id, message });
    setMessage("");
    setMessageThread([...messageThread, { senderId: userData?._id, receiverId: selectedUser?._id, message }]);
  };


  return (
    <div className="border-[0.5px] relative  border-light-gray-400 w-full rounded-3xl bg-white overflow-hidden bg-opacity-5 shadow-profileFormShadow h-full flex flex-col justify-between ">
      <div className="max-h-full overflow-y-auto py-5 px-7">
        <div className="w-full flex justify-center items-center mb-5">
          <span className="text-black text-xs font-normal leading-4 bg-light-gray-300  rounded-[14px] px-6 py-5 max-w-[568px] w-[568px] flex flex-row items-center gap-2.5">
            <img src={lock} alt="lock" height={21} width={18} /> Messages are end-to-end encrypted. No one outside of this chat, not
            even HII5 can read or listen to them click to learn more.
          </span>
        </div>
        <div className="flex flex-col w-full gap-5 px-5">
          {messageThread.map((item, index) => (
            <div
              key={index}
              className={`rounded-t-[20px] text-white p-3 text-sm font-normal leading-4 ${item.senderId === userData?._id ?
                "bg-blue self-end rounded-bl-[20px] flex justify-end" :
                "bg-black self-start rounded-br-[20px]"}`}
            >
              {item.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="w-full py-3 px-7">
        <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
          <Input
            className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
            placeholder="Say Something"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
