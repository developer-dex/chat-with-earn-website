import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OK } from "../../config/httpStatusCodes";
import { AppDispatch } from "../../app/store";
import { loginData } from "../../features/auth/loginSlice";
import Slider from "../common/slider/Slider";
import SliderContentCard from "../common/sliderContentCard/SliderContentCard";
import slideImage from "./../../assets/images/photorealistic-money-concept 1.png";
import Input from "../common/input/Input";
import Label from "../common/label/Label";
import CustomButton from "../common/form/Button";
import Logo from "../common/logo/Logo";

const loginValidationSchema = yup
  .object({
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
  })
  .required();

export default function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  type FormData = yup.InferType<typeof loginValidationSchema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginValidationSchema),
  });

  const doSubmit = async (requestData: FormData) => {
    // const { payload } = await (dispatch as AppDispatch)(loginData(requestData));
    // if (payload.status === OK) {
    //   // const { data, message } = payload.data;
    //   // Mixpanel.identify(data.user.uuid);
    //   // Mixpanel.track("Login button clicked", { Page: "Login page" });
    //   // setSession(data.access_token);
    //   // setLocalStorageItem(config.localStorageRefreshTokenKey, data.refresh_token);
    //   // remember ? setUserCredentials(JSON.stringify(requestData)) : localStorage.removeItem("rememberMe");
    //   // encryptUserData(JSON.stringify(data.user));
    //   // if (!data.user.mobile_verified_at || !JSON.parse(decryptUserData()).mobile_verified_at) {
    //   //   setCurrentModal("verifyOtpModal");
    //   // } else {
    //   //   reset();
    //   //   showSuccess(message);
    //   //   navigateToDestination(data.user.current_type, data.user.is_profile_completed);
    //   // }
    // }
  };

  return (
    <div className="flex flex-row min-h-screen relative bg-light-gray-200  gap-10 py-4 px-6 w-full h-full">
      <form className="w-[55%] pl-16 h-auto" onSubmit={handleSubmit(doSubmit)}>
        <div className="flex flex-col justify-between  max-w-[592px] w-full h-full">
          <div className="flex flex-col w-full">
            <Logo width={110} height={110} />
            <div className="w-full flex flex-col gap-[30px] mt-[50px] items-start">
              <div className="w-full flex flex-col">
                <Label htmlFor="username" text="User Name" />
                <Input
                  type="text"
                  placeholder="Enter Your UserName"
                  id="username"
                  className="mt-3"
                  {...register("username")}
                  onChange={(e) => {
                    setValue("username", e.target.value);
                    clearErrors("username");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("username", {
                        type: "manual",
                        message: "Username is required",
                      });
                    } else {
                      clearErrors("username");
                    }
                  }}
                />
                {errors.username && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col">
                <Label htmlFor="password" text="Password" />
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  className="mt-3"
                  {...register("password")}
                  onChange={(e) => {
                    setValue("password", e.target.value);
                    clearErrors("password");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("password", {
                        type: "manual",
                        message: "Password is required",
                      });
                    } else {
                      clearErrors("password");
                    }
                  }}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.password.message}
                  </span>
                )}
                <NavLink to="/forgot-password" className="text-gray-300 w-full text-end text-base leading-6 font-normal mt-4 font-poppins">Forgot Password?</NavLink>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full justify-between mb-10">
            <CustomButton
              type="button"
              onClick={() => navigate("/sign-up")}
              className="button__contained w-[235px]"
            >
              Sign Up
            </CustomButton>
            <CustomButton type="submit" className="button__outline w-[235px]">
              Sign in
            </CustomButton>
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
