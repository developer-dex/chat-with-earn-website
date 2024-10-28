import React, { useState } from "react";
import ProfileImage from "../../../assets/images/profile.png";
import Label from "../../common/label/Label";
import Input from "../../common/input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectBox from "../../common/selectBox/SelectBox";

const forgotPasswordValidationSchema = yup
  .object({
    user_id: yup.string().required("User id is required"),
    fullName: yup.string().required("Full Name is required"),
    age: yup.string().required("Age Number is required"),
    gender: yup.string().required("Gender is required"),
    area: yup.string().required("Area is required"),
    collage: yup.string().required("Collage is required"),
  }).required();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
const PeopleDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
      clearErrors,
      watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });
  const [selectedOption, setSelectedOption] = useState<string>("");
    const doSubmit = async () => { };
    const handleSelectChange = (field: any, value: string) => {
        setSelectedOption(value);
        setValue(field, value);
        if (!value) {
          setError(field, { type: "manual", message: `${field} is required!` });
        } else {
          clearErrors(field);
        }
      };
  return (
    <div className="border-[0.5px] border-light-gray-400 rounded-[10px] px-[30px] py-8 shadow-profileFormShadow">
      <div>
        <div className="flex flex-row items-center gap-6">
          <img src={ProfileImage} alt="profile" width={60} height={60} />
          <h4>Sumit Patel</h4>
        </div>
        <form className="w-full mt-9" onSubmit={handleSubmit(doSubmit)}>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <div className="w-full flex flex-col">
              <Label htmlFor="user_id" text="User Id" />
              <Input
                type="text"
                placeholder="Enter Your UserId"
                id="user_id"
                className="mt-3"
                {...register("user_id")}
                onChange={(e) => {
                  setValue("user_id", e.target.value);
                  clearErrors("user_id");
                }}
                onBlur={(e) => {
                  const value = e.target.value;
                  if (!value) {
                    setError("user_id", {
                      type: "manual",
                      message: "User Id is required",
                    });
                  } else {
                    clearErrors("user_id");
                  }
                }}
              />
              {errors.user_id && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.user_id.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <Label htmlFor="fullName" text="Full Name" />
              <Input
                type="text"
                placeholder="Enter Your Full Name"
                id="fullName"
                className="mt-3"
                {...register("fullName")}
                onChange={(e) => {
                  setValue("fullName", e.target.value);
                  clearErrors("fullName");
                }}
                onBlur={(e) => {
                  const value = e.target.value;
                  if (!value) {
                    setError("fullName", {
                      type: "manual",
                      message: "Full Name is required",
                    });
                  } else {
                    clearErrors("fullName");
                  }
                }}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.fullName.message}
                </span>
              )}
                      </div>
                      <div>
              <Label htmlFor="area" text="Area" />
              <SelectBox
                options={options}
                onChange={(value) => handleSelectChange("area", value)}
                placeholder="area"
                className="mt-3"
                onBlur={() => {
                  const value = watch("area");
                  if (!value) {
                    setError("area", {
                      type: "manual",
                      message: "Area is required!",
                    });
                  }
                }}
                defaultValue="22-8-2000"
              />
              {errors.area && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.area.message}
                </span>
              )}
                      </div>
                      <div>
              <Label htmlFor="collage" text="Collage" />
              <SelectBox
                options={options}
                onChange={(value) => handleSelectChange("collage", value)}
                onBlur={() => {
                  const value = watch("collage");
                  if (!value) {
                    setError("collage", {
                      type: "manual",
                      message: "Collage is required!",
                    });
                  }
                }}
                placeholder="collage"
                className="mt-3"
                defaultValue="22-8-2000"
              />
              {errors.collage && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.collage.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="gender" text="Gender" />
              <SelectBox
                options={options}
                onChange={(value) => handleSelectChange("gender", value)}
                onBlur={() => {
                  const value = watch("gender");
                  if (!value) {
                    setError("gender", {
                      type: "manual",
                      message: "Gender is required!",
                    });
                  }
                }}
                placeholder="Male"
                className="mt-3"
              />
              {errors.gender && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.gender.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="age" text="Age" />
              <SelectBox
                options={options}
                onChange={(value) => handleSelectChange("age", value)}
                placeholder="age"
                className="mt-3"
                onBlur={() => {
                  const value = watch("age");
                  if (!value) {
                    setError("age", {
                      type: "manual",
                      message: "Age is required!",
                    });
                  }
                }}
                defaultValue="22-8-2000"
              />
              {errors.age && (
                <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                  {errors.age.message}
                </span>
              )}
            </div>
            
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default PeopleDetails;
