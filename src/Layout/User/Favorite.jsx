import { FiSearch, FiClock } from "react-icons/fi"

const Favorite = () => {
    const favoriteToursData = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/landscapes/architecture-signs.jpg",
            dateRange: "12 July, 2025 - 12 July, 2025",
            companyName: "Company TechTrend",
            description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
            duration: 2,
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/animals/reindeer.jpg",
            dateRange: "12 July, 2025 - 12 July, 2025",
            companyName: "Company TechTrend",
            description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
            duration: 2,
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/people/kitchen-bar.jpg",
            dateRange: "12 July, 2025 - 12 July, 2025",
            companyName: "Company TechTrend",
            description: "Different people have different taste, and various types of music, Zimball Coastal Resort...",
            duration: 2,
        },
    ]

    return (
        <div className=" p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="lg:flex justify-between items-center mb-6">
                    <div>
                        <div className="text-sm text-gray-500 mb-1">12 July, 2025</div>
                        <h1 className="text-2xl font-semibold text-gray-800">Previous Tour Plans</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="relative lg:mt-0 mt-3">
                        <input
                            type="text"
                            placeholder="Search by agency name"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 text-sm bg-white"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteToursData.map((tour) => (
                        <div key={tour.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                            {/* Tour Image */}
                            <div className="w-full h-52 p-3">
                                <img src={tour.image || "/placeholder.svg"} alt="Tour" className="w-full h-full rounded-md object-cover" />
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                {/* Date Range */}
                                <div className="text-sm text-gray-500 mb-2">{tour.dateRange}</div>

                                {/* Company Name */}
                                <h3 className="font-semibold text-gray-800 mb-3">{tour.companyName}</h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between">
                                    {/* Duration */}
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <FiClock className="w-4 h-4" />
                                        <span className="text-sm">{tour.duration}</span>
                                    </div>

                                    {/* View Button */}
                                    <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                                        VIEW
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorite
