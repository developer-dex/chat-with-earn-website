import React from "react";
import PeopleDetails from "./PeopleDetails/PeopleDetails";
import Input from "../common/input/Input";

const People = () => {
  return (
    <div className="w-full h-full flex flex-row gap-7">
      <div className="w-1/2">
        <div className="border-[0.5px] border-light-gray-400 rounded-[10px] px-[26px] py-5 shadow-profileFormShadow">
          <div className="flex flex-row gap-3 py-2 px-5 items-center bg-white border border-gray-400 rounded-3xl p">
          <i className="fa-thin fa-magnifying-glass"></i>
            <Input className="bg-transparent border-none !p-0"  placeholder="Search or start a new chat"/>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <PeopleDetails />
      </div>
    </div>
  );
};

export default People;
