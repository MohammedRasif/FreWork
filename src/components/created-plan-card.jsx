import {
	CheckCircle,
	CircleArrowUp,
	EllipsisVertical,
	Lock,
	Mail,
	MoveLeft,
	MoveRight,
	SquarePen,
	Trash,
} from "lucide-react";
import PlanImage1 from "../assets/img/plan-image-1.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import CardViewImage from "../assets/img/card-view-image.png";

export default function CreatedPlanCard({ plan }) {
	return (
		<div className="w-full h-auto bg-white rounded-xl p-3 shadow-[0_3px_7.3px_0px_#0000001A] grid grid-cols-6">
			<div className="rounded-md overflow-hidden w-[168px] h-[147px]">
				<img
					src={PlanImage1}
					alt="Plan Image"
					className="w-full h-full object-center object-cover"
				/>
			</div>
			<div className="col-span-5 min-w-full h-full grid grid-cols-3 gap-2">
				<div className="min-w-max px-3 space-y-1 col-span-2 py-3">
					<h4 className="text-2xl font-medium text-[#343E4B] capitalize mb-3">
						{plan.title}
					</h4>
					<h5 className="text-[#70798F]">
						Willing to go on{" "}
						<span className="font-medium text-[#343E4B]">
							{plan.on}
						</span>
					</h5>
					<h5 className="text-[#70798F]">
						Duration{" "}
						<span className="font-medium text-[#343E4B]">
							{plan.duration}
						</span>
					</h5>
					<h5 className="text-[#70798F]">
						Category{" "}
						<span className="font-medium text-[#343E4B]">
							{plan.category}
						</span>
					</h5>
				</div>

				<div className="col-span-1 flex flex-col justify-between">
					<div className="flex items-center justify-end gap-4 relative">
						<div className="flex flex-col gap-0">
							<span className="text-[#343E4B] font-medium">
								Budget 200USD
							</span>
							<span className="text-xs font-light">
								Total 5 person
							</span>
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<button className="cursor-pointer">
									<EllipsisVertical
										className="text-[#70798F]"
										size={18}
									/>
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56" align="end">
								<DropdownMenuItem>
									<CheckCircle size={20} />
									Publish Plan
								</DropdownMenuItem>
								<DropdownMenuItem>
									<SquarePen size={20} />
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Trash size={20} />
									Delete
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className="w-full flex items-center justify-end gap-2">
						<Dialog>
							<DialogTrigger asChild>
								<Button variant="secondary">View</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[876px] px-6">
								<DialogHeader>
									<div className="flex justify-between gap-3">
										<div className="flex items-center gap-3">
											<DialogClose>
												<MoveLeft
													size={20}
													className="cursor-pointer"
												/>
											</DialogClose>
											<h3 className="text-3xl font-medium text-foreground">
												Tour From Dhaka To Bangkok
											</h3>
										</div>

										<div className="flex items-center justify-start gap-4 relative">
											<div className="flex flex-col gap-0">
												<span className="text-[#343E4B] font-medium">
													Budget 200USD
												</span>
												<span className="text-xs font-light">
													Total 5 person
												</span>
											</div>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<button className="cursor-pointer">
														<EllipsisVertical
															className="text-[#70798F]"
															size={18}
														/>
													</button>
												</DropdownMenuTrigger>
												<DropdownMenuContent
													className="w-56"
													align="end"
												>
													<DropdownMenuItem>
														<CheckCircle
															size={20}
														/>
														Publish Plan
													</DropdownMenuItem>
													<DropdownMenuItem>
														<SquarePen size={20} />
														Edit
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Trash size={20} />
														Delete
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									</div>

									<div className="w-full flex items-center justify-between">
										<div className="min-w-max px-3 space-y-1 col-span-2">
											<h5 className="text-[#70798F]">
												Willing to go on{" "}
												<span className="font-medium text-[#343E4B]">
													{plan.on}
												</span>
											</h5>
											<h5 className="text-[#70798F]">
												Duration{" "}
												<span className="font-medium text-[#343E4B]">
													{plan.duration}
												</span>
											</h5>
											<h5 className="text-[#70798F]">
												Category{" "}
												<span className="font-medium text-[#343E4B]">
													{plan.category}
												</span>
											</h5>
										</div>

										<div className="">
											<Button>Publish Now</Button>
										</div>
									</div>
								</DialogHeader>

								<div className="py-5 space-y-3">
									<p className="text-lg text-[#70798F]">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Repudiandae excepturi,
										at tenetur laudantium veritatis a ipsum
										voluptatibus. Pariatur, ut, voluptate
										dolore veniam distinctio voluptates
										recusandae porro necessitatibus, itaque
										ducimus nisi...
										<Button
											variant="link"
											className="font-semibold text-base font-roboto px-1"
										>
											see more
										</Button>
									</p>

									<p className="text-lg text-[#70798F]">
										Interested tourist points:{" "}
										<span className="text-[#343E4B] font-medium">
											Location, Location, Location,
											Location
										</span>
									</p>
								</div>

								<div className="py-5 w-[808px] h-[368px] mx-auto rounded-xl overflow-hidden">
									<img
										src={CardViewImage}
										alt="Card View Image"
										className="w-full h-full object-center"
									/>
								</div>
							</DialogContent>
						</Dialog>
						<Button>Publish Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
