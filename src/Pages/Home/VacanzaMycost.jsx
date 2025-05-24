import img from "../../assets/img/Group.png";
import img1 from "../../assets/img/hello.svg";
import img2 from "../../assets/img/discount 1.svg";
import img3 from "../../assets/img/booking 1.svg";

const VacanzaMycost = () => {
    return (
        <div>
            {/* Header Text */}
            <div className="text-center pt-16">
                <p className="text-gray-700 text-lg mb-4 font-medium">What we offer to our users...</p>
                <h1 className="text-4xl md:text-5xl font-semibold text-[#3F4C65]">Let's Use VacanzaMycost.It</h1>
            </div>
            <div className="relative">
                {/* Background Image */}
                <img
                    src={img}
                    alt="Background"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-7xl h-[70vh] z-0 object-cover"
                />

                {/* Overlay (optional for readability) */}
                <div className="absolute top-0 left-0 w-full h-full z-10"></div>

                {/* Content Container */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-10">


                    {/* Steps Container */}
                    <div className="flex  items-center justify-center  space-x-32 ">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center bg-white rounded-full shadow-lg p-8" style={{ width: '280px', height: '280px' }}>
                            <div className="relative ">
                                <div className="absolute -top-12 -right-20 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                                    <div className="w-16 h-16 bg-[#05B7D7] rounded-full flex items-center justify-center text-white font-bold text-[24px]  z-10">
                                        01
                                    </div>
                                </div>
                                <div className="w-28 h-28  flex items-center justify-center ">
                                    <div>
                                        <img src={img1} alt="" className="h-24" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Publish Request</h3>
                            <p className="text-gray-600 text-base leading-relaxed font-medium">
                                Enter Your Travel Request
                                <br />
                                In Just A Few Clicks
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center bg-white rounded-full shadow-lg p-8" style={{ width: '280px', height: '280px' }}>
                            <div className="relative ">
                                <div className="absolute -top-12 -right-20 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                                    <div className="w-16 h-16 bg-[#447CDD] rounded-full flex items-center justify-center text-white font-bold text-[24px]  z-10">
                                        02
                                    </div>
                                </div>
                                <div className="w-28 h-28  flex items-center justify-center ">
                                    <div>
                                        <img src={img2} alt="" className="h-24" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Personalized offers</h3>
                            <p className="text-gray-600 text-base leading-relaxed font-medium">
                                Get convenient proposals
                                <br />
                                from travel agencies
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center bg-white rounded-full shadow-lg p-8" style={{ width: '280px', height: '280px' }}>
                            <div className="relative ">
                                <div className="absolute -top-12 -right-20 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl border border-gray-100">
                                    <div className="w-16 h-16 bg-[#D75EC7] rounded-full flex items-center justify-center text-white font-bold text-[24px]  z-10">
                                        03
                                    </div>
                                </div>
                                <div className="w-28 h-28  flex items-center justify-center ">
                                    <div>
                                        <img src={img3} alt="" className="h-24" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Free Booking</h3>
                            <p className="text-gray-600 text-base leading-relaxed font-medium">
                                easily contact the agency
                                <br />
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