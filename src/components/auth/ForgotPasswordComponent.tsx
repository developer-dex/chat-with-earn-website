import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OK } from "../../config/httpStatusCodes";
import { AppDispatch } from "../../app/store";
import { forgotPasswordData } from "../../features/auth/forgotPasswordSlice";
import { showSuccess } from "../../helpers/messageHelper";

const forgotPasswordValidationSchema = yup
  .object({
    email: yup.string()
      .required("Email is required")
      .matches(/^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, "Please enter a valid email address.")
      .email("Please enter a valid email address"),
  })
  .required();

export default function ForgotPasswordComponent() {

  const dispatch = useDispatch();

  type FormData = yup.InferType<typeof forgotPasswordValidationSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const doSubmit = async (requestData: FormData) => {
    const { payload } = await (dispatch as AppDispatch)(forgotPasswordData(requestData));
    if (payload.status === OK) {
      showSuccess(payload.data.message);
      reset();
    }
  };

  return (
    <div>
      Forgot password
    </div>
  )
}
