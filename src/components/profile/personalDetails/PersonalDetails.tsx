import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Label from "../../common/label/Label";
import Input from "../../common/input/Input";
import SelectBox from "../../common/selectBox/SelectBox";
import CustomButton from "../../common/form/Button";
const signUpValidationSchema = yup
  .object({
    firstname: yup
      .string()
      .required("Full name is required")
      .min(3, "Full name must be minimum 3 character's.")
      .max(32, "Full name must be maximum 32 character's.")
      .matches(
        /^[aA-zZ\s]+$/,
        "Full name cannot have numbers & special characters."
      ),
    lastname: yup
      .string()
      .required("Last name is required")
      .min(3, "Last name must be minimum 3 character's.")
      .max(32, "Last name must be maximum 32 character's.")
      .matches(
        /^[aA-zZ\s]+$/,
        "Full name cannot have numbers & special characters."
      ),
    phoneNumber: yup.string().required("Phone Number is required"),
    age: yup.string().required("Age Number is required"),
    gender: yup.string().required("Gender is required"),
    area: yup.string().required("Area is required"),
    collage: yup.string().required("Collage is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/,
        "Please enter a valid email address."
      )
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[^\s]{8,15}$/,
        "Password should contains 8-15 characters. At least 1 digit, 1 special character, 1 uppercase letter & 1 lowercase letter."
      ),
    type: yup.string().required("Please select user type"),
    referralCode: yup.string().optional(),
  })
  .required();
const PersonalDetails = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    setError,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const values = watch();
  const doSubmit = async (requestData: any) => {};
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
    <form className="w-full" onSubmit={handleSubmit(doSubmit)}>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col w-full justify-start items-start">
          <div className="w-full flex flex-col gap-[30px]  items-start">
            <div className="w-full grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="firstname" text="First name" />
                <Input
                  type="text"
                  placeholder="Enter Your First Name"
                  id="firstname"
                  className="mt-3"
                  {...register("firstname")}
                  onChange={(e) => {
                    setValue("firstname", e.target.value);
                    clearErrors("firstname");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("firstname", {
                        type: "manual",
                        message: "First Name is required!",
                      });
                    } else {
                      clearErrors("firstname");
                    }
                  }}
                />
                {errors.firstname && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.firstname.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="lastname" text="Last name" />
                <Input
                  type="text"
                  placeholder="Enter Your Last name"
                  id="lastname"
                  className="mt-3"
                  {...register("lastname")}
                  onChange={(e) => {
                    setValue("lastname", e.target.value);
                    clearErrors("lastname");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("lastname", {
                        type: "manual",
                        message: "Last Name is required",
                      });
                    } else {
                      clearErrors("lastname");
                    }
                  }}
                />
                {errors.lastname && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.lastname.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="phoneNumber" text="Phone Number" />
                <Input
                  type="number"
                  placeholder="Enter Your Number"
                  id="phoneNumber"
                  className="mt-3"
                  {...register("phoneNumber")}
                  onChange={(e) => {
                    setValue("phoneNumber", e.target.value);
                    clearErrors("phoneNumber");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("phoneNumber", {
                        type: "manual",
                        message: "Phone Number is required!",
                      });
                    } else {
                      clearErrors("phoneNumber");
                    }
                  }}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="email" text="Email Address" />
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  id="email"
                  className="mt-3"
                  {...register("email")}
                  onChange={(e) => {
                    setValue("email", e.target.value);
                    clearErrors("email");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("email", {
                        type: "manual",
                        message: "Email Address is required",
                      });
                    } else {
                      clearErrors("email");
                    }
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.email.message}
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
            </div>
            <div className="w-full">
              <Label htmlFor="referralCode" text="Referral Code" />
              <Input
                type="text"
                placeholder="Enter Referral a Code"
                id="referralCode"
                className="mt-3"
                {...register("referralCode")}
                onChange={(e) => {
                  setValue("referralCode", e.target.value);
                }}
              />
            </div>
          </div>

          {/* <div className="flex flex-row items-center w-full justify-between mt-8">
                  <CustomButton
                    type="submit"
                    className="button__contained w-full"
                  >
                    Save Profile
                  </CustomButton>
                </div> */}
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;
