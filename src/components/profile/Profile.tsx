import { useState } from "react";
import profile from "../../assets/images/profile.png";
import PersonalDetails from "./personalDetails/PersonalDetails";
import CustomButton from "../common/form/Button";

interface ProfileRoute {
  id: number;
  title: string;
  component: JSX.Element | string;
}
const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const profileRoutes: ProfileRoute[] = [
    {
      id: 1,
      title: "personal Information",
      component: <PersonalDetails />,
    },
    {
      id: 2,
      title: "Help Center",
      component: "",
    },
  ];

  const activeComponent = profileRoutes.find((route) => route.id === activeTab)?.component;

  return (
    <div className="flex flex-row gap-7 w-full font-poppins h-auto">
      <div className="flex flex-col justify-between w-1/2 gap-14 h-auto">
        <div>
          <h1 className="text-gray-200 text-[28px] leading-10 font-extrabold max-w-[207px] text-left">
            User Profile management
          </h1>
          <div className="mt-16 border-[0.5px] border-light-gray-400 bg-white">
            {profileRoutes.map((route) => (
              <button
                key={route.id}
                onClick={() => setActiveTab(route.id)}
                className={`text-left shadow-profileFormShadow  border-b-[0.5px] border-light-gray-400 w-full rounded-sm
                   px-8 py-6 font-normal text-lg leading-8 transition-all duration-300 ${
                  activeTab === route.id ? "border-l-4 border-l-black text-black font-semibold" : "text-gray-500 border-l-4 border-l-transparent"
                }`}
              >
                {route.title}
              </button>
            ))}
          </div>
              </div>
              <div className="flex flex-row items-center gap-11">
                  <p className="text-black text-[28px] font-normal leading-10 flex flex-row items-center ">logout </p>
                  <span className="w-6 h-6"><i className="fa-solid fa-arrow-right-from-bracket w-5 h-5"></i></span>
              </div>
      </div>
      <div className="flex w-1/2 border-[0.5px] border-light-gray-400 rounded-[10px] shadow-profileFormShadow py-5 px-8  flex-col h-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl leading-9 text-black font-semibold">
            {profileRoutes.find((route) => route.id === activeTab)?.title}
          </h1>
          {activeTab === 1 && (
            <img src={profile} alt="profile" height={100} width={100} />
          )}
        </div>
        <div className={`w-full ${activeComponent ? "mt-12" : "mt-0"} min-h-[450px] h-full flex justify-center items-center`}>
       {activeComponent ? activeComponent : <p className="w-full text-center h-full flex justify-center items-center text-2xl  font-semibold leading-8">No data found!</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
