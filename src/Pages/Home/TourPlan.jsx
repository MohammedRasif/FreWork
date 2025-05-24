
const TourPlan = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-20">
                <div className="flex gap-6">
                    {/* Main Content - Left Side */}
                    <div className="w-4/5">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                
                            
                    <h1 className="text-4xl font-semibold text-gray-800 mb-1">Published Tour Plans</h1>
                    
          
                                <div className="flex items-center gap-4">
                                    <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                                        <option>Select</option>
                                    </select>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64"
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
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            {/* Tour Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Tour From Dhaka To Bangkok</h2>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <p>
                                            <span className="font-medium">Willing to go on:</span> 12th July, 2025
                                        </p>
                                        <p>
                                            <span className="font-medium">Duration:</span> 10 Days
                                        </p>
                                        <p>
                                            <span className="font-medium">Category:</span> Adventure
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-gray-900">2001USD</div>
                                    <div className="text-sm text-gray-500">Test 5 Person</div>
                                    <div className="text-xs text-blue-600 mt-1">Budget</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a
                                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                                    will uncover many web sites still in their infancy. Various versions have evolved over the years,
                                    sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                                <button className="text-blue-600 text-sm font-medium mt-2 hover:underline">see more</button>
                            </div>

                            {/* Tags */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 mb-2">
                                    <span className="font-medium">Interested Destination:</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Location", "Location", "Location", "Location", "Location"].map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="mb-4">
                                <div className="relative rounded-lg overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529176/samples/balloons.jpg"
                                        alt="Resort pool with palm trees"
                                        width={800}
                                        height={400}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Engagement Stats */}
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-1">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                </svg>
                                            </div>
                                            <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-600">203 Likes</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>6 Others</span>
                                    <span>1 Share</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-3">
                                <div className="flex items-center gap-6">
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                            />
                                        </svg>
                                        <span className="text-sm">Like</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                        <span className="text-sm">Others</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            />
                                        </svg>
                                        <span className="text-sm">Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Agency Listings */}
                        {/* <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">All Offers</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Offered budget</span>
                                    <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>

                  
                            {[
                                { name: "Leisure pvt ltd", verified: true, provided: true },
                                { name: "Tour spotter agency", verified: true, provided: true },
                                { name: "Camila travel agency", verified: false, provided: true },
                            ].map((agency, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                                <span className="text-sm font-medium text-gray-600">
                                                    {agency.name
                                                        .split(" ")
                                                        .map((word) => word[0])
                                                        .join("")
                                                        .toUpperCase()}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-medium text-gray-900">{agency.name}</h4>
                                                    {agency.verified && (
                                                        <div className="flex items-center gap-1">
                                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                                    {agency.provided && (
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            2500 USD
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                                            Interested
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="text-center py-4">
                                <p className="text-sm text-gray-600">
                                    Want to register? <button className="text-blue-600 hover:underline font-medium">Click here</button>
                                </p>
                            </div>
                        </div> */}
                    </div>

                    {/* Sidebar - Right Side */}
                    <div className="w-1/5">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4  mt-[100px]">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

                            <div className="space-y-4">
                                {/* Search */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="search to available plan"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                    />
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Price range (USD)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            type="text"
                                            placeholder="Min"
                                            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Max"
                                            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Country Selection */}
                                <div>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500">
                                        <option>Select country</option>
                                    </select>
                                </div>

                                {/* Tour Destination */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tour Destination</label>
                                    <input
                                        type="text"
                                        placeholder="search destination"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
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
