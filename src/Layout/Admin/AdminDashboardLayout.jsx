import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
	Bell,
	ChevronDown,
	ClipboardList,
	CircleArrowUp,
	LogOut,
	Mail,
	MessageCircle,
	UserRound,
	Lock,
} from "lucide-react";
import UserAvatar from "../../assets/img/bruce-mars.png";
import { SlDiamond } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminDashboardLayout() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selectedItem, setSelectedItem] = useState("Dashboard");
	const location = useLocation();
	const navigate = useNavigate();
	const menuItems = [
		{
			items: [
				{
					name: "My Plans",
					icon: <ClipboardList size={20} />,
					path: "/admin",
				},
				{
					name: "Notifications",
					icon: <Bell size={20} />,
					path: "admin/admin_notification",
				},
				{
					name: "Membership",
					icon: <UserRound size={20} />,
					path: "admin/membership",
				},
				{
					name: "Conversations",
					icon: <MessageCircle size={20} />,
					path: "/conversations",
				},
				{
					name: "Profile",
					icon: <UserRound size={20} />,
					path: "admin/profile",
				},

				{ name: "Logout", icon: <LogOut size={20} />, path: "/logout" },
			],
		},
	];

	// Sync selectedItem with current route on initial load
	useEffect(() => {
		const currentItem = menuItems[0].items.find(
			(item) => item.path === location.pathname
		);
		if (currentItem) {
			setSelectedItem(currentItem.name);
		}
	}, [location.pathname]);

	const handleItemClick = (itemName, path) => {
		setSelectedItem(itemName); // Update the selected item on click
		navigate(path); // Navigate to the clicked item's path
	};

	return (
		<div className="flex h-screen bg-[#F8F9FA]">
			{/* Sidebar */}
			<aside
				className={`${
					isCollapsed ? "w-20" : "w-80"
				} transition-all duration-500 ease-in-out`}
			>
				{/* Logo */}
				<div className="h-auto flex items-center px-4">
					<div className="flex flex-col w-full justify-center items-center gap-2 mt-24">
						<div
							className={`transform transition-all duration-500 ${
								isCollapsed
									? "opacity-0 -translate-x-full"
									: "opacity-100 translate-x-0"
							}`}
						>
							<img src={UserAvatar} alt="User" />
						</div>

						<div className="w-full flex flex-col gap-1 pl-3">
							<h3 className="text-2xl text-center font-normal text-[#343E4B]">
								Company Profile
							</h3>
							<span className="text-center text-md text-[#8C8C8C]">
								username
							</span>
						</div>
					</div>
				</div>

				{/* Navigation */}
				<nav className="p-4 mt-6">
					{menuItems.map((section, idx) => (
						<div key={idx} className="mb-8">
							<ul className="space-y-2 *:outline-none">
								{section.items.map((item, itemIdx) => (
									<li key={itemIdx}>
										<Link
											to={item.path}
											onClick={() =>
												handleItemClick(
													item.name,
													item.path
												)
											}
											className={`flex items-center gap-3 px-3 py-2 text-[#67748E] rounded-lg group relative ${
												selectedItem === item.name
													? "bg-[#3776E2] text-white font-semibold"
													: ""
											}`}
										>
											<span className="p-2 rounded-lg bg-white text-[#67748E] shadow-[0_2px_4px_-1px_#00000030]">
												{item.icon}
											</span>
											<span
												className={`transform transition-all duration-500 text-md font-semibold ${
													isCollapsed
														? "opacity-0 -translate-x-full"
														: "opacity-100 translate-x-0"
												} whitespace-nowrap`}
											>
												{item.name}
											</span>
											{item.badge && !isCollapsed && (
												<span className="ml-auto bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
													{item.badge}
												</span>
											)}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="h-44 w-full flex flex-col bg-[url('/src/assets/img/dashboard-menu-help-card-bg.png')] bg-no-repeat bg-center p-5 gap-2 rounded-2xl">
						<div className="w-8 h-8 flex items-center justify-center bg-white shadow-[0_2px_4px_-1px_#00000030] p-2 rounded-md">
							<SlDiamond size={16} />
						</div>
						<div className="w-full flex flex-col gap-1">
							<h3 className="font-open-sans text-base font-semibold">
								Need Help
							</h3>
							<h5 className="font-open-sans text-sm font-normal">
								Please check our docs
							</h5>
							<Button variant="white">DOCUMENTATION</Button>
						</div>
					</div>
				</nav>
			</aside>

			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Navbar */}
				<header className="h-16 bg-[#F8F9FA]">
					<div className="h-full px-4 flex items-center justify-between">
						<div className="flex items-center gap-4">
							{/* <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-300"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button> */}
							<div className="flex flex-col">
								<h1 className="text-2xl font-medium text-[#343E4B] flex gap-4 items-end">
									Wednesday
									<span className="text-xs font-normal">
										25 july, 2025
									</span>
								</h1>
							</div>
						</div>
						<div className="flex items-center gap-8 me-10">
							<button className="p-2 bg-[#EEF1F5] rounded-full relative">
								<Bell size={24} />
								<div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
							</button>
							<div className="flex items-center justify-center gap-5">
								<h4 className="text-xl font-medium">
									Settings
								</h4>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<button className="cursor-pointer">
											<ChevronDown size={20} />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-56"
										align="end"
									>
										<DropdownMenuItem>
											<CircleArrowUp size={20} />
											Upgrade package
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Mail size={20} />
											Contact support
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Lock size={20} />
											Change password
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="flex-1 overflow-auto  bg-[#F5F5F6]">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
