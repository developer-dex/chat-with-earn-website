import React from "react";
import ProfileImage from "../../../assets/images/profile.png";
const CareerDetails = () => {
  const peopleCount = "120+ People";
  const profiles = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/46.jpg",
    "https://randomuser.me/api/portraits/men/47.jpg",
    "https://randomuser.me/api/portraits/women/48.jpg",
  ];
  return (
    <div className="h-full border border-light-gray-400 rounded-[10px] p-6 flex flex-col gap-6">
      <div className="flex flex-row gap-5 items-center">
        <img src={ProfileImage} alt="profile" width={70} height={70} />
        <div className="flex flex-col">
          <p className="text-black text-opacity-50 text-base leading-7 font-medium">
            share
          </p>
          <h1 className="text-black text-2xl leading-8 font-semibold">
            @Sahil
          </h1>
        </div>
      </div>
      <h1 className="text-gray-200 text-3xl leading-9 font-semibold">
        $150.29
      </h1>
      <div className="flex flex-col gap-1.5">
        <p className="text-black text-opacity-50 text-lg font-medium">
          @Sahil123
        </p>
      <div className="flex items-center space-x-2">
      <div className="flex -space-x-3">
        {profiles.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Profile ${index + 1}`}
            className="w-10 h-10 rounded-full "
          />
        ))}
      </div>
      <p className="text-black font-medium leading-7 text-lg">{peopleCount}</p>
    </div>
      </div>
      <div className="mt-4">
        <div className="w-full h-5 bg-red rounded-full overflow-hidden">
          <div className="h-full bg-green" style={{ width: `${60}%` }} />
          <div className="h-full bg-red" style={{ width: `${40}%` }} />
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row gap-1.5 items-center">
            <span className="w-4 h-4 bg-green rounded-full"></span>
            <p className="text-gray-200 text-lg leading-7 font-medium">Wing</p>
          </div>
          <p className="text-black leading-7 text-lg font-medium">$120.48</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-5">
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
