import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

type FormData = yup.InferType<typeof signUpValidationSchema> & Partial<InitialValues>;

type SignUpProps = {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  currentActiveTab: string;
};

const signUpValidationSchema = yup
  .object({
    username: yup.string().required("Full name is required")
      .min(3, "Full name must be minimum 3 character's.")
      .max(32, "Full name must be maximum 32 character's.")
      .matches(
        /^[aA-zZ\s]+$/,
        "Full name cannot have numbers & special characters."
      ),
    email: yup.string()
      .required("Email is required")
      .matches(/^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, "Please enter a valid email address.")
      .email("Please enter a valid email address"),
    password: yup.string()
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
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      type: "customer"
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

  return (
    <>
      <form onSubmit={handleSubmit(doSubmit)}>
        Sign Up
      </form>
    </>
  )
}
