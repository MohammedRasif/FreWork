import { NavLink } from "react-router-dom";

const Published = () => {
  // Data object for the cards
  const publishedData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529176/samples/balloons.jpg",
      title: "Some Amazing Title Here",
      description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
      location: "Museums",
      price: "$150/10 Person",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529170/samples/landscapes/nature-mountains.jpg",
      title: "Another Amazing Place",
      description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
      location: "Beach Resort",
      price: "$200/8 Person",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/animals/reindeer.jpg",
      title: "Beautiful Destination",
      description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
      location: "Mountain View",
      price: "$180/12 Person",
    },
  ];

  return (
    <div className="pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#4691F2]/10">
      <div className="text-center py-10 sm:py-12 lg:py-16">
        <p className="text-gray-700 text-base sm:text-lg mb-4 font-medium">Top Requests are here</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-[#3F4C65]">
          Last Request Published
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {publishedData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-[38vh] lg:w-[40vh] mx-auto"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 lg:h-64 bg-white p-3 sm:p-4 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Location */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#849ECC] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{item.location}</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div className="text-base sm:text-lg font-semibold text-gray-800">{item.price}</div>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3C76DC] hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavLink to="/tourPlan">
        <h1 className="text-center py-8 sm:py-10 font-medium text-base sm:text-lg lg:text-[19px] text-blue-500 underline cursor-pointer">
          see more...
        </h1>
      </NavLink>
    </div>
  );
};

export default Published;