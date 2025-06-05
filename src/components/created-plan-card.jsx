"use client"

import { CheckCircle, EllipsisVertical, MoveLeft, SquarePen, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"

export default function CreatedPlanCard({ plan }) {
  return (
    <div className="w-full h-auto bg-white rounded-xl p-3 sm:p-4 lg:p-3 shadow-[0_3px_7.3px_0px_#0000001A]">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Image */}
        <div className="w-full h-48 sm:h-56 rounded-md overflow-hidden mb-3">
          <img
            src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-3.jpg"
            alt="Plan Image"
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Header with title and dropdown */}
          <div className="flex items-start justify-between">
            <h4 className="text-lg sm:text-xl font-medium text-[#343E4B] capitalize flex-1 pr-2">
              {plan?.title || "Tour From Dhaka To Bangkok"}
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer p-1">
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

          {/* Plan Details */}
          <div className="space-y-1">
            <h5 className="text-sm text-[#70798F]">
              Willing to go on <span className="font-medium text-[#343E4B]">{plan?.on || "12th July, 2025"}</span>
            </h5>
            <h5 className="text-sm text-[#70798F]">
              Duration <span className="font-medium text-[#343E4B]">{plan?.duration || "10 Days"}</span>
            </h5>
            <h5 className="text-sm text-[#70798F]">
              Category <span className="font-medium text-[#343E4B]">{plan?.category || "Adventure"}</span>
            </h5>
          </div>

          {/* Budget and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-2">
            <div className="text-center sm:text-left">
              <span className="text-[#343E4B] font-medium text-sm sm:text-base">Budget 200USD</span>
              <br />
              <span className="text-xs font-light">Total 5 person</span>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="sm">
                    View
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[876px] px-3 sm:px-6 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <DialogClose>
                          <MoveLeft size={20} className="cursor-pointer" />
                        </DialogClose>
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium text-foreground">
                          Tour From Dhaka To Bangkok
                        </h3>
                      </div>

                      <div className="flex items-center justify-between sm:justify-start gap-4">
                        <div className="flex flex-col gap-0">
                          <span className="text-[#343E4B] font-medium text-sm sm:text-base">Budget 200USD</span>
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
                    </div>

                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="space-y-1">
                        <h5 className="text-sm sm:text-base text-[#70798F]">
                          Willing to go on{" "}
                          <span className="font-medium text-[#343E4B]">{plan?.on || "12th July, 2025"}</span>
                        </h5>
                        <h5 className="text-sm sm:text-base text-[#70798F]">
                          Duration <span className="font-medium text-[#343E4B]">{plan?.duration || "10 Days"}</span>
                        </h5>
                        <h5 className="text-sm sm:text-base text-[#70798F]">
                          Category <span className="font-medium text-[#343E4B]">{plan?.category || "Adventure"}</span>
                        </h5>
                      </div>

                      <div className="flex justify-center sm:justify-end">
                        <Button size="sm" className="w-full sm:w-auto">
                          Publish Now
                        </Button>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="py-3 sm:py-5 space-y-3">
                    <p className="text-sm sm:text-base lg:text-lg text-[#70798F] leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi, at tenetur
                      laudantium veritatis a ipsum voluptatibus. Pariatur, ut, voluptate dolore veniam distinctio
                      voluptates recusandae porro necessitatibus, itaque ducimus nisi...
                      <Button variant="link" className="font-semibold text-sm sm:text-base font-roboto px-1 h-auto p-0">
                        see more
                      </Button>
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-[#70798F]">
                      Interested tourist points:{" "}
                      <span className="text-[#343E4B] font-medium">Location, Location, Location, Location</span>
                    </p>
                  </div>

                  <div className="py-3 sm:py-5 w-full max-w-[808px] h-48 sm:h-64 lg:h-[368px] mx-auto rounded-xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=368&width=808"
                      alt="Card View Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="sm" className="w-auto sm:w-auto">
                Publish Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-6">
        <div className="rounded-md overflow-hidden w-[168px] h-[147px]">
          <img
            src="/placeholder.svg?height=147&width=168"
            alt="Plan Image"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="col-span-5 min-w-full h-full grid grid-cols-3 gap-2">
          <div className="min-w-max px-3 space-y-1 col-span-2 py-3">
            <h4 className="text-2xl font-medium text-[#343E4B] capitalize mb-3">
              {plan?.title || "Tour From Dhaka To Bangkok"}
            </h4>
            <h5 className="text-[#70798F]">
              Willing to go on <span className="font-medium text-[#343E4B]">{plan?.on || "12th July, 2025"}</span>
            </h5>
            <h5 className="text-[#70798F]">
              Duration <span className="font-medium text-[#343E4B]">{plan?.duration || "10 Days"}</span>
            </h5>
            <h5 className="text-[#70798F]">
              Category <span className="font-medium text-[#343E4B]">{plan?.category || "Adventure"}</span>
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
                        <h3 className="text-3xl font-medium text-foreground">Tour From Dhaka To Bangkok</h3>
                      </div>

                      <div className="flex items-center justify-start gap-4 relative">
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
                    </div>

                    <div className="w-full flex items-center justify-between">
                      <div className="min-w-max px-3 space-y-1 col-span-2">
                        <h5 className="text-[#70798F]">
                          Willing to go on{" "}
                          <span className="font-medium text-[#343E4B]">{plan?.on || "12th July, 2025"}</span>
                        </h5>
                        <h5 className="text-[#70798F]">
                          Duration <span className="font-medium text-[#343E4B]">{plan?.duration || "10 Days"}</span>
                        </h5>
                        <h5 className="text-[#70798F]">
                          Category <span className="font-medium text-[#343E4B]">{plan?.category || "Adventure"}</span>
                        </h5>
                      </div>

                      <div className="">
                        <Button>Publish Now</Button>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="py-5 space-y-3">
                    <p className="text-lg text-[#70798F]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi, at tenetur
                      laudantium veritatis a ipsum voluptatibus. Pariatur, ut, voluptate dolore veniam distinctio
                      voluptates recusandae porro necessitatibus, itaque ducimus nisi...
                      <Button variant="link" className="font-semibold text-base font-roboto px-1">
                        see more
                      </Button>
                    </p>

                    <p className="text-lg text-[#70798F]">
                      Interested tourist points:{" "}
                      <span className="text-[#343E4B] font-medium">Location, Location, Location, Location</span>
                    </p>
                  </div>

                  <div className="py-5 w-[808px] h-[368px] mx-auto rounded-xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=368&width=808"
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
    </div>
  )
}
