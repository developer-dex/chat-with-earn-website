import { useNavigate } from "react-router-dom";
import ProfileImage from "../../../assets/images/profile.png";
import Label from "../../common/form/Label";

type IProps = {
  data: any;
};

const PeopleDetails = ({ data }: IProps) => {

  const navigate = useNavigate();

  const onChatClick = () => {
    navigate("/chat", { state: { user: data } });
  };

  return (
    <div className="border-[0.5px] border-light-gray-400 rounded-[10px] px-[30px] py-8 shadow-profileFormShadow h-full">
      <div>
        <div className="flex flex-row items-center gap-6">
          <img src={ProfileImage} alt="profile" width={60} height={60} />
          <h4>{data.first_name} {data.last_name}</h4>
        </div>
        <div className="w-full mt-9">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <div className="w-full flex flex-col">
              <Label htmlFor="fullName" text="Full Name: " />
              {data.first_name} {data.last_name}
            </div>
            <div>
              <Label htmlFor="area" text="Area: " />
              {data.area}
            </div>
            <div>
              <Label htmlFor="collage" text="Collage: " />
              {data.collage}
            </div>
            <div>
              <Label htmlFor="gender" text="Gender: " />
              {data.gender}
            </div>
            <div>
              <Label htmlFor="age" text="Age: " />
              {data.age}
            </div>
          </div>
        </div>
        <button className="bg-black text-white px-5 py-2.5 rounded-3xl w-full mt-5" onClick={onChatClick}>Chat</button>
      </div>
    </div>
  );
};

export default PeopleDetails;
