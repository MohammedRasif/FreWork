import { Heart, Star } from "lucide-react";

export default function Card({ tourPlan }) {
  return (
    <div className="flex flex-col w-full max-w-[160px] sm:max-w-sm mx-1 sm:mx-2 h-[200px] sm:h-[400px] overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <div className="relative flex-shrink-0">
        {/* Property Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={tourPlan.spot_picture_url || "/images/placeholder.png"}
            alt={tourPlan.description || "Tour destination"}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 text-gray-700 font-medium px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm shadow-sm rounded">
          {tourPlan.category}
        </div>

        {/* Heart/Favorite Button
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 hover:bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 shadow-sm flex items-center justify-center transition-colors">
          <Heart
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              tourPlan.like_count > 0
                ? "text-red-500 fill-red-500"
                : "text-gray-600"
            } hover:text-red-500 transition-colors`}
          />
        </button> */}
      </div>

      <div className="flex flex-col flex-grow p-2 sm:p-4 min-h-0 justify-end">
        {/* Property Title */}
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base sm:mb-2 truncate mb-auto">
          {tourPlan.location_to}
        </h3>

        {/* Price and Rating */}
        <div className="">
          <div className="text-gray-900">
            <span className="font-semibold text-sm sm:text-base">
              ${tourPlan.budget}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-xs sm:text-sm ml-0.5 sm:ml-1">
              for {tourPlan.total_members}{" "}
              {tourPlan.total_members > 1 ? "people" : "person"}
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                {tourPlan.like_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
