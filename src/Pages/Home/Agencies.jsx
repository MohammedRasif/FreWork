import { NavLink } from "react-router-dom";

const Agencies = () => {
  const publishedData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
      title: "Some Amazing Title Here",
      description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
      location: "Museums",
      price: "$150/10 Person",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-3.jpg",
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
    <div className="pb-8 px-4 sm:px-6 lg:px-8 roboto bg-gradient-to-b from-white">
      <div className="text-center py-8 sm:py-10 lg:py-12">
        <p className="text-gray-700 text-sm xs:text-base sm:text-lg mb-4 font-medium">
          Top Requests are here
        </p>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F4C65]">
          Currently Top Agencies
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
          {publishedData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[90vw] xs:max-w-[45vw] sm:max-w-[38vh] lg:max-w-[40vh] mx-auto"
            >
              {/* Image Section */}
              <div className="relative h-40 xs:h-48 sm:h-56 lg:h-64 bg-white p-3 sm:p-4 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="p-3 xs:p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-[26px] font-semibold text-gray-800 mb-2 xs:mb-3 leading-tight line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-medium text-xs xs:text-sm sm:text-sm leading-relaxed mb-3 xs:mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Clients, Reviews, and Button */}
                <div>
                  {/* Happy Clients */}
                  <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
                    <svg
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-gray-500 mr-1 xs:mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="text-gray-700 text-xs xs:text-sm sm:text-md font-medium">
                      12K Happy Clients
                    </span>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-yellow-500 mr-1 xs:mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l2.36 7.2h7.64l-6.18 4.48 2.36 7.2-6.18-4.48-6.18 4.48 2.36-7.2-6.18-4.48h7.64z" />
                      </svg>
                      <span className="text-gray-700 text-xs xs:text-sm sm:text-sm font-medium">
                        4.5 (<span className="underline text-blue-500 cursor-pointer">355 Reviews</span>)
                      </span>
                    </div>

                    {/* Arrow Button */}
                    <button className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-[#3C76DC] hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
                      <svg
                        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavLink to="/membership">
        <h1 className="text-center py-6 xs:py-8 sm:py-10 font-medium text-sm xs:text-base sm:text-lg lg:text-[19px] text-blue-500 underline cursor-pointer">
          see more...
        </h1>
      </NavLink>
    </div>
  );
};

export default Agencies;