import img from "../../assets/img/Group.png";
import img1 from "../../assets/img/hello.svg";
import img2 from "../../assets/img/discount 1.svg";
import img3 from "../../assets/img/booking 1.svg";

const VacanzaMycost = () => {
  return (
    <div className="bg-white lg:mb-0 -mb-20">
      {/* Header Text */}
      <div className="text-center pt-8 md:pt-16 lg:mb-0 -mb-20">
        <p className="text-gray-700 text-[14px] md:text-lg lg:mb-4 font-medium">
          What we offer to our users...
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#3F4C65]">
          Let's Use VacanzaMycost.It
        </h1>
      </div>
      <div className="relative">
        {/* Background Image */}
        <img
          src={img}
          alt="Background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[70vh] md:h-[80vh] z-0 object-contain"
        />

        {/* Overlay (optional for readability, kept transparent) */}
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[70vh] md:h-[85vh] px-4 py-10">
          {/* Steps Container */}
          <div className="flex  flex-row items-center justify-center space-y-12 md:space-y-0 space-x-2 lg:space-x-32">
            {/* Step 1 */}
            <div className="md:flex flex-col items-center text-center md:bg-white md:rounded-full md:shadow-lg md:p-8 lg:w-[280px] lg:h-[280px]">
              {/* This wrapper div adds design only on md and larger */}

              <div className="relative">
                {/* Badge, only show on md and up */}
                <div className="hidden md:block">
                  <div className="absolute -top-10 -right-16 md:-top-12 md:-right-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#05B7D7] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-[24px] z-10">
                      01
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-12 h-10 md:w-28 md:h-28 flex items-center justify-center lg:ml-0 ml-8 pb-3">
                  <img src={img1} alt="Publish Request" className="h-20 md:h-24" />
                </div>
              </div>

              {/* Heading and paragraph */}
              <h3 className="text-[13px] md:text-2xl font-semibold text-cyan-600 mb-2 md:mb-4">
                Publish Request
              </h3>
              <p className="text-gray-600 text-[10px] md:text-base leading-relaxed font-medium">
                Enter Your Travel Request
                
                In Just A Few Clicks
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="md:flex flex-col items-center text-center md:bg-white md:rounded-full md:shadow-lg md:p-8 lg:w-[280px] lg:h-[280px] lg:-mt-0 -mt-4" // Responsive width on mobile
            >
              <div className="relative">
                {/* Badge visible only on md and up */}
                <div className="hidden md:block">
                  <div className="absolute -top-10 -right-16 md:-top-12 md:-right-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#447CDD] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-[24px] z-10">
                      02
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-12 h-10 md:w-28 md:h-28 flex items-center justify-center lg:ml-0 ml-8 pb-3">
                  <img
                    src={img2}
                    alt="Personalized Offers"
                    className="h-20 md:h-24"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[13px] md:text-2xl font-semibold text-cyan-600 mb-2 md:mb-4">
                Personalized Offers
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[10px] md:text-base leading-relaxed font-medium text-center">
                Get convenient proposals
              
                from travel agencies
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="md:flex flex-col items-center text-center md:bg-white md:rounded-full md:shadow-lg md:p-8 lg:w-[280px] lg:h-[280px] lg:-mt-0 -mt-12"
            >
              <div className="relative">
                {/* Badge - only on md and up */}
                <div className="hidden md:block">
                  <div className="absolute -top-10 -right-16 md:-top-12 md:-right-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D75EC7] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-[24px] z-10">
                      03
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-12 h-10 md:w-28 md:h-28 flex items-center justify-center pb-3">
                  <img src={img3} alt="Free Booking" className="h-20 md:h-24 lg:ml-0 ml-8" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[13px] md:text-2xl font-semibold text-cyan-600 mb-2 md:mb-4">
                Free Booking
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[10px] md:text-base leading-relaxed font-medium text-center">
                Easily contact the agency
                
                and book directly
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanzaMycost;