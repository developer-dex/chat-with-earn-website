import Input from "../../common/input/Input";
import personImage from "../../../assets/images/profile.png";

const ChatSidebar = () => {
  // Sample data array for chat items
  const chatData = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    name: "Jane Cooper",
    message: "Haha that's terrifying 😂",
    time: "07:38 am",
    unreadCount: index % 3 === 0 ? 5 : 0, // Example: show unread count only on some items
  }));

  return (
    <div className="flex flex-col border-[0.5px] border-light-gray-400 shadow-profileFormShadow  rounded-3xl bg-white bg-opacity-5">
      <div className="w-full p-5">
        <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
          <Input
            className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
      <div className="flex flex-col mt-8">
        {chatData.map((chat) => (
          <div key={chat.id} className="flex flex-row justify-between cursor-pointer hover:bg-light-gray-300 px-5 py-2.5">
            <div className="flex flex-row gap-3 items-center">
              <img src={personImage} alt="profile" width={70} height={70} />
              <div className="flex flex-col gap-2.5">
                <h4 className="text-black font-bold text-lg leading-7">{chat.name}</h4>
                <p className="text-black text-sm leading-5 font-normal">{chat.message}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2.5 items-end">
              <p className="text-xs leading-5 text-gray-600 font-normal">{chat.time}</p>
              {chat.unreadCount > 0 && (
                <span className="w-6 h-6 bg-black text-white text-xs font-bold leading-3 rounded-full p-1 flex items-center justify-center">
                  {chat.unreadCount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
