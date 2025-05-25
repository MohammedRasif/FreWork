import { Search, Star, MessageCircle } from "lucide-react"
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
            about:
                "Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America.",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/landscapes/girl-urban-view.jpg",
            verified: true,
            agency: "The Trendy Design",
            rating: 4.7,
            reviews: 1203,
            about:
                "Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America.",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/jazz.jpg",
            verified: true,
            agency: "The Trendy Design",
            rating: 4.7,
            reviews: 1203,
            about:
                "Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America. Aspen is as close as one can get to a storybook alpine town in America. The Glenwood adventure capabilities—skiing, hiking, shopping and... Aspen is as close as one can get to a storybook alpine town in America.",
        },
    ]

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
    ]

    return (
        <div className="flex bg-gray-50 items-center px-10 pb-16 roboto ">
            {/* Main Content - Left Side */}
            <div className="w-4/5 p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="  text-3xl sm:text-4xl font-medium text-gray-600 mb-3 sm:mb-5 ">Search for Tour planer (Agencies)</h1>
                    <p className="text-gray-500 text-md font-medium">All posted tour plans are here</p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8 w-96">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="px-5 py-3 bg-[#3776E2] text-white rounded-r-lg transition-colors">
                            <Search className="" size={24} />
                        </button>
                    </div>
                </div>

                {/* Tour Plans */}
                <div className="space-y-6">
                    {tourPlans.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="flex">
                                {/* Image */}
                                <div className="w-72 h-56 relative">
                                    <img
                                        src={plan.image || "/placeholder.svg"}
                                        alt="Tour destination"
                                        className="w-full h-full object-cover"
                                    />
                                    {plan.verified && (
                                        <div>
                                            <div className="absolute top-3 right-2 backdrop-brightness-75 text-white px-2 py-1  text-md font-medium flex items-center space-x-2 rounded-full">
                                           <h1> Verified</h1>
                                            <VscVerifiedFilled  size={24} className="text-green-500 " />

                                        </div>
                                        <div className="bg-gray-300 rounded-full absolute bottom-3 right-2 p-1">
                                            <FaHeart className="text-gray-600 pt-[1px]" size={22} />

                                        </div>
                                        </div>

                                        
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-4">
                                    {/* Agency Header */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">TD</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800 text-xl">{plan.agency}</h3>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm text-gray-600">{plan.rating}</span>
                                                    <span className="text-sm text-gray-500">({plan.reviews} Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="flex items-center space-x-2 bg-[#3776E2] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                                            <MessageCircle className="w-5 h-5" />
                                            <span className="text-md font-medium">Message</span>
                                        </button>
                                    </div>

                                    {/* About Section */}
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{plan.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Agencies - Right Side */}
            <div className="w-1/5 bg-white border border-gray-200 p-6 mr-5 mt-20 rounded-xl">
                <h2 className="font-semibold text-gray-800 mb-6 text-center">TOP AGENCIES</h2>

                <div className="space-y-5">
                    {topAgencies.map((agency, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${agency.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <span className="text-white font-bold text-sm">{agency.name.charAt(0)}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-800 text-md truncate">{agency.name}</h4>
                                <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs text-gray-600">{agency.rating}</span>
                                    <span className="text-xs text-blue-500 underline">({agency.reviews} Reviews)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Membership
