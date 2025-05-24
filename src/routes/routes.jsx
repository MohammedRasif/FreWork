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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> }
      
    ],
  },

  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "dashboard", element: <AdminHome /> },
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
