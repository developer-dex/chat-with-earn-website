import { Routes, Route } from "react-router-dom";
import { UnauthenticatedRoute } from "./Unauthenticated";

import PageNotFound from "../hoc/PageNotFound";
import ResetPassword from "../pages/auth/ResetPassword";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";
import { AuthenticatedRoute } from "./Authenticated";
import ContactUsPage from "../pages/contactUs/ContactUsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import PeoplePage from "../pages/people/PeoplePage";
import CareerPage from "../pages/career/CareerPage";
import HomePage from "../pages/home/HomePage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<UnauthenticatedRoute />}>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
    </Route>

    <Route element={<AuthenticatedRoute />}>
      <Route path="chat" element={<HomePage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="people" element={<PeoplePage />} />
      <Route path="career" element={<CareerPage />} />
      <Route path="dashboard" element={<HomePage />} />
      <Route path="about-us" element={<AboutUsPage />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
