"use client"

import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { FiSearch, FiStar, FiMapPin, FiUsers } from "react-icons/fi"

const UserAccepte = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(0)

  // Sample data for tours
  const upcomingTours = [
    {
      id: 1,
      title: "Tour to Bangkok",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1729186145/samples/landscapes/beach-boat.jpg",
      price: 1000.0,
      totalPersons: 5,
      category: "Adventure",
      location: "Teknaf, Banglabari, Uzbekistan",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      startDate: "28 July, 2025",
      endDate: "28 July, 2025",
      offerAccepted: true,
      agencyName: "Bestagencyservice",
      rating: 4.3,
      reviews: 355,
    },
  ]

  const completedTours = [
    {
      id: 1,
      title: "Tour to Bangkok",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/food/pot-mussels.jpg",
      dateRange: "12 July, 2025 - 12 July, 2025",
      description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
    },
    {
      id: 2,
      title: "Tour to Bangkok",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529173/samples/two-ladies.jpg",
      dateRange: "12 July, 2025 - 12 July, 2025",
      description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
    },
    {
      id: 3,
      title: "Tour to Bangkok",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529176/samples/balloons.jpg",
      dateRange: "12 July, 2025 - 12 July, 2025",
      description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
    },
    {
      id: 4,
      title: "Tour to Bangkok",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/samples/coffee.jpg",
      dateRange: "12 July, 2025 - 12 July, 2025",
      description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
    },
  ]

  const ratingLabels = ["Not good enough", "Average", "Good", "Liked it", "Excellent"]

  const handleStarHover = (index) => {
    setHoveredStar(index + 1)
  }

  const handleStarLeave = () => {
    setHoveredStar(0)
  }

  const handleStarClick = (index) => {
    setSelectedStar(index + 1)
  }

  return (
    <div className="p-3 sm:p-4 lg:p-4">
      {/* Header with tabs and search */}
      <div className="flex flex-col sm:flex-row sm:justify-between mt-3 sm:mt-4 lg:mt-6 mb-4 sm:mb-5 lg:mb-6 border-b border-gray-300 pb-2">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mb-4 sm:mb-0">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`text-base sm:text-lg font-medium pb-2 transition-colors cursor-pointer ${
              activeTab === "upcoming"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`text-base sm:text-lg font-medium pb-2 transition-colors cursor-pointer ${
              activeTab === "completed"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Completed
          </button>
        </div>

        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by tour title"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 text-sm text-gray-700 bg-white"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "upcoming" && (
        <div>
          {upcomingTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Tour Image */}
                <div className="w-full lg:w-1/3">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=Tour+Image"
                    }}
                  />
                </div>

                {/* Tour Details */}
                <div className="w-full lg:w-3/5 p-3 sm:p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{tour.title}</h2>
                        {tour.offerAccepted && (
                          <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 w-fit">
                            <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" />
                            Offer accepted
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <FiUsers className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base lg:text-lg font-semibold">
                          ${tour.price.toFixed(2)} / total {tour.totalPersons} Person
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        Category: <span className="font-medium">{tour.category}</span>
                      </p>

                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <FiMapPin className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">Tour location: {tour.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        {tour.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-4">
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded-full flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium">Starting Date:</span>
                          <span className="text-xs sm:text-sm">{tour.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded-full flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium">Ending Date:</span>
                          <span className="text-xs sm:text-sm">{tour.endDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Agency Info and Logo */}
                    <div className="flex items-center justify-between lg:justify-end lg:flex-col lg:items-end gap-3 sm:gap-4 border-t pt-3 lg:border-t-0 lg:pt-0">
                      <div className="text-left lg:text-right">
                        <div className="text-sm sm:text-base font-medium">{tour.agencyName}</div>
                        <div className="flex items-center gap-1 lg:justify-end">
                          <FiStar className="text-yellow-400 fill-current w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">
                            {tour.rating} ({tour.reviews} Reviews)
                          </span>
                        </div>
                        <button className="text-blue-600 text-xs sm:text-sm hover:underline cursor-pointer mt-1">
                          See more
                        </button>
                      </div>
                      <img
                        src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1729186145/samples/landscapes/beach-boat.jpg"
                        className="rounded-full w-12 h-12 sm:w-16 sm:h-16 object-cover"
                        alt="Agency logo"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/64?text=Agency+Logo"
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center sm:justify-end">
                    <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "completed" && (
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Previous Tour Plans</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {completedTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-40 sm:h-48 p-2 rounded-md object-cover"
                />
                <div className="p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{tour.dateRange}</div>
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">{tour.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">{tour.description}</p>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="w-full px-3 sm:px-4 border border-blue-600 text-blue-600 py-1.5 sm:py-2 rounded-md font-medium hover:bg-blue-50 transition-colors text-xs sm:text-sm"
                  >
                    Give a review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-[450px]">
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between py-2 sm:py-5">
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="flex items-center gap-2 cursor-pointer rounded-sm px-2 py-1 text-sm sm:text-base"
              >
                <span>&larr;</span> Back
              </button>
              <h2 className="text-xl sm:text-2xl font-semibold py-1">Give a review</h2>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How Was Your Experience With This Organization?
              </label>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, index) => (
                  <FiStar
                    key={index}
                    className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer ${
                      index < (hoveredStar || selectedStar) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                    onMouseEnter={() => handleStarHover(index)}
                    onMouseLeave={handleStarLeave}
                    onClick={() => handleStarClick(index)}
                  />
                ))}
                <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium">
                  {(hoveredStar || selectedStar) > 0 ? ratingLabels[(hoveredStar || selectedStar) - 1] : ""}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your experience <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                placeholder="Enter here"
                className="w-full h-20 sm:h-24 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Recommend</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="recommend" className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="recommend" className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">No</span>
                </label>
              </div>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="w-full bg-[#3776E2] text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAccepte
