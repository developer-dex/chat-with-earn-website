import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OK } from "../../config/httpStatusCodes";
import { AppDispatch } from "../../app/store";
import { forgotPasswordData } from "../../features/auth/forgotPasswordSlice";
import { showSuccess } from "../../helpers/messageHelper";
import CustomButton from "../common/form/Button";
import { NavLink } from "react-router-dom";
import Slider from "../common/slider/Slider";
import SliderContentCard from "../common/sliderContentCard/SliderContentCard";
import slideImage from "./../../assets/images/photorealistic-money-concept 1.png";
import Label from "../common/form/Label";
import Input from "../common/form/Input";
import Logo from "../common/logo/Logo";
const forgotPasswordValidationSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/,
        "Please enter a valid email address."
      )
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
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const doSubmit = async (requestData: FormData) => {
    const { payload } = await (dispatch as AppDispatch)(
      forgotPasswordData(requestData)
    );
    if (payload.status === OK) {
      showSuccess(payload.data.message);
      reset();
    }
  };

  return (
    <div className="flex flex-row min-h-screen relative bg-light-gray-200  py-4 px-6 w-full">
      <form className="w-[55%] pl-16  h-auto" onSubmit={handleSubmit(doSubmit)}>
        <div className="flex flex-col justify-between  max-w-[500px] w-full h-full">
          <div className="flex flex-col w-full">
            <Logo width={110} height={110} />
            <div className="w-full flex flex-col gap-[30px] mt-[100px] items-start h-full justify-center">
              <div className="w-full flex flex-col">
                <Label htmlFor="email" text="Email" />
                <Input
                  type="text"
                  placeholder="Enter Your Email"
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
                        message: "Email is required",
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
            </div>
              <div className="flex flex-row items-center w-full justify-between mt-20">
                <CustomButton
                  type="submit"
                  className="button__contained w-full"
                >
                  Submit
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
