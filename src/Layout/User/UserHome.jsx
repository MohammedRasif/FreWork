import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="col-span-10">
          <div className="w-full flex items-end justify-end">
            <Button
              variant="transparent"
              className="font-nunito-sans font-semibold"
            >
              Create Plan
              <Plus size={18} />
            </Button>
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
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        <div className="col-span-2 w-full pt-16 px-5">
          <h4 className="text-[#343E4B] font-semibold text-xl text-center">
            My All Plans
          </h4>
          <div className="flex flex-col gap-4 py-2 px-4">
            <Button variant="white">Created Plan</Button>
            <Button variant="secondary">Published Plans</Button>
            <Button variant="secondary">Published Plans</Button>
            <Button variant="secondary">Accepted Offers</Button>
            <Button variant="secondary">Favourite Agencies</Button>

            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium">Need free fasted response?</p>
              <Button
                variant="link"
                size="xs"
                className="underline text-left w-min text-xs"
              >
                Click here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
