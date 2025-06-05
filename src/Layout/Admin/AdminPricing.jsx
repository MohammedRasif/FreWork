"use client"

import { motion, AnimatePresence } from "framer-motion"
import { IoCheckmarkCircleSharp, IoCheckmarkDoneSharp } from "react-icons/io5"

const AdminPricing = () => {
  const plans = [
    {
      name: "Free User",
      limit: "3",
      limitUnit: "Query/Day",
      features: [
        "Includes general source databases",
        "Limited free queries per bot day",
        "No access to specific, company, or private databases",
      ],
    },
    {
      name: "Standard User",
      limit: "No limit,",
      limitUnit: "Query/Day",
      features: [
        "Full access to general source databases",
        "Unlimited queries per bot daily",
        "Potential limitations on account sharing",
      ],
      highlighted: true, // Highlight this plan
    },
    {
      name: "Premium User",
      limit: "No limit,",
      limitUnit: "Query/Day",
      features: [
        "Includes general source databases",
        "Unlimited queries per bot daily",
        "Company-Specific Personal Database",
      ],
    },
  ]

  return (
    <div className="p-3 sm:p-4 lg:p-6">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Pricing and Packages</h1>
        <h2 className="text-sm sm:text-base lg:text-[16px] font-medium text-gray-600">Find your best package here</h2>
      </div>

      {/* Membership Info Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-400 mx-2 sm:mx-4 lg:mx-5 p-3 sm:p-4 lg:p-3 rounded-md mb-6 sm:mb-8 lg:mb-10 space-y-3 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h3 className="text-sm sm:text-base lg:text-[16px] text-gray-700 font-medium">Date of Starting</h3>
          <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700">12 July, 2025</p>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-sm sm:text-base lg:text-[16px] text-gray-700 font-medium">Membership (Current)</h3>
          <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700">Freebie</p>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-sm sm:text-base lg:text-[16px] text-gray-700 font-medium">Date of end</h3>
          <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700">12 July, 2025</p>
        </div>
      </div>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-white rounded-lg overflow-hidden flex flex-col h-full border border-gray-200 roboto transition-transform transform hover:scale-105 ${
                plan.highlighted ? "border-2 border-[#3776E2] shadow-lg" : ""
              }`}
            >
              {/* Plan Header with Background */}
              <div className="relative">
                <div className="w-3/4 rounded-r-lg my-6 sm:my-8 lg:my-10 relative">
                  {/* Background gradient instead of image for better responsiveness */}
                  <div className="w-full h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-r-lg"></div>
                  <h3 className="absolute top-2 sm:top-3 lg:top-4 left-3 sm:left-4 lg:left-4 text-slate-700 font-bold text-base sm:text-lg lg:text-xl z-10">
                    {plan.name}
                  </h3>
                </div>
              </div>

              {/* Plan Content */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                {/* Pricing Section */}
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex items-end">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700">{plan.limit}</span>
                    <span className="text-sm sm:text-base lg:text-base text-slate-500 ml-2 mb-1">{plan.limitUnit}</span>
                  </div>
                  <p className="text-slate-500 text-sm sm:text-base lg:text-base mt-1">Measurable results</p>
                </div>

                {/* Select Button */}
                <button
                  className={`w-full py-2 sm:py-2.5 lg:py-3 rounded-md text-base sm:text-lg lg:text-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-[#3776E2] text-white hover:bg-[#00669e]"
                      : "bg-[#3776E2] text-white hover:bg-[#00669e]"
                  }`}
                >
                  Select
                </button>

                <p className="text-slate-500 text-sm sm:text-base lg:text-base mb-4 sm:mb-5 lg:mb-6 mt-3 sm:mt-4 lg:mt-4 text-center">
                  Contact us for more Details
                </p>

                {/* Features Section */}
                <div className="mb-4 flex-grow">
                  <div className="flex items-center mb-3">
                    <span className="text-slate-700 font-semibold text-base sm:text-lg lg:text-lg">Features</span>
                    <div className="ml-2 text-[#3776E2]">
                      <IoCheckmarkCircleSharp size={18} className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 lg:space-y-3 text-sm sm:text-base lg:text-base text-slate-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <IoCheckmarkDoneSharp
                          className="text-[#3776E2] mt-0.5 sm:mt-1 lg:mt-1 mr-2 flex-shrink-0"
                          size={16}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Additional Info Section for Mobile */}
      <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
        <p className="text-xs sm:text-sm lg:text-base text-gray-600">
          Need help choosing?{" "}
          <span className="text-[#3776E2] font-medium cursor-pointer hover:underline">Contact our support team</span>
        </p>
      </div>
    </div>
  )
}

export default AdminPricing
