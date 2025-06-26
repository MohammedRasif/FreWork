"use client";

import { useForm } from "react-hook-form";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  useCreatePlanOneMutation,
  useGetOneDetailQuery,
  useUpdatePlanMutation,
} from "@/redux/features/withAuth";

const CreatePlan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [createPlan, { isLoading: isCreating, isError }] =
    useCreatePlanOneMutation();
  const { state } = useLocation();
  const [update, { isLoading: isUpdateLoading }] = useUpdatePlanMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm();

  // Fetch data only if state.id exists
  const {
    data: oldData,
    isLoading: isFetching,
    refetch,
  } = useGetOneDetailQuery(state?.id, {
    skip: !state?.id,
  });

  // Populate form with data when oldData is available
  useEffect(() => {
    if (state?.id && oldData) {
      setValue("locationFrom", oldData.location_from);
      setValue("locationTo", oldData.location_to);
      setValue("startingDate", oldData.start_date);
      setValue("endingDate", oldData.end_date);
      setValue("totalMembers", oldData.total_members);
      setValue("budget", oldData.budget);
      setValue("touristSpots", oldData.tourist_spots);
      setValue("description", oldData.description);
      setValue("category", oldData.category);
      // Optionally set confirmation if needed
      setValue("confirmation", true); // Adjust based on your logic
    }
  }, [state?.id, oldData, setValue]);

  const onSubmit = async (data, status) => {
    const formData = new FormData();

    formData.append("location_from", data.locationFrom);
    formData.append("location_to", data.locationTo);
    formData.append("start_date", data.startingDate);
    formData.append("end_date", data.endingDate);
    formData.append("total_members", data.totalMembers);
    formData.append("budget", data.budget);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("status", status); // "published" or "draft"
    formData.append("is_confirmed_request", data.confirmation ? true : false);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      state.id
        ? await update({ id: state.id, updates: formData }).unwrap()
        : await createPlan(formData).unwrap();
      console.log(`Plan successfully ${status}!`);
      reset();
    } catch (error) {
      console.error(`Error creating plan (${status}):`, error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Show loading state while fetching data
  if (isFetching && state?.id) {
    return <div className="text-center p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="">
        {/* Header */}
        <div className="flex items-center mb-8">
          <NavLink to="/user">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              <FiArrowLeft className="w-5 h-5" />
              <span className="text-md">Back</span>
            </button>
          </NavLink>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          {state?.id ? "Edit Tour Plan" : "Create a Tour Plan"}
        </h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1: Location From & To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "16px" }}
              >
                Location (From)
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("locationFrom", {
                  required: "Location from is required",
                })}
              />
              {errors.locationFrom && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.locationFrom.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Location (To)
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("locationTo", {
                  required: "Location to is required",
                })}
              />
              {errors.locationTo && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.locationTo.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Starting Date & Ending Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Starting Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Select date"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  {...register("startingDate", {
                    required: "Starting date is required",
                  })}
                />
                <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              {errors.startingDate && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.startingDate.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Ending Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  {...register("endingDate", {
                    required: "Ending date is required",
                  })}
                />
                <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              {errors.endingDate && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.endingDate.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Total Member & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Enter Total Member
              </label>
              <input
                type="number"
                placeholder="Enter here"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("totalMembers", {
                  required: "Total members is required",
                  min: 1,
                })}
              />
              {errors.totalMembers && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.totalMembers.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Budget
              </label>
              <input
                type="text"
                placeholder="USD"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("budget", { required: "Budget is required" })}
              />
              {errors.budget && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Tourist Spots & Upload Picture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Enter Tourist Spots Name
              </label>
              <input
                type="text"
                placeholder="Example: Cox's Bazar, Sundarbani, Bandarban"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("touristSpots", {
                  required: "Tourist spots are required",
                })}
              />
              {errors.touristSpots && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.touristSpots.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Upload a Picture of the Tour Spot (Optional)
              </label>
              <div className="flex items-center bg-white gap-3">
                <label className="bg-gray-200 px-4 py-2 rounded-l-md cursor-pointer transition-colors border border-gray-300">
                  <span className="text-[14px] text-gray-600">Choose file</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </label>
                <span className="text-[14px] text-gray-500 flex-1">
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </span>
              </div>
            </div>
          </div>

          {/* Row 5: Description & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Describe about tour
              </label>
              <textarea
                placeholder="Enter here"
                rows={4}
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-[14px] font-medium text-gray-700 mb-2"
                style={{ fontSize: "15px" }}
              >
                Category
              </label>
              <input
                type="text"
                placeholder="Ex. Adventure, Family tour etc."
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && (
                <p className="text-red-500 text-[14px] mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-start gap-3 mt-8">
            <input
              type="checkbox"
              id="confirmation"
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              {...register("confirmation", {
                required: "Please confirm the information",
              })}
            />
            <label
              htmlFor="confirmation"
              className="text-[15px] text-gray-600 leading-relaxed"
            >
              I Confirm This is a Travel request, All the information I provided
              are valid and don't include any third party.
            </label>
          </div>
          {errors.confirmation && (
            <p className="text-red-500 text-[14px] mt-1">
              {errors.confirmation.message}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6">
            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "draft"))}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              disabled={isCreating}
            >
              {isCreating ? "Saving..." : "Save for Future"}
            </button>
            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "published"))}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              disabled={isCreating}
            >
              {isCreating ? "Publishing..." : "Publish Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlan;
