"use client"

import { useState, useEffect } from "react"
import { IoMdSearch } from "react-icons/io"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

export default function ChatInterface() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedAgencyId, setSelectedAgencyId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const agencies = [
    {
      id: "A001",
      name: "WebWaves",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/cld-sample.jpg",
      active: true,
    },
    {
      id: "A002",
      name: "WebVision",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529178/samples/man-portrait.jpg",
      active: false,

    },
    {
      id: "A003",
      name: "CodeCrafters",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529177/samples/smile.jpg",
      active: false,
    },
    {
      id: "A004",
      name: "username1335",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529173/samples/two-ladies.jpg",
      active: false,
    },
    {
      id: "A005",
      name: "QuantumWeb",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/boy-snow-hoodie.jpg",
      active: false,
    },
    {
      id: "A006",
      name: "WebGenius",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/smiling-man.jpg",
      active: false,

    },
    {
      id: "A007",
      name: "PixelPioneers",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/people/kitchen-bar.jpg",
      active: true,

    },
    {
      id: "A008",
      name: "StudioStream",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/cld-sample.jpg",
      active: true,
    },
    {
      id: "A009",
      name: "CreativeCloud",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529178/samples/man-portrait.jpg",
      active: false,
      
    },
    {
      id: "A010",
      name: "WebWorks",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529177/samples/smile.jpg",
      active: false,
      
    },
    {
      id: "A011",
      name: "BrightBridge",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529173/samples/two-ladies.jpg",
      active: false,
      
    },
    {
      id: "A012",
      name: "WebSavvy",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/boy-snow-hoodie.jpg",
      
    },
  ]

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Update selectedAgencyId based on the current route
  useEffect(() => {
    const pathParts = location.pathname.split("/")
    const agencyIdFromPath = pathParts[pathParts.length - 1]
    if (pathParts.includes("chat") && agencies.some((agency) => agency.id === agencyIdFromPath)) {
      setSelectedAgencyId(agencyIdFromPath)
    } else {
      setSelectedAgencyId(null)
    }
  }, [location.pathname])

  const handleAgencyClick = (agency) => {
    setSelectedAgencyId(agency.id)
    const basePath = location.pathname.includes("/admin/") ? "/admin/chat" : "/user/chat"
    navigate(`${basePath}/${agency.id}`, { state: { agency } })
  }

  const isBaseRoute = location.pathname === "/user/chat" || location.pathname === "/admin/chat"

  // Filter agencies based on search term
  const filteredAgencies = agencies.filter((agency) => agency.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="h-screen   flex flex-col">
        {/* Mobile Header */}
        <div className=" p-4 border-b border-gray-300">
          <h1 className="text-xl font-semibold mb-3">Messages</h1>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-200  rounded-lg pl-10 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Mobile Stories/Agencies Row */}
        

        {/* Mobile Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredAgencies.map((agency) => (
            <div
              key={agency.id}
              onClick={() => handleAgencyClick(agency)}
              className={`flex items-center px-4 py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 ${
                selectedAgencyId === agency.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="relative mr-3">
                <img
                  src={agency.image || "/placeholder.svg"}
                  alt={agency.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {agency.active && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold  truncate">{agency.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Chat Content */}
        {!isBaseRoute && (
          <div className="fixed inset-0 bg-gray-900 z-50">
            <Outlet />
          </div>
        )}
      </div>
    )
  }

  // Desktop Layout (Original)
  return (
    <div className="roboto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Messages</h1>
      <div className="flex" style={{ height: "80vh" }}>
        {/* Sidebar */}
        <div className="w-1/4 rounded-l-lg bg-gray-50 dark:bg-[#1E232E] border-r border-gray-200 dark:border-gray-300 flex flex-col">
          <div className="m-3 relative">
            <input
              type="text"
              placeholder="Search chats"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md w-full pl-10 py-[10px] dark:bg-gray-700 dark:border-gray-600 dark:"
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Agency List */}
          <div className="overflow-y-auto flex-1">
            {filteredAgencies.map((agency) => (
              <div
                key={agency.id}
                onClick={() => handleAgencyClick(agency)}
                className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#252c3b] text-gray-700 dark:text-gray-200 transition-colors border-b border-gray-200 dark:border-gray-300 ${
                  selectedAgencyId === agency.id ? "bg-blue-100 dark:bg-[#2F80A9]" : ""
                }`}
              >
                <div className="relative mr-3">
                  <img
                    src={agency.image || "/placeholder.svg"}
                    alt={agency.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {agency.active && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-[15px] truncate">{agency.name}</span>
                    {agency.unreadCount > 0 && (
                      <span className="text-[12px] bg-blue-500  px-2 py-1 rounded-full ml-2">
                        {agency.unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{agency.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="w-3/4 bg-white dark:bg-[#252c3b] rounded-r-lg">
          {isBaseRoute ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Select a Chat to Start Messaging
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Choose an agency to begin your conversation.</p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  )
}
