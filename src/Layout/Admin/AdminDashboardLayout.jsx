"use client";

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
  Menu,
  X,
} from "lucide-react";
import UserAvatar from "../../assets/img/bruce-mars.png"; // Fallback image
import { SlDiamond } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAgencyProfileQuery } from "@/redux/features/withAuth";

export default function AdminDashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();
  const { data: agencyData, isLoading } = useGetAgencyProfileQuery();

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
          path: "admin/chat",
        },
        {
          name: "Profile",
          icon: <UserRound size={20} />,
          path: "admin/profile",
        },
        { name: "Logout", icon: <LogOut size={20} />, path: "/" },
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-sidebar") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleItemClick = (itemName, path) => {
    setSelectedItem(itemName);
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"></div>
      )}

      {/* Sidebar - Desktop */}
      <aside
        className={`hidden lg:block ${
          isCollapsed ? "w-20" : "w-80"
        } transition-all duration-500 ease-in-out`}
      >
        {/* Logo/Profile Section */}
        <div className="h-auto flex items-center px-4">
          <div className="flex flex-col w-full justify-center items-center mt-16">
            <div
              className={`transform transition-all duration-500 ${
                isCollapsed
                  ? "opacity-0 -translate-x-full"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <img
                src={
                  isLoading
                    ? UserAvatar
                    : agencyData?.coverImageUrl || UserAvatar
                }
                alt={agencyData?.name || "User"}
                className="w-16 h-16 rounded-full"
              />
            </div>

            <div className="w-full flex flex-col gap-1 pl-3">
              <h3 className="text-2xl text-center font-normal text-[#343E4B]">
                {isLoading
                  ? "Loading..."
                  : agencyData?.name || "Company Profile"}
              </h3>
              <span className="text-center text-md text-[#8C8C8C]">
                {isLoading ? "Loading..." : agencyData?.position || "username"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 mt-6">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item.name, item.path)}
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
          <div className="h-44 w-full flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 bg-no-repeat bg-center p-5 gap-2 rounded-2xl">
            <div className="w-8 h-8 flex items-center justify-center bg-white shadow-[0_2px_4px_-1px_#00000030] p-2 rounded-md">
              <SlDiamond size={16} />
            </div>
            <div className="w-full flex flex-col gap-1">
              <h3 className="font-open-sans text-base font-semibold text-white">
                Need Help
              </h3>
              <h5 className="font-open-sans text-sm font-normal text-white">
                Please check our docs
              </h5>
              <Button
                variant="secondary"
                className="bg-white text-gray-800 hover:bg-gray-100"
              >
                DOCUMENTATION
              </Button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`mobile-sidebar fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h meadows className="text-lg font-semibold text-[#343E4B]">
            Menu
          </h>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Logo/Profile Section */}
        <div className="h-auto flex items-center px-4">
          {console.log(agencyData?.cover_photo_url)}
          <div className="flex flex-col w-full justify-center items-center mt-8">
            <div>
              <img
                src={(!isLoading && agencyData?.cover_photo_url) || UserAvatar}
                alt={agencyData?.name || "User"}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-1 pl-3 mt-4">
              <h3 className="text-xl text-center font-normal text-[#343E4B]">
                {isLoading
                  ? "Loading..."
                  : agencyData?.name || "Company Profile"}
              </h3>
              <span className="text-center text-sm text-[#8C8C8C]">
                {isLoading ? "Loading..." : agencyData?.position || "username"}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="p-4 mt-6">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item.name, item.path)}
                      className={`flex items-center gap-3 px-3 py-2 text-[#67748E] rounded-lg group relative ${
                        selectedItem === item.name
                          ? "bg-[#3776E2] text-white font-semibold"
                          : ""
                      }`}
                    >
                      <span className="p-2 rounded-lg bg-white text-[#67748E] shadow-[0_2px_4px_-1px_#00000030]">
                        {item.icon}
                      </span>
                      <span className="text-md font-semibold whitespace-nowrap">
                        {item.name}
                      </span>
                      {item.badge && (
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
          <div className="h-44 w-full flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 bg-no-repeat bg-center p-5 gap-2 rounded-2xl">
            <div className="w-8 h-8 flex items-center justify-center bg-white shadow-[0_2px_4px_-1px_#00000030] p-2 rounded-md">
              <SlDiamond size={16} />
            </div>
            <div className="w-full flex flex-col gap-1">
              <h3 className="font-open-sans text-base font-semibold text-white">
                Need Help
              </h3>
              <h5 className="font-open-sans text-sm font-normal text-white">
                Please check our docs
              </h5>
              <Button
                variant="secondary"
                className="bg-white text-gray-800 hover:bg-gray-100"
              >
                DOCUMENTATION
              </Button>
            </div>
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-[#F8F9FA]">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-button lg:hidden p-2 hover:bg-gray-200 rounded-full transition-colors duration-300"
              >
                <Menu size={20} />
              </button>

              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-medium text-[#343E4B] flex gap-2 sm:gap-4 items-end">
                  Wednesday
                  <span className="text-xs font-normal">25 July, 2025</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 me-2 sm:me-10">
              <button className="p-2 bg-[#EEF1F5] rounded-full relative">
                <Bell size={20} sm:size={24} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              <div className="hidden sm:flex items-center justify-center gap-5">
                <h4 className="text-xl font-medium">Settings</h4>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer">
                      <ChevronDown size={20} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
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

              {/* Mobile Settings Dropdown */}
              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer p-2">
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
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
        <main className="flex-1 overflow-auto bg-[#F5F5F6] p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
