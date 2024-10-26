import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OK } from "../../config/httpStatusCodes";
import { AppDispatch } from "../../app/store";
import { verifyResetPasswordTokenData } from "../../features/auth/verifyResetPasswordToken";

type FormData = {
  new_password: string;
  confirm_password: string;
};

type TogglePassword = {
  new_password: boolean;
  confirm_password: boolean;
}

const resetPasswordValidationSchema = yup.object().shape({
  new_password: yup.string().required("New password is required")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[^\s]{8,15}$/,
      "Password should contains 8-15 characters. At least 1 digit, 1 special character, 1 uppercase letter & 1 lowercase letter."
    ),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("new_password")],
      "New password & confirm password must be same."
    )
    .required("Confirm password is required"),
});

export default function ResetPasswordComponent() {

  const [isTokenExpired, setIsTokenExpired] = useState<boolean>(false);
  const [togglePassword, setTogglePassword] = useState<TogglePassword>({
    new_password: false,
    confirm_password: false
  });
  const [message, setMessage] = useState<string>("");
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    verifyResetPasswordToken();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const verifyResetPasswordToken = async () => {
    if (token) {
      const { payload } = await (dispatch as AppDispatch)(verifyResetPasswordTokenData(token));
      if (payload.status !== OK) {
        setIsTokenExpired(true);
        setMessage(payload.data.message);
      }
    }
  };

  const doSubmit = async (values: FormData) => {
    // const formData = {
    //   token,
    //   password: values.new_password
    // }
    // const { payload } = await (dispatch as AppDispatch)(resetPasswordData(formData));
    // if (payload.status === OK) {
    //   reset();
    //   navigate("/");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(doSubmit)}>
        Reset Password
      </form>
    </div>
  )
}
