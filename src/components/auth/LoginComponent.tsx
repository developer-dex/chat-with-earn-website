import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OK } from "../../config/httpStatusCodes";
import { AppDispatch } from "../../app/store";
import { loginData } from "../../features/auth/loginSlice";

const loginValidationSchema = yup
  .object({
    email: yup.string()
      .matches(/^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, "Please enter a valid email address.")
      .email("Please enter a valid email address")
      .required("Email cannot be blank!"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function LoginComponent() {

  const dispatch = useDispatch();


  type FormData = yup.InferType<typeof loginValidationSchema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
    <form className="bg-black" onSubmit={handleSubmit(doSubmit)}>
      Login form
    </form>
  )
}
