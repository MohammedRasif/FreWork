"use client"

import { GoArrowLeft } from "react-icons/go"
import { MdVerified } from "react-icons/md"
import { IoIosSend } from "react-icons/io"
import { HiDotsVertical } from "react-icons/hi"
import { useState, useEffect, useRef } from "react"
import { Heart, MessageCircle, Share2, ThumbsUp } from "lucide-react"

// Mock data for the sidebar
const sidebarData = {
  myBoard: {
    title: "My Board",
    allPlans: "All Plans",
    offeredPlans: "Offered Plans",
    acceptedPlans: "Accepted Plans",
  },
}

// Mock tour data
const tourData = {
  title: "Tour From Dhaka To Bangkok",
  destination: "Tour From Dhaka to Bankok",
  budget: "200USD",
  date: "12th July, 2025",
  duration: "10 Days",
  category: "Adventure",
  description:
    "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dum my text of the printing and type setting industry. ",
  locations: ["Location", "Location", "Location", "Location", "Location", "Location"],
  interestedLocations: [
    "Grand Palace",
    "Wat Arun",
    "Chatuchak Market",
    "Floating Market",
    "Jim Thompson House",
    "Lumpini Park",
  ],
  image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
  likes: 520,
  comments: 60,
  shares: 1,
}

// Mock offers data
const offersData = [
  {
    id: 1,
    company: "Letstour pvt ltd",
    budget: "200USD",
    verified: true,
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/man-portrait.jpg",
    likes: 520,
  },
  {
    id: 2,
    company: "Tour spotter agency",
    budget: "200USD",
    verified: true,
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
    likes: 520,
  },
]

function AdminOfferPlan() {
  const [activeTab, setActiveTab] = useState("Offered Plans")
  const [offerBudget, setOfferBudget] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          <div>
            {/* Tour Card */}
            <div className="bg-white rounded-t-lg border-x border-t border-gray-200">
              {/* Card Header */}
              <div className="p-3 sm:p-4 lg:p-6 pb-2 sm:pb-3 lg:pb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-3 lg:space-y-0">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      {tourData.destination}
                    </h2>
                    <div className="space-y-1 text-xs sm:text-sm lg:text-sm text-gray-600">
                      <p>
                        Willing to go on <span className="font-medium">{tourData.date}</span>
                      </p>
                      <p>
                        Include: <span className="font-medium">{tourData.duration}</span>
                      </p>
                      <p>
                        Category: <span className="font-medium">{tourData.category}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between lg:justify-end lg:text-right lg:flex-col lg:items-end space-x-2 lg:space-x-0 relative">
                    <div>
                      <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-700">
                        Budget {tourData.budget}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-md text-gray-800">Total 5 person</p>
                    </div>
                    {/* 3dot Dropdown */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsDropdownOpen(!isDropdownOpen)
                      }}
                      className="lg:-mt-3"
                    >
                      <HiDotsVertical
                        size={18}
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                      />
                    </button>
                    {isDropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 top-8 bg-white shadow-lg rounded-md py-2 w-32 sm:w-36 lg:w-40 z-10"
                      >
                        <button className="block w-full text-left px-3 lg:px-4 py-2 text-xs sm:text-sm lg:text-sm text-gray-700 hover:bg-gray-100">
                          Edit Plan
                        </button>
                        <button className="block w-full text-left px-3 lg:px-4 py-2 text-xs sm:text-sm lg:text-sm text-gray-700 hover:bg-gray-100">
                          Share Plan
                        </button>
                        <button className="block w-full text-left px-3 lg:px-4 py-2 text-xs sm:text-sm lg:text-sm text-red-600 hover:bg-gray-100">
                          Delete Plan
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-xs sm:text-sm lg:text-sm text-gray-600 leading-relaxed">{tourData.description}</p>
                </div>

                {/* Interested Travel Points */}
                <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <p className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700">Interested Travel Points:</p>
                  <div className="flex flex-wrap gap-1">
                    {tourData.interestedLocations.map((location, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm lg:text-sm font-medium text-blue-600 hover:underline cursor-pointer"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tour Image */}
              <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={tourData.image || "/placeholder.svg?height=256&width=512"}
                    alt="Tour destination"
                    className="w-full h-48 sm:h-64 lg:h-96 object-cover"
                  />
                </div>
                {/* Social Stats */}
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                        <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                      </div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center -ml-2">
                        <Heart className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm lg:text-sm text-gray-600 ml-2">{tourData.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-4 text-xs sm:text-sm lg:text-sm text-gray-600">
                    <span>{tourData.comments} Comments</span>
                    <span>{tourData.shares} Share</span>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-6">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm cursor-pointer ${
                        isLiked ? "text-blue-600" : "text-gray-600"
                      } hover:text-blue-600 transition-colors`}
                    >
                      <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 ${isLiked ? "fill-current" : ""}`} />
                      <span>Likes</span>
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                      <span>Comments</span>
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Offers Section */}
            <div className="bg-white rounded-b-lg border-x border-b border-gray-200">
              {/* Header */}
              <div className="px-3 sm:px-4 lg:px-6 pb-3 lg:pb-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 pt-3 flex items-center space-x-2">
                      <GoArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      <p>All Offers</p>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-8 sm:space-x-16 lg:space-x-16 pt-2">
                    <div className="text-xs sm:text-sm lg:text-sm text-gray-600">Offered Budget</div>
                    <div className="text-xs sm:text-sm lg:text-sm text-gray-600">
                      <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-600 flex items-center space-x-2">
                        <GoArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        <p>Back</p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 space-y-4 py-3 sm:py-4 lg:py-6">
                {/* Existing Offers */}
                {offersData.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-4 lg:px-4 rounded-lg space-y-3 sm:space-y-0"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-4">
                      {/* Avatar */}
                      <img
                        src={offer.image || "/placeholder.svg"}
                        alt={`${offer.company} avatar`}
                        className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base lg:text-base font-medium text-gray-900">
                            {offer.company}
                          </span>
                          {offer.verified && (
                            <div className="flex space-x-1">
                              <div className="rounded-full flex items-center justify-center">
                                <span className="text-blue-500">
                                  <MdVerified size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                </span>
                              </div>
                              <div className="rounded-full flex items-center justify-center">
                                <span className="text-green-500">
                                  <MdVerified size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-3 lg:gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg lg:text-xl font-semibold">💰 {offer.budget}</span>
                      </div>
                      <button className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2 bg-[#3776E2] text-white text-xs sm:text-sm lg:text-md rounded-md hover:bg-blue-700 transition-colors">
                        Response
                      </button>
                    </div>
                  </div>
                ))}

                {/* Separator */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Place Your Offer */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 p-2 sm:p-4 lg:p-4 rounded-lg space-y-3 sm:space-y-0">
                  <div className="text-gray-600 flex items-center justify-center sm:mt-8 lg:mt-8">
                    <img
                      src="https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg"
                      alt="User avatar"
                      className="rounded-full w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex-shrink-0"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-lg lg:text-xl font-medium text-gray-700 mb-2">
                      Place your offer Budget here
                    </p>
                    <input
                      type="text"
                      placeholder="Enter here"
                      value={offerBudget}
                      onChange={(e) => setOfferBudget(e.target.value)}
                      className="w-full px-2 sm:px-3 lg:px-3 py-1.5 sm:py-2 lg:py-2 text-sm sm:text-base lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <button
                    className={`px-2 sm:px-3 lg:px-3 py-1.5 sm:py-2 lg:py-2 font-medium rounded-md transition-colors ${
                      offerBudget.trim()
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!offerBudget.trim()}
                  >
                    <IoIosSend size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOfferPlan
