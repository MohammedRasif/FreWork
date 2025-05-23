import { Plus } from "lucide-react";
import PlanCard from "../../components/plan-card";

const rawPlanData = [
  {
    id: 0,
    title: "Tour from Paris",
    on: "12 July 2025",
    duration: "10 days",
    category: "adventure",
  },
  {
    id: 1,
    title: "Tour from Tokyo",
    on: "20 August 2025",
    duration: "7 days",
    category: "cultural",
  },
  {
    id: 2,
    title: "Tour from Machu Picchu",
    on: "15 September 2025",
    duration: "12 days",
    category: "trekking",
  },
  {
    id: 3,
    title: "Tour from Safari in Serengeti",
    on: "10 October 2025",
    duration: "8 days",
    category: "wildlife",
  },
  {
    id: 4,
    title: "Tour from New Zealand",
    on: "25 November 2025",
    duration: "14 days",
    category: "adventure",
  },
  {
    id: 5,
    title: "Tour from Santorini",
    on: "5 June 2025",
    duration: "5 days",
    category: "relaxation",
  },
  {
    id: 6,
    title: "Tour from Patagonia",
    on: "18 December 2025",
    duration: "11 days",
    category: "trekking",
  },
  {
    id: 7,
    title: "Tour from Bangkok",
    on: "22 January 2026",
    duration: "9 days",
    category: "cultural",
  },
  {
    id: 8,
    title: "Tour from Iceland",
    on: "14 February 2026",
    duration: "6 days",
    category: "nature",
  },
  {
    id: 9,
    title: "Tour from Cairo",
    on: "30 March 2026",
    duration: "13 days",
    category: "historical",
  },
];

const UserHome = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-[#343E4B] font-semibold text-3xl">
          Welcome,{" "}
          <span className="font-normal">
            Publish your plan to get perfect offer
          </span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-12 py-8">
        <div className="col-span-11">
          <div className="w-full flex items-end justify-end">
            <button className="btn btn-primary-transparent flex items-center gap-2 font-nunito-sans font-semibold">
              Create Plan
              <Plus size={18} />
            </button>
          </div>

          <div className="w-full flex items-center gap-2">
            <div className="min-w-max">
              <h4 className="text-base font-semibold text-[#343E4B]">
                12 July, 2025
              </h4>
            </div>

            <div className="w-full h-[1px] bg-[#B8BABD]"></div>
          </div>

          <div className="w-full h-auto mt-4 space-y-4">
            {rawPlanData.map((plan) => (
              <PlanCard
                key={plan.id}
                title={plan.title}
                on={plan.on}
                duration={plan.duration}
                category={plan.category}
              />
            ))}
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default UserHome;
