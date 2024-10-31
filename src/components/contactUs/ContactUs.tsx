import { useForm } from "react-hook-form";
import faceBook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Label from "../common/label/Label";
import Input from "../common/input/Input";
import CustomButton from "../common/form/Button";
import { NavLink } from "react-router-dom";

interface ContactUsFormData {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  message: string;
  email: string;
}
const contactUsValidationSchema = yup
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
    message: yup.string().required("Message is required"),
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

const ContactUs = () => {
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
  } = useForm<ContactUsFormData>({
    resolver: yupResolver(contactUsValidationSchema),
  });

  const values = watch();

  const doSubmit = async (requestData: ContactUsFormData) => {};
  return (
    <div className="flex flx-row gap-24 w-full font-poppins pb-10">
      <div className="bg-white border-[0.5px] border-light-gray-300 w-1/2 h-full pt-9 pb-10 px-24 rounded-[10px] flex flex-col gap-9">
        <h1 className="text-2xl leading-9 font-semibold text-black-100 ">
          Get In Touch{" "}
        </h1>
        <div className="flex flex-col">
          <h2 className="text-black-100 leading-8 font-semibold text-xl">
            Visit us
          </h2>
          <p className="text-gray-200 leading-6 font-normal text-base">
            Ghatlodiya is an area in Ahmedabad in the state of Gujarat, in
            western India. Ghatlodiya. neighbourhood. Ghatlodiya is located in
            Gujarat. Ghatlodiya
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-black-100 leading-8 font-semibold text-xl">
            Chat to US
          </h2>
          <p className="text-gray-200 leading-6 font-normal text-base">
            our friendly foam is here to help.
          </p>
          <p className="text-black-100 leading-5 font-medium text-sm">
            hello@Sahil.com
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-black-100 leading-8 font-semibold text-xl">
            Call US
          </h2>
          <p className="text-gray-200 leading-6 font-normal text-base">
            mon-fir from Bam to 6p
          </p>
          <p className="text-black-100 leading-5 font-medium text-sm">
            (+91) 655-55-55-55
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-black-100 leading-8 font-semibold text-xl">
            Social Media
          </h2>
          <div className="flex flex-row items-center gap-8 mt-4">
            <NavLink to="https://www.facebook.com/" target="_blank">
              <img src={faceBook} alt="facebook" width={11} height={20} />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="instagram" width={20} height={20} />
            </NavLink>
            <NavLink to="https://x.com/?lang=en" target="_blank">
              <img src={twitter} alt="twitter" width={22} height={18} />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <form onSubmit={handleSubmit(doSubmit)} className="h-full">
          <div className="w-full flex flex-col gap-[30px]  items-start">
            <div className="w-full gap-6">
              <div className="flex flex-row gap-4 justify-between w-full">
                <div className="w-full">
                  <Label htmlFor="firstname" text="First name" />
                  <Input
                    type="text"
                    placeholder="Enter Your First Name"
                    id="firstname"
                    className="mt-2.5"
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
                <div className="w-full">
                  <Label htmlFor="lastname" text="Last name" />
                  <Input
                    type="text"
                    placeholder="Enter Your Last name"
                    id="lastname"
                    className="mt-2.5"
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
              </div>
              <div className="mt-5 w-full">
                <Label htmlFor="phoneNumber" text="Phone Number" />
                <Input
                  type="number"
                  placeholder="Enter Your Number"
                  id="phoneNumber"
                  className="mt-2.5"
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
              <div className="mt-5 w-full">
                <Label htmlFor="email" text="Email Address" />
                <Input
                  type="text"
                  placeholder="Enter Your Email Address"
                  id="email"
                  className="mt-2.5"
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
              <div className="mt-5 w-full flex flex-col">
                <Label htmlFor="message" text="Message" />
                <textarea
                  placeholder="Enter Your Message"
                  id="message"
                  rows={6}
                  cols={5}
                  className="mt-2.5 border border-light-gray-300 rounded-md py-2.5 px-4"
                  {...register("message")}
                  onChange={(e) => {
                    setValue("message", e.target.value);
                    clearErrors("message");
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      setError("message", {
                        type: "manual",
                        message: "Message is required",
                      });
                    } else {
                      clearErrors("message");
                    }
                  }}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm leading-5 font-normal mt-2">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full mt-7">
            <CustomButton className="button__contained w-full" type="submit">
              Send Message
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
