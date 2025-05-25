import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import AdminHome from "../Layout/Admin/AdminHome";
import UserHome from "../Layout/User/UserHome";
import AdminDashboardLayout from "../Layout/Admin/AdminDashboardLayout";
import UserDashboardLayout from "../Layout/User/UserDashboardLayout";
import Membership from "@/Pages/Home/Membership";
import Pricing from "@/Pages/Home/Pricing";
import AdminProfile from "../Layout/Admin/AdminProfile";
import AdminProfileEdit from "../Layout/Admin/AdminProfileEdit";
import AdminPricing from "@/Layout/Admin/AdminPricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/membership", element: <Membership /> },
      { path: "/pricing", element: <Pricing /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "dashboard", element: <AdminHome /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "editProfile", element: <AdminProfileEdit /> },
      { path: "pricing", element: <AdminPricing /> },
    ],
  },

  {
    path: "/user",
    element: <UserDashboardLayout />,
    children: [
      { index: true, element: <UserHome /> },
      { path: "dashboard", element: <UserHome /> },
    ],
  },

  { path: "/sign_up", element: <Registration /> },
  { path: "/login", element: <Login /> },
  { path: "/verify", element: <EmailVerification /> },
  { path: "/otp_verify", element: <OTP_Verification /> },
  { path: "/reset_password", element: <ResetPassword /> },
]);
