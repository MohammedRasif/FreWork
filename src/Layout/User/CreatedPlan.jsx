import CreatedPlanCard from "@/components/created-plan-card";
import { Outlet } from "react-router-dom";

const createdPlan = [
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

export default function CreatedPlan() {
	return (
		<>
			<div className="w-full h-auto p-4 space-y-4">
				{createdPlan.map((plan) => (
					<CreatedPlanCard key={plan.id} plan={plan} />
				))}
			</div>
		</>
	);
}
