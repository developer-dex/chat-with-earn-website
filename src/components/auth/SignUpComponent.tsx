import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SliderContentCard from "../common/sliderContentCard/SliderContentCard";
import Slider from "../common/slider/Slider";
import slideImage from "./../../assets/images/photorealistic-money-concept 1.png";
import Logo from "../common/logo/Logo";
import Label from "../common/label/Label";
import Input from "../common/input/Input";
import CustomButton from "../common/form/Button";
import SelectBox from "../common/selectBox/SelectBox";

type InitialValues = {
  username: string;
  email: string;
  mobile: string;
  password: string;
};

export type PhoneObject = {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
};

type FormData = yup.InferType<typeof signUpValidationSchema> &
  Partial<InitialValues>;

type SignUpProps = {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  currentActiveTab: string;
};

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
  })
  .required();

export default function SignUpComponent() {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [mobileError, setMobileError] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const mobileNumberHandler = (value: string, code: PhoneObject) => {
    setCode(code?.dialCode);
    setValue("mobile", value);
    let number = value.substring(code?.dialCode?.length);
    setMobile(number);
    if (!number) {
      setMobileError("Mobile is required");
    } else if (number && !(number.length > 8 && number.length < 16)) {
      setMobileError("Mobile number must be 9 to 15 digits.");
    } else {
      setMobileError("");
    }
  };

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
  } = useForm<FormData>({
    defaultValues: {
      type: "customer",
    },
    resolver: yupResolver(signUpValidationSchema),
  });

  const values = watch();

  const doSubmit = async (requestData: FormData) => {
    // if (!values.mobile) {
    //   setMobileError("Mobile is required");
    // } else {
    //   const formData = {
    //     full_name: requestData.username,
    //     email: requestData.email,
    //     password: requestData.password,
    //     isd_code: code,
    //     mobile,
    //     type: requestData.type === "customer" ? 1 : 2,
    //   };
    //   const { payload } = await (dispatch as AppDispatch)(signUpData(formData));
    //   if (payload.status === OK) {
    //     const { data } = payload.data;
    //     Mixpanel.identify(data.user.uuid);
    //     Mixpanel.people.set({
    //       '$name': requestData.username,
    //       '$email': requestData.email,
    //     });
    //     Mixpanel.track("Sign up button clicked", { Page: "Sign up page" });
    //     setSession(data.access_token);
    //     setLocalStorageItem(config.localStorageRefreshTokenKey, data.refresh_token);
    //     setCurrentModal("verifyOtpModal");
    //     reset();
    //   }
    // }
  };

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
    <div className="flex flex-row min-h-screen relative bg-light-gray-200 gap-10  py-4 px-6 w-full">
      <form className="w-[55%] pl-16   h-auto" onSubmit={handleSubmit(doSubmit)}>
        <div className="flex flex-col justify-between  max-w-[592px] w-full h-full">
          <div className="flex flex-col w-full justify-between items-start">
            <Logo width={110} height={110} />
            <div className="w-full flex flex-col gap-[30px] mt-[50px] items-start">
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
            </div>
            <div className="flex flex-row items-center py-6 w-full gap-1.5 ml-0.5">
              <input type="checkbox" className="!w-max cursor-pointer" />
              <p className="text-gray-300 font-medium text-base leading-6">
                i agree the terms and Conditions
              </p>
            </div>
            <div className="flex flex-row items-center w-full justify-between mb-5">
              <CustomButton
                type="submit"
                className="button__contained w-[235px]"
              >
                Sign Up
              </CustomButton>
              <CustomButton
                type="button"
                onClick={() => navigate("/")}
                className="button__outline w-[235px]"
              >
                Sign in
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
      <div className="relative w-[45%] h-auto bg-black rounded-t-[20px] rounded-br-[20px] rounded-bl-[96px] py-16">
        <Slider>
          <SliderContentCard
            title="Earn Money"
            description={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut"
            }
            imageSrc={slideImage}
          />
          <SliderContentCard
            title="Earn Money"
            description={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut"
            }
            imageSrc={slideImage}
          />
        </Slider>
      </div>
    </div>
  );
}
