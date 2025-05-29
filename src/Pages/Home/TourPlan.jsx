"use client"

import { useEffect, useRef, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"
import { ThumbsUp, Heart, MessageCircle, Share2, Menu } from "lucide-react"
import { GoArrowLeft } from "react-icons/go"
import { IoIosSend } from "react-icons/io"
import { MdVerified } from "react-icons/md"

const TourPlan = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [offerBudget, setOfferBudget] = useState("")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Consolidated data object
  const [travelData, setTravelData] = useState({
    tour: {
      title: "Tour From Dhaka To Bangkok",
      destination: "Tour From Dhaka to Bangkok",
      budget: "200USD",
      date: "12th July, 2025",
      duration: "10 Days",
      category: "Adventure",
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and type setting industry.",
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
    },
    offers: [
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
    ],
  })

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

  // Functions to manage tour data
  const updateTour = (updatedTour) => {
    setTravelData((prev) => ({
      ...prev,
      tour: { ...prev.tour, ...updatedTour },
    }))
  }

  const deleteTour = () => {
    setTravelData((prev) => ({
      ...prev,
      tour: null,
    }))
  }

  // Functions to manage offers
  const addOffer = (newOffer) => {
    setTravelData((prev) => ({
      ...prev,
      offers: [...prev.offers, { id: prev.offers.length + 1, ...newOffer }],
    }))
  }

  const updateOffer = (id, updatedOffer) => {
    setTravelData((prev) => ({
      ...prev,
      offers: prev.offers.map((offer) => (offer.id === id ? { ...offer, ...updatedOffer } : offer)),
    }))
  }

  const deleteOffer = (id) => {
    setTravelData((prev) => ({
      ...prev,
      offers: prev.offers.filter((offer) => offer.id !== id),
    }))
  }

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 pb-20 roboto">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Mobile Filter Toggle Button */}
        <button
          className="md:hidden flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200"
          onClick={toggleMobileFilter}
        >
          <Menu size={18} />
          <span>Filters</span>
        </button>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Main Content - Left Side */}
          <div className="w-full md:w-3/4 lg:w-4/5 order-2 md:order-1">
            {/* Header */}
            <div className="mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 mb-2 sm:mb-0">
                  Published Tour Plans
                </h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="w-full sm:w-auto">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-colors">
                      <option value="" disabled selected>
                        Select a category
                      </option>
                      <option value="adventure">Adventure</option>
                      <option value="cultural">Cultural</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="historical">Historical</option>
                      <option value="beach">Beach</option>
                      <option value="wildlife">Wildlife</option>
                    </select>
                  </div>
                  <div className="relative w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-64"
                    />
                    <svg
                      className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-md font-medium">All posted tour plans are here</p>
            </div>

            {/* Tour Card */}
            {travelData.tour && (
              <div className="bg-white rounded-t-lg border-x border-t border-gray-200">
                {/* Card Header */}
                <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                        {travelData.tour.destination}
                      </h2>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>
                          Willing to go on <span className="font-medium">{travelData.tour.date}</span>
                        </p>
                        <p>
                          Include: <span className="font-medium">{travelData.tour.duration}</span>
                        </p>
                        <p>
                          Category: <span className="font-medium">{travelData.tour.category}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between sm:text-right sm:flex-col items-center sm:items-end space-x-2 relative">
                     <div className="flex items-center justify-between lg:space-x-3 space-x-40">
                         <div>
                        <p className="text-lg font-bold text-gray-700">Budget {travelData.tour.budget}</p>
                        <p className="text-md text-gray-800">Total 5 person</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          setIsDropdownOpen(!isDropdownOpen)
                        }}
                        className="sm:-mt-3"
                      >
                        <HiDotsVertical
                          size={22}
                          className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                        />
                      </button>
                     </div>
                      {isDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 top-8 bg-white shadow-lg rounded-md py-2 w-40 z-10"
                        >
                          <button
                            onClick={() =>
                              updateTour({
                                description: "Updated description for the tour plan.",
                              })
                            }
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit Plan
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Share Plan
                          </button>
                          <button
                            onClick={deleteTour}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Delete Plan
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{travelData.tour.description}</p>
                  </div>

                  {/* Interested Travel Points */}
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <p className="text-sm font-medium text-gray-700">Interested Travel Points:</p>
                    <div className="flex flex-wrap gap-1">
                      {travelData.tour.interestedLocations.map((location, index) => (
                        <span key={index} className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                          {location}
                          {index < travelData.tour.interestedLocations.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tour Image */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={travelData.tour.image || "/placeholder.svg?height=256&width=512" || "/placeholder.svg"}
                      alt="Tour destination"
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                    />
                  </div>
                  {/* Social Stats */}
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                          <ThumbsUp className="w-3 h-3 text-white fill-current" />
                        </div>
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center -ml-2">
                          <Heart className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{travelData.tour.likes} Likes</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 text-sm text-gray-600">
                      <span>{travelData.tour.comments} Comments</span>
                      <span>{travelData.tour.shares} Share</span>
                    </div>
                  </div>

                  {/* Social Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 sm:gap-6">
                      <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm cursor-pointer ${
                          isLiked ? "text-blue-600" : "text-gray-600"
                        } hover:text-blue-600 transition-colors`}
                      >
                        <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? "fill-current" : ""}`} />
                        <span>Likes</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Comments</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Agency Listings */}
            <div className="bg-white rounded-b-lg border-x border-b border-gray-200">
              {/* Header */}
              <div className="px-4 sm:px-6 pb-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 pt-3 flex items-center space-x-2">
                      <GoArrowLeft />
                      <p>All Offers</p>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between sm:space-x-16 pt-2">
                    <div className="text-sm text-gray-600">Offered Budget</div>
                    <div className="text-sm text-gray-600">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-600 flex items-center space-x-2">
                        <GoArrowLeft />
                        <p>Back</p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 py-4 sm:py-6">
                {/* Existing Offers */}
                {travelData.offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-4 py-3 rounded-lg border border-transparent hover:border-gray-100 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                      {/* Avatar */}
                      <img
                        src={offer.image || "/placeholder.svg"}
                        alt={`${offer.company} avatar`}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{offer.company}</span>
                          {offer.verified && (
                            <div className="flex space-x-1">
                              <div className="rounded-full flex items-center justify-center">
                                <span className="text-blue-500">
                                  <MdVerified size={20} className="sm:w-6 sm:h-6" />
                                </span>
                              </div>
                              <div className="rounded-full flex items-center justify-center">
                                <span className="text-green-500">
                                  <MdVerified size={20} className="sm:w-6 sm:h-6" />
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg sm:text-xl">💰 {offer.budget}</span>
                      </div>
                      <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#3776E2] text-white text-sm sm:text-md rounded-md hover:bg-blue-700 transition-colors">
                        Response
                      </button>
                    </div>
                  </div>
                ))}

                {/* Separator */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Place Your Offer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-2 sm:p-4 rounded-lg">
                  <div className="text-gray-600 flex items-center justify-center sm:mt-0">
                    <img
                      src="https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg"
                      alt="User avatar"
                      className="rounded-full w-10 h-10 sm:w-11 sm:h-11"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">Place your offer Budget here</p>
                    <div className="flex w-full gap-2">
                      <input
                        type="text"
                        placeholder="Enter here"
                        value={offerBudget}
                        onChange={(e) => setOfferBudget(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      />
                      <button
                        className={`px-3 py-2 font-medium rounded-md transition-colors ${
                          offerBudget.trim()
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!offerBudget.trim()}
                      >
                        <IoIosSend size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div
            className={`w-full md:w-1/4 lg:w-1/5 order-1 md:order-2 ${isMobileFilterOpen ? "block" : "hidden md:block"}`}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button className="md:hidden text-gray-500" onClick={toggleMobileFilter}>
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="search to available plan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price range (USD)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Min"
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Max"
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Country</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-colors">
                    <option value="" disabled selected>
                      Select a country
                    </option>
                    <option value="thailand">Thailand</option>
                    <option value="india">India</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="singapore">Singapore</option>
                    <option value="japan">Japan</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="sri_lanka">Sri Lanka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tour Destination</label>
                  <input
                    type="text"
                    placeholder="search destination"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourPlan
