import React from "react";
import ChatSidebar from "./chatSidebar/ChatSidebar";
import personImage from "../../assets/images/profile.png";
import Input from "../common/input/Input";
import ChatBox from "./chatbox/ChatBox";

const ChatComponent = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="max-w-[409px] w-full">
        <ChatSidebar />
      </div>
      <div className="flex flex-col w-full gap-5 max-w-[1222px] overflow-hidden ">
        <div className="border-[0.5px] border-light-gray-400 w-full rounded-3xl px-7 py-5 bg-white bg-opacity-5 shadow-profileFormShadow h-max">
          <div className="flex flex-row gap-5 items-center">
            <img src={personImage} alt="profile" width={70} height={70} />
            <div className="flex flex-col gap-2.5">
              <h4 className="text-black font-medium text-xl leading-8">
                Jane Cooper
              </h4>
              <p className="text-light-gray-500 text-sm leading-4 font-medium">
                Online
              </p>
            </div>
          </div>
        </div>
       <ChatBox/>
      </div>
    </div>
  );
};

export default ChatComponent;
