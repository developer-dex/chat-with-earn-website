import Logo from "../common/logo/Logo";
import { NavLink } from "react-router-dom";
import profileImage from "../../assets/images/profile.png";

const Header = () => {
  return (
    <nav className="w-full bg-light-gray-200 py-2 ">
      <div className="chatwithmeet__container flex flex-row justify-between">
        <div className=" flex  flex-row items-center gap-6">
          <div>
            <Logo width={71} height={71} />
          </div>
          <ul className="flex flex-row  gap-[30px] items-center no-underline ">
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-[3px]  border-black pb-0.5 font-semibold "
                    : "text-gray-200 text-base font-medium leading-6 pb-0.5 transition-all delay-200 duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/career"}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-[3px]  border-black pb-0.5 font-semibold"
                    : "text-gray-200 text-base font-medium leading-6 pb-0.5"
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/people"}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-[3px]  border-black pb-0.5 font-semibold"
                    : "text-gray-200 text-base font-medium leading-6 pb-0.5"
                }
              >
                People
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex  flex-row items-center gap-6">
          <ul className="flex flex-row  gap-[30px] items-center no-underline ">
            <li>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-[3px]  border-black pb-0.5 font-semibold"
                    : "text-gray-200 text-base font-medium leading-6 pb-0.5"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-[3px]  border-black pb-0.5 font-semibold"
                    : "text-gray-200 text-base font-medium leading-6 pb-0.5"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex  flex-row items-center gap-6">
          <ul className="flex flex-row  gap-[30px] items-center no-underline ">
            <li className="cursor-pointer">
              <i className="fa-solid fa-bell text-gray-200 w-5 h-4"></i>
            </li>
            <li className="flex  flex-row items-center cursor-pointer">
              <NavLink to={"/profile"}>
                <img src={profileImage} alt="profile" width={45} height={45} />
              </NavLink>
            </li>
            <li className="flex  flex-row items-center">
              <h6 className="font-poppins leading-6 font-medium text-black-100">
                Sahil Patel
              </h6>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
