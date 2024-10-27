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

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<UnauthenticatedRoute />}>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="contact-us" element={<ContactUsPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>

    <Route element={<AuthenticatedRoute />}>
      <Route path="chat" element={<SignUp />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
