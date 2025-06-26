import {
  CheckCircle,
  EllipsisVertical,
  SquarePen,
  Trash,
  MoveLeft,
  Edit,
} from "lucide-react";
import PlanImage1 from "../assets/img/plan-image-1.png";
import CardViewImage from "../assets/img/card-view-image.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import {
  useDeletePlanMutation,
  useUpdatePlanMutation,
} from "@/redux/features/withAuth";
import { Link } from "react-router-dom";

export default function CreatedPlanCard({ plan, setCreatedPlans }) {
  const [updatePlan, { isLoading: updateLoading }] = useUpdatePlanMutation();
  const [deletePlan, { isLoading: deleteLoading }] = useDeletePlanMutation();

  const handlePublishToggle = async () => {
    try {
      const updatedPlan = await updatePlan({
        id: plan.id,
        updates: {
          status: plan.status === "published" ? "draft" : "published",
        },
      }).unwrap();

      setCreatedPlans((prevPlans) =>
        prevPlans.map((p) => (p.id === updatedPlan.id ? updatedPlan : p))
      );

      console.log(`Plan status updated successfully!`);
    } catch (error) {
      console.error("Error updating plan status:", error);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    try {
      await deletePlan(plan.id).unwrap();

      setCreatedPlans((prevPlans) => prevPlans.filter((p) => p.id !== plan.id));

      console.log(`Plan deleted successfully!`);
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  return (
    <div className="w-full h-auto bg-white rounded-xl p-3 shadow-[0_3px_7.3px_0px_#0000001A] grid grid-cols-6">
      {/* left image */}
      <div className="rounded-md overflow-hidden w-[168px] h-[147px]">
        <img
          src={PlanImage1}
          alt="Plan Image"
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* right side */}
      <div className="col-span-5 min-w-full h-full grid grid-cols-3 gap-2">
        <div className="min-w-max px-3 space-y-1 col-span-2 py-3">
          <h4 className="text-2xl font-medium text-[#343E4B] capitalize mb-3">
            {plan.location_from} to {plan.location_to}
          </h4>
          <h5 className="text-[#70798F]">
            Dates:{" "}
            <span className="font-medium text-[#343E4B]">
              {new Date(plan.start_date).toLocaleDateString()} —{" "}
              {new Date(plan.end_date).toLocaleDateString()}
            </span>
          </h5>
          <h5 className="text-[#70798F]">
            Total members:{" "}
            <span className="font-medium text-[#343E4B]">
              {plan.total_members}
            </span>
          </h5>
          <h5 className="text-[#70798F]">
            Category:{" "}
            <span className="font-medium text-[#343E4B]">{plan.category}</span>
          </h5>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-end gap-4 relative">
            <div className="flex flex-col gap-0">
              <span className="text-[#343E4B] font-medium">
                Budget ${plan.budget}
              </span>
              <span className="text-xs font-light">
                Total {plan.total_members} person
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                  <EllipsisVertical className="text-[#70798F]" size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem
                  disabled={updateLoading}
                  onClick={handlePublishToggle}
                >
                  <CheckCircle size={20} className="mr-2" />
                  {updateLoading
                    ? "Updating..."
                    : plan.status === "published"
                    ? "Unpublish Plan"
                    : "Publish Plan"}
                </DropdownMenuItem>
                <Link
                  to={"/user/CreatePlan"}
                  state={{ from: "edit", id: plan.id }}
                >
                  <DropdownMenuItem>
                    <Edit size={20} className="mr-2" /> Edit
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  disabled={deleteLoading}
                  onClick={handleDelete}
                >
                  <Trash size={20} className="mr-2" />
                  {deleteLoading ? "Deleting..." : "Delete Plan"}
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
                        <MoveLeft size={20} className="cursor-pointer" />
                      </DialogClose>
                      <h3 className="text-3xl font-medium text-foreground">
                        {plan.location_from} to {plan.location_to}
                      </h3>
                    </div>

                    <div className="flex items-center justify-start gap-4 relative">
                      <div className="flex flex-col gap-0">
                        <span className="text-[#343E4B] font-medium">
                          Budget ${plan.budget}
                        </span>
                        <span className="text-xs font-light">
                          Total {plan.total_members} person
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
                          <DropdownMenuItem
                            disabled={updateLoading}
                            onClick={handlePublishToggle}
                          >
                            <CheckCircle size={20} className="mr-2" />
                            {updateLoading
                              ? "Updating..."
                              : plan.status === "published"
                              ? "Unpublish Plan"
                              : "Publish Plan"}
                          </DropdownMenuItem>
                          <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                          <DropdownMenuItem
                            disabled={deleteLoading}
                            onClick={handleDelete}
                          >
                            <Trash size={20} className="mr-2" />
                            {deleteLoading ? "Deleting..." : "Delete Plan"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between mt-4">
                    <div className="min-w-max px-3 space-y-1 col-span-2">
                      <h5 className="text-[#70798F]">
                        Dates{" "}
                        <span className="font-medium text-[#343E4B]">
                          {new Date(plan.start_date).toLocaleDateString()} —{" "}
                          {new Date(plan.end_date).toLocaleDateString()}
                        </span>
                      </h5>
                      <h5 className="text-[#70798F]">
                        Category{" "}
                        <span className="font-medium text-[#343E4B]">
                          {plan.category}
                        </span>
                      </h5>
                    </div>
                    {plan.status !== "published" && (
                      <Button
                        disabled={updateLoading}
                        onClick={handlePublishToggle}
                      >
                        {updateLoading ? "Publishing..." : "Publish Now"}
                      </Button>
                    )}
                  </div>
                </DialogHeader>

                <div className="py-5 space-y-3">
                  <p className="text-lg text-[#70798F]">{plan.description}</p>
                  {plan.tourist_spots && (
                    <p className="text-lg text-[#70798F]">
                      Interested tourist spots:{" "}
                      <span className="text-[#343E4B] font-medium">
                        {plan.tourist_spots}
                      </span>
                    </p>
                  )}
                </div>

                <div className="py-5 w-[808px] h-[368px] mx-auto rounded-xl overflow-hidden">
                  <img
                    src={CardViewImage}
                    alt="Destination preview"
                    className="w-full h-full object-center"
                  />
                </div>
              </DialogContent>
            </Dialog>
            {plan.status !== "published" && (
              <Button disabled={updateLoading} onClick={handlePublishToggle}>
                {updateLoading ? "Publishing..." : "Publish Now"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
