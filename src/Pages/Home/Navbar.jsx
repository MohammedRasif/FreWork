"use client";

import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Update activeLink based on the current route
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveLink("home");
    } else if (pathname === "/membership") {
      setActiveLink("membership");
    } else if (pathname === "/pricing") {
      setActiveLink("agencies");
    } else if (pathname === "/tourPlan") {
      setActiveLink("tours");
    } else if (pathname === "/contact") {
      setActiveLink("contact");
    }
  }, [location.pathname]);

  // Toggle dropdown and close on link click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link, path) => {
    setActiveLink(link);
    setIsOpen(false); // Close dropdown on link click
    navigate(path); // Navigate to the selected route
  };

  // Hamburger icon animation variants
  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 90,
    },
  };

  // Dropdown menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Logo/Brand */}
      <div className="font-bold text-[20px] text-gray-800">VacnzaMyCost.It</div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <motion.button
          onClick={toggleMenu}
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariants}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden lg:flex items-center space-x-8">
        <NavLink
          to="/"
          className={`text-base text-[20px] font-medium ${
            activeLink === "home"
              ? "text-[#2464EC] border-b-2 border-[#2464EC]"
              : "text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleLinkClick("home", "/")}
        >
          Home
        </NavLink>
        <NavLink
          to="/membership"
          className={`text-base text-[20px] font-medium ${
            activeLink === "membership"
              ? "text-[#2464EC] border-b-2 border-[#2464EC]"
              : "text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleLinkClick("membership", "/membership")}
        >
          Agencies
        </NavLink>
        <NavLink
          to="/pricing"
          className={`text-base text-[20px] font-medium ${
            activeLink === "agencies"
              ? "text-[#2464EC] border-b-2 border-[#2464EC]"
              : "text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleLinkClick("agencies", "/pricing")}
        >
          Membership Plans
        </NavLink>
        <NavLink
          to="/tourPlan"
          className={`text-base text-[20px] font-medium ${
            activeLink === "tours"
              ? "text-[#2464EC] border-b-2 border-[#2464EC]"
              : "text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleLinkClick("tours", "/tourPlan")}
        >
          Tour Plans
        </NavLink>
        <NavLink
          to="/contact"
          className={`text-base text-[20px] font-medium ${
            activeLink === "contact"
              ? "text-[#2464EC] border-b-2 border-[#2464EC]"
              : "text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleLinkClick("contact", "/contact")}
        >
          Contact
        </NavLink>
      </div>

      {/* Auth Buttons - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        <NavLink to="/login">
          <button className="px-6 py-2 text-[20px] bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="px-6 py-2 text-[20px] bg-[#3776E2] text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
            Register
          </button>
        </NavLink>
      </div>

      {/* Dropdown Menu - Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg lg:hidden z-50"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <NavLink
                to="/"
                className={`text-base text-[20px] font-medium ${
                  activeLink === "home"
                    ? "text-[#2464EC] border-b-2 border-[#2464EC]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleLinkClick("home", "/")}
              >
                Home
              </NavLink>
              <NavLink
                to="/membership"
                className={`text-base text-[20px] font-medium ${
                  activeLink === "membership"
                    ? "text-[#2464EC] border-b-2 border-[#2464EC]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleLinkClick("membership", "/membership")}
              >
                Agencies
              </NavLink>
              <NavLink
                to="/pricing"
                className={`text-base text-[20px] font-medium ${
                  activeLink === "agencies"
                    ? "text-[#2464EC] border-b-2 border-[#2464EC]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleLinkClick("agencies", "/pricing")}
              >
                Membership Plans
              </NavLink>
              <NavLink
                to="/tourPlan"
                className={`text-base text-[20px] font-medium ${
                  activeLink === "tours"
                    ? "text-[#2464EC] border-b-2 border-[#2464EC]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleLinkClick("tours", "/tourPlan")}
              >
                Tour Plans
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-base text-[20px] font-medium ${
                  activeLink === "contact"
                    ? "text-[#2464EC] border-b-2 border-[#2464EC]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleLinkClick("contact", "/contact")}
              >
                Contact
              </NavLink>
              <NavLink to="/login">
                <button
                  className="px-6 py-2 text-[20px] bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button
                  className="px-6 py-2 text-[20px] bg-[#3776E2] text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;