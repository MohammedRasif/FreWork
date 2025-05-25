"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Calendar,
  Clock,
  Tag,
  ThumbsUp,
  MoreHorizontal,
} from "lucide-react";

// Mock data for the sidebar
const sidebarData = {
  myBoard: {
    title: "My Board",
    allPlans: "All Plans",
    offeredPlans: "Offered Plans",
    acceptedPlans: "Accepted Plans",
  },
};

// Mock tour data
const tourData = {
  title: "Tour From Dhaka To Bangkok",
  budget: "200USD",
  date: "12th July, 2025",
  duration: "10 Days",
  category: "Adventure",
  description:
    "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem standard dummy text ever since the Lorem Ipsum is simply dipsum has been the industry's standard dummy text ever since the...",
  locations: [
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
  ],
  image: "/images/tour-resort.png",
  likes: 520,
  comments: 60,
  shares: 1,
};

// Mock offers data
const offersData = [
  {
    id: 1,
    company: "Letstour pvt ltd",
    budget: "200USD",
    verified: true,
    avatar: "LP",
  },
  {
    id: 2,
    company: "Tour spotter agency",
    budget: "200USD",
    verified: true,
    avatar: "TS",
  },
];

function AdminOfferPlan() {
  const [activeTab, setActiveTab] = useState("Offered Plans");
  const [offerBudget, setOfferBudget] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 ">
          <div className="">
            {/* Tour Card */}
            <div className="mb-6 bg-white rounded-lg shadow-lg border border-gray-200">
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {tourData.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Willing to go on {tourData.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {tourData.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>Category: {tourData.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">
                      Budget {tourData.budget}
                    </div>
                    <div className="text-xs text-gray-500">Post a Review</div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-6 space-y-4">
                {/* Description */}
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tourData.description}
                    <button className="text-blue-600 hover:underline ml-1">
                      see more
                    </button>
                  </p>
                </div>

                {/* Interested Tourist Points */}
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Interested Tourist Points:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tourData.locations.map((location, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tour Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={
                      tourData.image || "/placeholder.svg?height=256&width=512"
                    }
                    alt="Tour destination"
                    className="w-full h-64 object-cover"
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
                    <span className="text-sm text-gray-600 ml-2">
                      {tourData.likes} Likes
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{tourData.comments} Comments</span>
                    <span>{tourData.shares} Share</span>
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
                      <span>{tourData.likes} Likes</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{tourData.comments} Comments</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>{tourData.shares} Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Offers Section */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ← All Offers
                  </h3>
                  <div className="text-sm text-gray-600">Offered Budget</div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 space-y-4">
                {/* Existing Offers */}
                {offersData.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 font-semibold rounded-full flex items-center justify-center">
                        {offer.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {offer.company}
                          </span>
                          {offer.verified && (
                            <div className="flex gap-1">
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 font-semibold">
                          💰 {offer.budget}
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                        Response
                      </button>
                    </div>
                  </div>
                ))}

                {/* Separator */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Place Your Offer */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Place your offer Budget here
                    </p>
                    <input
                      type="text"
                      placeholder="Enter here"
                      value={offerBudget}
                      onChange={(e) => setOfferBudget(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      offerBudget.trim()
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!offerBudget.trim()}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOfferPlan;
