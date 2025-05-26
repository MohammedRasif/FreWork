import { useState, useEffect, useRef } from "react";
import { Heart, Share2, ThumbsUp, MessageCircle } from "lucide-react";
import { FaCommentDots } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import AdminOfferPlan from "./AdminOfferPlan";
import AdminAcceptPlan from "./AdminAcceptPlan";
import UserAccepte from "../User/UserAccepte";
import Favorite from "../User/Favorite";

const AdminHome = () => {
  // State for active tab, dropdown, social counts, and like toggle
  const [activeTab, setActiveTab] = useState("All Plans");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [socialCounts, setSocialCounts] = useState({
    likes: 520,
    offers: 66,
    shares: 1,
  });
  const dropdownRef = useRef(null);

  // Data objects for mapping
  const travelData = {
    destination: "Your From Dhaka To Bangkok",
    date: "12th July, 2025",
    duration: "10 Days",
    category: "Adventure",
    budget: "200USD",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
  };

  const interestedLocations = [
    "Cox's Bazar",
    "Sundarbans",
    "Phuket",
    "Chiang Mai",
    "Krabi",
    "Pattaya",
  ];

  const sidebarData = {
    myBoard: {
      title: "My Board",
      allPlans: "All Plans",
      offeredPlans: "Offered Plans",
      acceptedPlans: "Accepted Plans",
      description: "Best to explore new fun and beautiful Tours",
    },
  };

  const socialStats = {
    likes: "Like",
    follows: "Offers",
    shares: "Share",
  };

  // Content for different tabs
  const renderContent = () => {
    switch (activeTab) {
      case "All Plans":
        return (
          <div className="rounded-lg bg-white shadow-sm border border-gray-200 mb-6">
            <div className="p-6">
              {/* Travel Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {travelData.destination}
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      Willing to go on{" "}
                      <span className="font-medium">{travelData.date}</span>
                    </p>
                    <p>
                      Include:{" "}
                      <span className="font-medium">{travelData.duration}</span>
                    </p>
                    <p>
                      Category:{" "}
                      <span className="font-medium">{travelData.category}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right flex items-center space-x-2 relative">
                  <div>
                    <p className="text-lg font-bold text-gray-700">
                      Budget {travelData.budget}
                    </p>
                    <p className="text-md text-gray-800">Total 5 person</p>
                  </div>
                  {/* 3dot Dropdown */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  >
                    <HiDotsVertical
                      size={22}
                      className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors -mt-3"
                    />
                  </button>
                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 top-8 bg-white shadow-lg rounded-md py-2 w-40 z-10"
                    >
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit Plan
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Share Plan
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        Delete Plan
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {travelData.description}
                </p>
              </div>

              {/* Interested Travel Points */}
              <div className="mb-6 flex items-center space-x-3">
                <p className="text-sm font-medium text-gray-700">
                  Interested Travel Points:
                </p>
                <div className="flex flex-wrap gap-1">
                  {interestedLocations.map((location, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resort Image */}
              <div className="mb-4">
                <img
                  src={travelData.image || "/placeholder.svg"}
                  alt="Resort pool area with palm trees"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Social Stats */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                      <ThumbsUp className="w-3 h-3 text-white fill-current" />
                    </div>
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center -ml-2">
                      <Heart className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {socialCounts.likes} Likes
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{socialCounts.offers} Offers</span>
                  <span>{socialCounts.shares} Share</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 text-sm ${
                      isLiked ? "text-blue-600" : "text-gray-600"
                    } hover:text-blue-600 transition-colors`}
                  >
                    <ThumbsUp
                      className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                    />
                    {socialStats.likes}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    {socialStats.follows}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    {socialStats.shares}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Offered Plans":
        return (
          <div>
            <AdminOfferPlan />
          </div>
        );
      case "Accepted Plans":
        return (
          <div>
          <AdminAcceptPlan /> 
            
          </div>
        );
      default:
        return null;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Main Content - 4/5 width */}
      <div className="w-4/5 p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome,{" "}
            <span className="font-semibold">Choose perfect offer for you</span>
          </h1>
          {/* Search field */}
          <div className="relative w-full max-w-[30vh]">
            <input
              type="text"
              placeholder="Search by Tour Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 pr-10"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>

      {/* Sidebar - 1/5 width */}
      <div className="w-1/5 p-6 mt-[7.6vh] rounded-md ">
        <div className="space-y-6">
          {/* My Board Header */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              {sidebarData.myBoard.title}
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab("All Plans")}
              className={`w-full text-left px-4 py-3 font-semibold rounded-md transition-colors ${
                activeTab === "All Plans"
                  ? "bg-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sidebarData.myBoard.allPlans}
            </button>
            <button
              onClick={() => setActiveTab("Offered Plans")}
              className={`w-full text-left px-4 py-3 font-semibold rounded-md transition-colors ${
                activeTab === "Offered Plans"
                  ? "bg-white shadow-md "
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sidebarData.myBoard.offeredPlans}
            </button>
            <button
              onClick={() => setActiveTab("Accepted Plans")}
              className={`w-full text-left px-4 py-3 font-semibold rounded-md transition-colors ${
                activeTab === "Accepted Plans"
                  ? "bg-white shadow-md "
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sidebarData.myBoard.acceptedPlans}
            </button>
          </div>

          {/* Promotional Description */}
          <div className="pt-6">
            <p className="text-sm text-gray-900 font-semibold mb-2">
              Want to respond fast to get Torist for "Free"?
            </p>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
