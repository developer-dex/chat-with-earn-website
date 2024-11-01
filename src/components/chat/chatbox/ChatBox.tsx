import React from "react";
import Input from "../../common/input/Input";
import lock from "../../../assets/images/Lock.png"

const ChatBox = () => {
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
          <div className="bg-black self-start rounded-t-[20px] rounded-br-[20px] text-white px-3 py-3 text-sm font-normal leading-4">
            Use these Tailwind CSS progress bar and multi-step navigation
            examples to visually represent progress and indicate next steps in
          </div>
          <div className="bg-blue self-end rounded-t-[20px]  rounded-bl-[20px] text-white px-6 py-5 text-sm font-normal leading-4 flex justify-end">
            Use these Tailwind CSS progress bar and multi-step navigation
            examples to visually represent progress and indicate next steps in
            your interface. These components are designed and built by the
            Tailwind CSS team, and include a variety.
          </div>
          <div className="bg-black self-start rounded-t-[20px] rounded-br-[20px] text-white px-3 py-3 text-sm font-normal leading-4">
            Use these Tailwind CSS progress bar and multi-step navigation
            examples to visually represent progress and indicate next steps in
          </div>
          <div className="bg-blue self-end rounded-t-[20px]  rounded-bl-[20px] text-white px-6 py-5 text-sm font-normal leading-4 flex justify-end">
            Use these Tailwind CSS progress bar and multi-step navigation
          </div>
          <div className="bg-black self-start rounded-t-[20px] rounded-br-[20px] text-white px-3 py-3 text-sm font-normal leading-4">
            Use these Tailwind CSS progress bar and multi-step navigation
          </div>
          <div className="bg-blue self-end rounded-t-[20px]  rounded-bl-[20px] text-white px-6 py-5 text-sm font-normal leading-4 flex justify-end">
            Use these Tailwind CSS progress bar and multi-step navigation
          </div>
          <div className="bg-black self-start rounded-t-[20px] rounded-br-[20px] text-white px-3 py-3 text-sm font-normal leading-4">
            Use these Tailwind CSS progress bar and multi-step navigation
          </div>
          <div className="bg-blue self-end rounded-t-[20px]  rounded-bl-[20px] text-white px-6 py-5 text-sm font-normal leading-4 flex justify-end">
            Use these Tailwind CSS progress bar and multi-step navigation
          </div>
        </div>
      </div>
        <div className="w-full py-3 px-7">
          <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
            <Input
              className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
              placeholder="Say Something"
            />
          </div>
        </div>
    </div>
  );
};

export default ChatBox;
