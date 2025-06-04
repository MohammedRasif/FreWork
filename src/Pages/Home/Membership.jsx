import { Search, Star, MessageCircle } from "lucide-react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";

const Membership = () => {
  const tourPlans = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529167/samples/ecommerce/analog-classic.jpg",
      verified: true,
      agency: "The Trendy Design",
      rating: 4.7,
      reviews: 1203,
      location: "Museums",
      price: "$150/10 Person",
      about:
        "Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and...",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/landscapes/girl-urban-view.jpg",
      verified: true,
      agency: "The Trendy Design",
      rating: 4.7,
      reviews: 1203,
      location: "Beach Resort",
      price: "$200/8 Person",
      about:
        "Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and...",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/jazz.jpg",
      verified: true,
      agency: "The Trendy Design",
      rating: 4.7,
      reviews: 1203,
      location: "Mountain View",
      price: "$180/12 Person",
      about:
        "Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and...",
    },
  ];

  const topAgencies = [
    { name: "WebWorks WebWorks", rating: 4.5, reviews: 502, color: "bg-black" },
    { name: "InfinityInteractive", rating: 4.7, reviews: 1203, color: "bg-orange-500" },
    { name: "WebMastery WebWorks", rating: 4.5, reviews: 502, color: "bg-blue-500" },
    { name: "ByteBuilders", rating: 4.5, reviews: 502, color: "bg-green-500" },
    { name: "PixelPlaza PixelPlaza", rating: 4.5, reviews: 502, color: "bg-gray-600" },
    { name: "TechTrend TechTrend", rating: 4.5, reviews: 502, color: "bg-gray-400" },
    { name: "PixelPerfect", rating: 4.5, reviews: 502, color: "bg-pink-500" },
    { name: "QuantumWeb", rating: 4.5, reviews: 502, color: "bg-yellow-500" },
    { name: "CodeCanvas", rating: 4.5, reviews: 502, color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col sm:flex-row bg-gray-50 px-4 sm:px-10 pb-16 font-roboto">
      {/* Main Content - Tour Plans */}
      <div className="w-full sm:w-4/5 p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:font-medium text-gray-600 mb-3 sm:mb-5">
            Search for Tour Planner (Agencies)
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            All posted tour plans are here
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 sm:mb-8 w-full sm:w-96">
          <div className="flex">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              aria-label="Search tour plans"
            />
            <button
              className="px-4 sm:px-5 py-2 sm:py-3 bg-[#3776E2] text-white rounded-r-lg transition-colors hover:bg-blue-600"
              aria-label="Search"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Tour Plans */}
        <div className="space-y-6">
          {tourPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="w-full sm:w-72 h-48 sm:h-56 relative">
                <img
                  src={plan.image || "https://via.placeholder.com/300"}
                  alt={`${plan.location} tour`}
                  className="w-full h-full object-cover"
                />
                {plan.verified && (
                  <div>
                    <div className="absolute top-3 right-2 bg-black/50 text-white px-2 py-1 text-sm sm:text-base font-medium flex items-center space-x-2 rounded-full">
                      <span>Verified</span>
                      <VscVerifiedFilled size={20} className="text-green-500" />
                    </div>
                    <div className="bg-gray-300 rounded-full absolute bottom-3 right-2 p-1">
                      <FaHeart className="text-gray-600 pt-[1px]" size={18} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                {/* Agency Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">TD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                        {plan.agency}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 font-medium">
                          {plan.rating}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          ({plan.reviews} Reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="flex items-center space-x-2 bg-[#3776E2] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors w-full sm:w-auto"
                    aria-label={`Message ${plan.agency}`}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">Message</span>
                  </button>
                </div>

                {/* About Section */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-base">
                    About
                  </h4>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed line-clamp-3">
                    {plan.about}
                  </p>
                </div>

                {/* Location and Price */}
                <div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    Location: {plan.location}
                  </p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    Price: {plan.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Agencies */}
      <div className="w-full sm:w-1/5 bg-white border border-gray-200 p-4 sm:p-6 sm:ml-5 sm:mt-20 rounded-xl lg:mt-52">
        <h2 className="font-semibold text-gray-800 mb-6 text-center text-lg sm:text-xl">
          TOP AGENCIES
        </h2>
        <div className="space-y-5">
          {topAgencies.map((agency, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 ${agency.color} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white font-bold text-xs sm:text-sm">{agency.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                  {agency.name}
                </h4>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600 font-medium">
                    {agency.rating}
                  </span>
                  <span className="text-xs text-blue-500 underline font-medium">
                    ({agency.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;