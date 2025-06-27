"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { ThumbsUp, Heart, MessageCircle, Share2, Menu, X } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import {
  useFilterTourPlanPublicQuery,
  useGetTourPlanPublicQuery,
} from "@/redux/features/baseApi";
import { debounce } from "lodash";
import FullScreenInfinityLoader from "@/lib/Loading";

const TourPlanWithPopup = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Store tour ID for dropdown
  const [isLiked, setIsLiked] = useState({});
  const [offerBudget, setOfferBudget] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [expandedOffers, setExpandedOffers] = useState({}); // Track which tours have expanded offers
  const dropdownRef = useRef(null);
  const [filters, setFilters] = useState({
    search: "",
    min: "",
    max: "",
    country: "",
    category: "",
  });

  // RTK Queries
  const { data: tourPlanPublic, isLoading: isTourPlanPublicLoading } =
    useGetTourPlanPublicQuery();
  const {
    data: filteredTourPlan,
    isLoading: isFilteredLoading,
    refetch,
  } = useFilterTourPlanPublicQuery(filters, {
    skip:
      !filters.search &&
      !filters.min &&
      !filters.max &&
      !filters.country &&
      !filters.category,
  });

  // Debounced refetch with useCallback
  const debouncedRefetch = useCallback(
    debounce(() => {
      refetch();
    }, 500),
    [refetch]
  );

  // Trigger debounced refetch when filters change
  useEffect(() => {
    if (
      filters.search ||
      filters.min ||
      filters.max ||
      filters.country ||
      filters.category
    ) {
      debouncedRefetch();
    }
  }, [filters, debouncedRefetch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle filter changes (immediate state update)
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const openPopup = (tour) => {
    setSelectedTour(tour);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTour(null);
  };

  const toggleOffers = (tourId) => {
    setExpandedOffers((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };

  // Determine which data to display
  const displayTours =
    filters.search ||
    filters.min ||
    filters.max ||
    filters.country ||
    filters.category
      ? filteredTourPlan
      : tourPlanPublic;

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 pb-20 roboto">
      <div className="px-2 sm:px-4 lg:px-6">
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
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-colors"
                      value={filters.category}
                      onChange={(e) =>
                        handleFilterChange("category", e.target.value)
                      }
                    >
                      <option value="">Select a category</option>
                      <option value="adventure">Adventure</option>
                      <option value="cultural">Cultural</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="historical">Historical</option>
                      <option value="beach">Beach</option>
                      <option value="wildlife">Wildlife</option>
                      <option value="romantic">Romantic</option>
                    </select>
                  </div>
                  <div className="relative w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-64"
                      value={filters.search}
                      onChange={(e) =>
                        handleFilterChange("search", e.target.value)
                      }
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
              <p className="text-gray-500 text-md font-medium">
                All posted tour plans are here
              </p>
            </div>

            {/* Tour Cards */}
            <div className="space-y-6 mb-6">
              {isTourPlanPublicLoading || isFilteredLoading ? (
                <div>
                  <FullScreenInfinityLoader />
                </div>
              ) : displayTours && displayTours.length > 0 ? (
                displayTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="rounded-lg bg-white shadow-sm border border-gray-200"
                  >
                    <div className="p-3 sm:p-4 lg:p-6">
                      {/* Travel Header */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-3 lg:space-y-0">
                        <div className="flex-1">
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                            {tour.location_to}
                          </h2>
                          <div className="space-y-1 text-xs sm:text-sm lg:text-sm text-gray-600">
                            <p>
                              Willing to go on{" "}
                              <span className="font-medium">
                                {tour.start_date}
                              </span>
                            </p>
                            <p>
                              Include:{" "}
                              <span className="font-medium">
                                {tour.duration}
                              </span>
                            </p>
                            <p>
                              Category:{" "}
                              <span className="font-medium">
                                {tour.category}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start justify-between lg:justify-end lg:text-right lg:flex-col lg:items-end space-x-2 lg:space-x-0 relative">
                          <div>
                            <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-700">
                              Budget ${tour.budget}
                            </p>
                            <p className="text-xs sm:text-sm lg:text-md text-gray-800">
                              Total {tour.total_members} person
                            </p>
                          </div>
                          {/* 3dot Dropdown */}
                          {/* <button
                            onClick={(e) => {
                              e.preventDefault();
                              setIsDropdownOpen(
                                isDropdownOpen === tour.id ? null : tour.id
                              );
                            }}
                            className="lg:mt-5"
                          >
                            <HiDotsVertical
                              size={18}
                              className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                            />
                          </button>
                          {isDropdownOpen === tour.id && (
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
                          )} */}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p className="text-xs sm:text-sm lg:text-sm text-gray-600 leading-relaxed">
                          {tour.description}
                        </p>
                      </div>

                      {/* Interested Travel Points */}
                      <div className="mb-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <p className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700">
                          Interested Travel Points:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {tour.tourist_spots ? (
                            tour.tourist_spots
                              .split(",")
                              .map((location, index) => (
                                <span
                                  key={index}
                                  className="text-xs sm:text-sm lg:text-sm font-medium text-blue-600 hover:underline cursor-pointer"
                                >
                                  {location.trim()}
                                  {index <
                                    tour.tourist_spots.split(",").length - 1 &&
                                    ", "}
                                </span>
                              ))
                          ) : (
                            <span className="text-xs sm:text-sm lg:text-sm text-gray-600">
                              None
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Resort Image */}
                      <div className="mb-4">
                        <img
                          src={tour.spot_picture_url || "/placeholder.svg"}
                          alt="Tour destination"
                          className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg"
                        />
                      </div>

                      {/* Social Stats */}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                              <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                            </div>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center -ml-2">
                              <Heart className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                            </div>
                          </div>
                          <span className="text-xs sm:text-sm lg:text-sm text-gray-600 ml-2">
                            {tour.like_count} Likes
                          </span>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-4 text-xs sm:text-sm lg:text-sm text-gray-600">
                          <span>{tour.offer_count} Offers</span>
                          <span>{tour.share_count} Share</span>
                        </div>
                      </div>

                      {/* Social Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4 sm:gap-6 lg:gap-6">
                          <button
                            onClick={() =>
                              setIsLiked((prev) => ({
                                ...prev,
                                [tour.id]: !prev[tour.id],
                              }))
                            }
                            className={`flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm ${
                              isLiked[tour.id]
                                ? "text-blue-600"
                                : "text-gray-600"
                            } hover:text-blue-600 transition-colors hover:cursor-pointer`}
                          >
                            <ThumbsUp
                              className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 ${
                                isLiked[tour.id] ? "fill-current" : ""
                              }`}
                            />
                            <span>Likes</span>
                          </button>
                          <button
                            onClick={() => openPopup(tour)}
                            className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                            <span>Comments</span>
                          </button>
                          <button className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>

                      {/* Offers Section */}
                      <div className="mt-4 space-y-4">
                        {tour.offers
                          .slice(
                            0,
                            expandedOffers[tour.id] ? tour.offers.length : 3
                          )
                          .map((offer) => (
                            <div
                              key={offer.id}
                              className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-4 py-3 rounded-lg border border-transparent hover:border-gray-100 hover:bg-gray-50"
                            >
                              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                                <img
                                  src={
                                    offer.agency.logo_url || "/placeholder.svg"
                                  }
                                  alt={`${offer.agency.agency_name} avatar`}
                                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
                                />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900">
                                      {offer.agency.agency_name}
                                    </span>
                                    {offer.agency.is_verified && (
                                      <div className="flex space-x-1">
                                        <span className="text-blue-500">
                                          <MdVerified
                                            size={20}
                                            className="sm:w-6 sm:h-6"
                                          />
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <p className="text-xs sm:text-sm text-gray-600">
                                    {offer.message}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between sm:justify-end gap-3">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-lg sm:text-xl">
                                    💰 ${offer.offered_budget}
                                  </span>
                                </div>
                                <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#3776E2] text-white text-sm sm:text-md rounded-md hover:bg-blue-700 transition-colors">
                                  Response
                                </button>
                              </div>
                            </div>
                          ))}
                        {tour.offers.length > 3 && (
                          <button
                            onClick={() => toggleOffers(tour.id)}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {expandedOffers[tour.id] ? "Show Less" : "See More"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No tours found</div>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div
            className={`w-full md:w-1/4 lg:w-1/5 order-1 md:order-2 lg:mt-24 ${
              isMobileFilterOpen ? "block" : "hidden md:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 top-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  className="md:hidden text-gray-500"
                  onClick={toggleMobileFilter}
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="search to available plan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange("search", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price range (USD)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Min"
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={filters.min}
                      onChange={(e) =>
                        handleFilterChange("min", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Max"
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={filters.max}
                      onChange={(e) =>
                        handleFilterChange("max", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Country
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-colors"
                    value={filters.country}
                    onChange={(e) =>
                      handleFilterChange("country", e.target.value)
                    }
                  >
                    <option value="">Select a country</option>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tour Destination
                  </label>
                  <input
                    type="text"
                    placeholder="search destination"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange("search", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && selectedTour && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Popup Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Tour Details
              </h2>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Popup Content */}
            <div className="p-4">
              <div className="w-full">
                {/* Tour Card */}
                <div className="rounded-lg bg-white shadow-sm border border-gray-200">
                  <div className="p-3 sm:p-4 lg:p-6">
                    {/* Travel Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-3 lg:space-y-0">
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                          {selectedTour.location_to}
                        </h2>
                        <div className="space-y-1 text-xs sm:text-sm lg:text-sm text-gray-600">
                          <p>
                            Willing to go on{" "}
                            <span className="font-medium">
                              {selectedTour.start_date}
                            </span>
                          </p>
                          <p>
                            Include:{" "}
                            <span className="font-medium">
                              {selectedTour.duration}
                            </span>
                          </p>
                          <p>
                            Category:{" "}
                            <span className="font-medium">
                              {selectedTour.category}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between lg:justify-end lg:text-right lg:flex-col lg:items-end space-x-2 lg:space-x-0 relative">
                        <div>
                          <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-700">
                            Budget ${selectedTour.budget}
                          </p>
                          <p className="text-xs sm:text-sm lg:text-md text-gray-800">
                            Total {selectedTour.total_members} person
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-xs sm:text-sm lg:text-sm text-gray-600 leading-relaxed">
                        {selectedTour.description}
                      </p>
                    </div>

                    {/* Interested Travel Points */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <p className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700">
                        Interested Travel Points:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {selectedTour.tourist_spots ? (
                          selectedTour.tourist_spots
                            .split(",")
                            .map((location, index) => (
                              <span
                                key={index}
                                className="text-xs sm:text-sm lg:text-sm font-medium text-blue-600 hover:underline cursor-pointer"
                              >
                                {location.trim()}
                                {index <
                                  selectedTour.tourist_spots.split(",").length -
                                    1 && ", "}
                              </span>
                            ))
                        ) : (
                          <span className="text-xs sm:text-sm lg:text-sm text-gray-600">
                            None
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Resort Image */}
                    <div className="mb-4">
                      <img
                        src={
                          selectedTour.spot_picture_url || "/placeholder.svg"
                        }
                        alt="Tour destination"
                        className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg"
                      />
                    </div>

                    {/* Social Stats */}
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                            <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                          </div>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center -ml-2">
                            <Heart className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white fill-current" />
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-sm text-gray-600 ml-2">
                          {selectedTour.like_count} Likes
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-4 text-xs sm:text-sm lg:text-sm text-gray-600">
                        <span>{selectedTour.offer_count} Offers</span>
                        <span>{selectedTour.share_count} Share</span>
                      </div>
                    </div>

                    {/* Social Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 sm:gap-6 lg:gap-6">
                        <button
                          onClick={() =>
                            setIsLiked((prev) => ({
                              ...prev,
                              [selectedTour.id]: !prev[selectedTour.id],
                            }))
                          }
                          className={`flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm ${
                            isLiked[selectedTour.id]
                              ? "text-blue-600"
                              : "text-gray-600"
                          } hover:text-blue-600 transition-colors`}
                        >
                          <ThumbsUp
                            className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 ${
                              isLiked[selectedTour.id] ? "fill-current" : ""
                            }`}
                          />
                          <span>Likes</span>
                        </button>
                        <button className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                          <span>Comments</span>
                        </button>
                        <button className="flex items-center gap-1 sm:gap-2 lg:gap-2 text-xs sm:text-sm lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>

                    {/* Offers Section */}
                    <div className="mt-4 space-y-4">
                      {selectedTour.offers.map((offer) => (
                        <div
                          key={offer.id}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-4 py-3 rounded-lg border border-transparent hover:border-gray-100 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                            <img
                              src={offer.agency.logo_url || "/placeholder.svg"}
                              alt={`${offer.agency.agency_name} avatar`}
                              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900">
                                  {offer.agency.agency_name}
                                </span>
                                {offer.agency.is_verified && (
                                  <div className="flex space-x-1">
                                    <span className="text-blue-500">
                                      <MdVerified
                                        size={20}
                                        className="sm:w-6 sm:h-6"
                                      />
                                    </span>
                                  </div>
                                )}
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600">
                                {offer.message}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-lg sm:text-xl">
                                💰 ${offer.offered_budget}
                              </span>
                            </div>
                            <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#3776E2] text-white text-sm sm:text-md rounded-md hover:bg-blue-700 transition-colors">
                              Response
                            </button>
                          </div>
                        </div>
                      ))}
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
                          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
                            Place your offer Budget here
                          </p>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPlanWithPopup;
