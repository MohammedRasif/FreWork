import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import AdminHome from "../Layout/Admin/AdminHome";
import UserDashboardLayout from "../Layout/User/UserDashboardLayout";
import { CreatedPlan } from "@/Layout/User/CreatedPlan"; // Ensure this alias resolves correctly
import AdminDashboardLayout from "@/Layout/Admin/AdminDashboardLayout";
import { PublishedPlan } from "@/Layout/User/PublishedPlan";
import HomeLayout from "@/Layout/User";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ index: true, element: <Home /> }, // Default route for /
		],
	},

	{
		path: "/admin",
		element: <AdminDashboardLayout />,
		children: [
			{ index: true, element: <AdminHome /> }, // Default route for /admin
			{ path: "dashboard", element: <AdminHome /> }, // Optional separate dashboard route
		],
	},

	{
		path: "/user",
		element: <UserDashboardLayout />,
		children: [
			{
				index: true,
				path: "created",
				element: (
					<HomeLayout>
						<CreatedPlan />
					</HomeLayout>
				),
			}, // Default route for /user (maps to /user/)
			{
				index: true,
				path: "published",
				element: (
					<HomeLayout>
						<PublishedPlan />
					</HomeLayout>
				),
			}, // Default route for /user (maps to /user/)
			// If HomeLayout is intended as a separate section, add it as a named route
			// { path: "home", element: <HomeLayout /> },
		],
	},

	{ path: "/sign_up", element: <Registration /> },
	{ path: "/login", element: <Login /> },
	{ path: "/verify", element: <EmailVerification /> },
	{ path: "/otp_verify", element: <OTP_Verification /> },
	{ path: "/reset_password", element: <ResetPassword /> },
]);
