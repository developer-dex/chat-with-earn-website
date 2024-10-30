import React from "react";
import ProfileImage from "../../../assets/images/profile.png";
const CareerDetails = () => {
  return (
    <div className="h-full border border-light-gray-400 rounded-[10px] px-[30px] py-6 flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <img src={ProfileImage} alt="profile" width={90} height={88} />
        <div className="flex flex-col gap-0">
          <p className="text-black text-opacity-50 text-base leading-7 font-medium">
            share
          </p>
          <h1 className="text-black text-3xl leading-10 font-semibold">
            @Sahil
          </h1>
        </div>
      </div>
      <h1 className="text-gray-200 text-[33px] leading-[50px] font-semibold">
        $150.29
      </h1>
      <div>
        <p className="text-black text-opacity-50 text-lg font-medium">
          @Sahil123
        </p>
      </div>
      <div className="mt-6">
        <div className="w-full h-[28px] bg-red rounded-full overflow-hidden">
          <div className="h-full bg-green" style={{ width: `${60}%` }} />
          <div className="h-full bg-red" style={{ width: `${40}%` }} />
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-9">
          <div className="flex flex-row gap-1.5 items-center">
            <span className="w-4 h-4 bg-green rounded-full"></span>
            <p className="text-gray-200 text-lg leading-7 font-medium">Wing</p>
          </div>
          <p className="text-black leading-7 text-lg font-medium">$120.48</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-9">
          <div className="flex flex-row gap-1.5 items-center">
            <span className="w-4 h-4 bg-red rounded-full"></span>
            <p className="text-gray-200 text-lg leading-7 font-medium">People</p>
          </div>
          <p className="text-black leading-7 text-lg font-medium">10</p>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
