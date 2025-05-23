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

export default function PlanCard({ title, on, duration, category }) {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  return (
    <div className="w-full min-h-16 h-auto bg-white rounded-xl p-3 shadow-[0_3px_7.3px_0px_#0000001A] grid grid-cols-6">
      <div className="rounded-md overflow-hidden">
        <img
          src={PlanImage1}
          alt="Plan Image"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="col-span-5 min-w-full h-full grid grid-cols-3 gap-2">
        <div className="min-w-max px-3 space-y-1 col-span-2 py-5 ">
          <h4 className="text-2xl font-medium text-[#343E4B] capitalize mb-3">
            {title}
          </h4>
          <h5 className="text-[#70798F]">
            Willing to go on{" "}
            <span className="font-medium text-[#343E4B]">{on}</span>
          </h5>
          <h5 className="text-[#70798F]">
            Duration{" "}
            <span className="font-medium text-[#343E4B]">{duration}</span>
          </h5>
          <h5 className="text-[#70798F]">
            Category{" "}
            <span className="font-medium text-[#343E4B]">{category}</span>
          </h5>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-end gap-4 relative">
            <div className="flex flex-col gap-0">
              <span className="text-[#343E4B] font-medium">Budget 200USD</span>
              <span className="text-xs font-light">Total 5 person</span>
            </div>
            <button onClick={() => setShowSettingsMenu(!showSettingsMenu)}>
              <EllipsisVertical className="text-[#70798F]" size={18} />
            </button>
            <div
              className={`absolute top-20 right-10 w-52 h-auto p-4 rounded-md bg-white shadow-[0_2px_4px_-1px_#00000030] before:content-[''] before:absolute before:-top-7 before:right-[15px] before:w-0 before:h-0 before:border-l-[15px] before:border-r-[15px] before:border-b-[30px] before:border-l-transparent before:border-r-transparent before:border-b-white ${
                showSettingsMenu ? "block" : "hidden"
              }`}
            >
              <ul className="w-full flex-col gap-4 flex">
                <li className="flex items-center gap-2 text-[#343E4B] text-base cursor-pointer">
                  <CheckCircle size={20} />
                  Publish Plan
                </li>
                <li className="flex items-center gap-2 text-[#343E4B] text-base cursor-pointer">
                  <SquarePen size={20} />
                  Edit
                </li>
                <li className="flex items-center gap-2 text-[#343E4B] text-base cursor-pointer">
                  <Trash size={20} />
                  Delete
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex gap-2">
            <button className="btn btn-secondary w-full">View</button>
            <button className="btn btn-primary w-full">Publish Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
