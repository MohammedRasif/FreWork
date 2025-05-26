import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreatedPlanCard from "../../components/created-plan-card";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomeLayout = ({ children }) => {
	const { pathname } = useLocation();

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
						<NavLink to="/user/CreatePlan">
						<Button
							variant="transparent"
							className="font-nunito-sans font-semibold"
						>
							Create Plan
							<Plus size={18} />
						</Button>
						</NavLink>
					</div>

					<div className="w-full flex items-center gap-2">
						<div className="min-w-max">
							<h4 className="text-base font-semibold text-[#343E4B]">
								12 July, 2025
							</h4>
						</div>

						<div className="w-full h-[1px] bg-[#B8BABD]"></div>
					</div>

					<div>{children}</div>
				</div>

				<div className="col-span-2 w-full pt-16 px-5">
					<h4 className="text-[#343E4B] font-semibold text-xl text-center">
						My All Plans
					</h4>
					<div className="flex flex-col gap-4 py-2 px-4">
						<Button
							variant={
								pathname === "/user" ? "white" : "secondary"
							}
							className="px-4 py-3 w-full font-semibold"
						>
							<Link to="/user">Created Plan</Link>
						</Button>
						<Button
							variant={
								pathname === "/user/published"
									? "white"
									: "secondary"
							}
							className="px-4 py-3 w-full font-semibold"
						>
							<Link to="/user/published">Published Plans</Link>
						</Button>
						<Button
							variant={
								pathname === "/user/accepted"
									? "white"
									: "secondary"
							}
							className="px-4 py-3 w-full font-semibold"
						>
							Accepted Offers
						</Button>
						<Button
							variant={
								pathname === "/user/favourite"
									? "white"
									: "secondary"
							}
							className="px-4 py-3 w-full font-semibold"
						>
							Favourite Agencies
						</Button>

						<div className="flex flex-col gap-1">
							<p className="text-xs font-medium">
								Need free fasted response?
							</p>
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

export default HomeLayout;
