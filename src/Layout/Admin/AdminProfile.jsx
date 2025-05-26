

import { useState } from "react"
import { FaStar, FaEdit, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaCheckCircle, FaChevronRight, FaArrowLeft, FaCalendarAlt } from "react-icons/fa"
import { IoMdSend } from "react-icons/io"
import { NavLink } from "react-router-dom"

const AdminProfile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  const data = {
    header: {
      title: "Travel Agency Ltd",
      rating: "4.5",
      reviews: "355 Reviews",
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-2.jpg",
      imageAlt: "Travel Agency Building",
    },
    about: {
      text: "Steve likes spending time with his friend and planning travel with them at least once every year. Steve always prepared the trip very well, from research the destination until the budget preparation. Steve likes spending time with his friend and planning travel with them at least once every year. Steve always prepared the trip very well, from research the destination until the budget preparation.",
    },
    contactInformation: [
      { icon: <FaPhone className="w-4 h-4 text-gray-500" />, text: "0123456789" },
      { icon: <FaEnvelope className="w-4 h-4 text-gray-500" />, text: "youremail@yahoo.com" },
      { icon: <FaGlobe className="w-4 h-4 text-gray-500" />, text: "www.yourweb.com" },
      { icon: <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-0.5" />, text: "Banasree, Dhaka, Bangladesh" },
    ],
    facilities: [
      { text: "Dinner" },
      { text: "Breakfast" },
      { text: "Lunch" },
      { text: "Snacks (3times/day)" },
      { text: "Local Guides and Language Support" },
      { text: "24/7 Support during tour" },
    ],
    serviceCategories: [
      { text: "Mountain" },
      { text: "Sea" },
      { text: "River" },
      { text: "Adventure" },
    ],
    aim: {
      text: "Our aim is to create memorable and hassle-free travel experiences by offering personalized, high-quality tour services that cater to the unique interests and needs of each traveler. We strive to promote cultural understanding, responsible tourism, and unforgettable journeys through expert planning, trusted partnerships, and a deep passion for exploration. Our aim is to create memorable and hassle-free travel experiences by offering personalized, high-quality tour services that cater to the unique interests and needs of each traveler. We strive to promote cultural understanding, responsible tourism, and unforgettable journeys through expert planning, trusted partnerships, and a deep passion for exploration.",
    },
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setFromDate("")
    setToDate("")
  }

  const handleReset = () => {
    setFromDate("")
    setToDate("")
  }

  return (
    <div className="p-6">
      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Back Button */}
            <button onClick={handleClosePopup} className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
              <FaArrowLeft className="w-5 h-5" />
            </button>
            {/* Reset Link */}
            <button onClick={handleReset} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-sm">
              Reset
            </button>
            {/* Popup Title */}
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">Set Your Unavailability</h2>
            {/* Date Inputs */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <label className="w-20 text-gray-700 font-medium">From</label>
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    min={new Date().toISOString().split("T")[0]} // Prevent past dates
                  />
                  <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="w-20 text-gray-700 font-medium">To</label>
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    min={fromDate || new Date().toISOString().split("T")[0]} // Prevent dates before From or today
                  />
                  <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
            {/* Confirm Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md">
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="pb-7">
        <h1 className="text-3xl text-black font-semibold text-center">Agency Profile</h1>
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-md text-[#5E6282] font-semibold text-center pl-32">Set your profile for best match with plans</h1>
          <button onClick={handleOpenPopup} className="flex items-center gap-1 mt-2 text-blue-500 underline cursor-pointer">
            <FaEdit className="w-5 h-5" />
            <span className="text-sm">Set Unavailability</span>
          </button>
        </div>
        <h1 className="text-md font-semibold text-gray-700 text-center">Invitation code: 101020</h1>
      </div>
      {/* Image and Travel */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-96 flex-shrink-0">
          <img
            src={data.header.image}
            alt={data.header.imageAlt}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 bg-white p-4 rounded-md h-72">
          <div className="flex items-start space-x-3 mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.header.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-[15px] font-medium text-gray-900 ml-1">{data.header.rating}</span>
                </div>
                <span className="text-[15px] text-blue-600">({data.header.reviews})</span>
              </div>
            </div>
            <NavLink to="/admin/editProfile" className="flex items-center gap-1 mt-2 cursor-pointer">
              <FaEdit className="w-5 h-5" />
              <span className="text-md">Edit</span>
            </NavLink >
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-700 text-[15px] leading-relaxed">{data.about.text}</p>
          </div>
        </div>
      </div>

      {/* Information Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Contact Information */}
        <div className="bg-white p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <div className="space-y-3">
            {data.contactInformation.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.icon}
                <span className="text-[15px] text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Facilities</h3>
          <div className="space-y-3">
            {data.facilities.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-[15px] text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="bg-white p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Service Categories</h3>
          <div className="space-y-3">
            {data.serviceCategories.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <IoMdSend className="w-5 h-5 text-blue-500" />
                <span className="text-[15px] text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Aim Section */}
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Aim</h3>
        <p className="text-gray-700 text-[15px] leading-relaxed">{data.aim.text}</p>
      </div>
    </div>
  )
}

export default AdminProfile
