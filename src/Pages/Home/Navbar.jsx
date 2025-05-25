"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home")

    return (
        <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between ">
            {/* Logo/Brand */}
            <div className="font-bold text-[20px] text-gray-800">VacnzaMyCost.It</div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 ">
                <NavLink
                    href="#"
                    className={`text-base text-[20px] font-medium ${activeLink === "home" ? "text-[#2464EC] border-b-2 border-[#2464EC]" : "text-gray-700 hover:text-blue-600"}`}
                    onClick={() => setActiveLink("home")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/membership"
                    className={`text-base text-[20px] font-medium ${activeLink === "membership" ? "text-[#2464EC] border-b-2 border-[#2464EC]" : "text-gray-700 hover:text-blue-600"}`}
                    onClick={() => setActiveLink("membership")}
                >
                    Membership plans
                </NavLink>
                <NavLink
                    to="/pricing"
                    className={`text-base text-[20px] font-medium ${activeLink === "agencies" ? "text-[#2464EC] border-b-2 border-[#2464EC]" : "text-gray-700 hover:text-blue-600"}`}
                    onClick={() => setActiveLink("agencies")}
                >
                    Agencies
                </NavLink>
                <NavLink
                    to="/tourPlan"
                    className={`text-base text-[20px] font-medium ${activeLink === "tours" ? "text-[#2464EC] border-b-2 border-[#2464EC]" : "text-gray-700 hover:text-blue-600"}`}
                    onClick={() => setActiveLink("tours")}
                >
                    Tour Plans
                </NavLink>
                <NavLink
                    to="/contact"
                    className={`text-base text-[20px] font-medium ${activeLink === "contact" ? "text-[#2464EC] border-b-2 border-[#2464EC]" : "text-gray-700 hover:text-blue-600"}`}
                    onClick={() => setActiveLink("contact")}
                >
                    Contact
                </NavLink>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
                <button className="px-6 py-2 text-[20px] bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                    Login
                </button>
                <button className="px-6 py-2 text-[20px] bg-[#3776E2] text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
                    Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar
