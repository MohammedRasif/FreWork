import {
  CheckCircle,
  CircleArrowUp,
  EllipsisVertical,
  Lock,
  Mail,
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

export default function PlanCard({ plan }) {
  return (
    <div className="w-full h-auto bg-white rounded-xl p-3 shadow-[0_3px_7.3px_0px_#0000001A] grid grid-cols-6">
      <div className="rounded-md overflow-hidden">
        <img
          src={PlanImage1}
          alt="Plan Image"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="col-span-5 min-w-full h-full grid grid-cols-3 gap-2">
        <div className="min-w-max px-3 space-y-1 col-span-2 py-5">
          <h4 className="text-2xl font-medium text-[#343E4B] capitalize mb-3">
            {plan.title}
          </h4>
          <h5 className="text-[#70798F]">
            Willing to go on{" "}
            <span className="font-medium text-[#343E4B]">{plan.on}</span>
          </h5>
          <h5 className="text-[#70798F]">
            Duration{" "}
            <span className="font-medium text-[#343E4B]">{plan.duration}</span>
          </h5>
          <h5 className="text-[#70798F]">
            Category{" "}
            <span className="font-medium text-[#343E4B]">{plan.category}</span>
          </h5>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-end gap-4 relative">
            <div className="flex flex-col gap-0">
              <span className="text-[#343E4B] font-medium">Budget 200USD</span>
              <span className="text-xs font-light">Total 5 person</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                  <EllipsisVertical className="text-[#70798F]" size={18} />
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
            <Button variant="secondary">View</Button>
            <Button>Publish Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// function PlanViewDialog({plan}) {
//     return (

//     )
// }
