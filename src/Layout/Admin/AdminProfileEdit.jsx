import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import {
  useGetAgencyProfileQuery,
  useUpdateAgencyProfileMutation,
} from "@/redux/features/withAuth";

const AdminProfileEdit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [logoFile, setLogoFile] = useState(null);
  const [logoFileName, setLogoFileName] = useState("");
  const [vatFileName, setVatFileName] = useState("");
  const {
    data: profileData,
    isLoading: isProfileLoading,
    isError,
    error,
  } = useGetAgencyProfileQuery();
  const [updateProfile, { isLoading: isUpdateLoading }] =
    useUpdateAgencyProfileMutation();

  // Prepopulate form with fetched data
  useEffect(() => {
    if (profileData) {
      setValue("agencyName", profileData.agency_name || "");
      setValue("about", profileData.about || "");
      setValue("aim", profileData.our_aim || "");
      setValue("phoneNumber", profileData.contact_phone || "");
      setValue("email", profileData.contact_email || "");
      setValue("website", profileData.website_url || "");
      setValue("location", profileData.address || "");
      setValue("facilities", profileData.facilities_details || []);
      setValue("categories", profileData.service_categories_details || []);
    }
  }, [profileData, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("agency_name", data.agencyName);
      formData.append("about", data.about);
      formData.append("our_aim", data.aim);
      formData.append("contact_phone", data.phoneNumber);
      formData.append("contact_email", data.email);
      formData.append("website_url", data.website);
      formData.append("address", data.location);
      if (logoFile) {
        formData.append("cover_photo", logoFile);
      }
      if (data.facilities) {
        data.facilities.forEach((facility) =>
          formData.append("facilities_details[]", facility)
        );
      }
      if (data.categories) {
        formData.append("service_categories_details[]", data.categories);
      }

      await updateProfile(formData).unwrap();
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile:", err);
      alert("Failed to update profile.");
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setLogoFileName(file.name);
    }
  };

  const handleVatChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setVatFileName(file.name);
    }
  };

  if (isProfileLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error?.message || "Something went wrong"}</div>;

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <NavLink
          to="/admin/profile"
          className="flex items-center space-x-1 cursor-pointer"
        >
          <GoArrowLeft size={22} />
          <h1 className="text-[19px] -mt-1">Back</h1>
        </NavLink>
        <h1 className="text-3xl text-black font-semibold text-center pb-10 pt-5">
          Agency Profile
        </h1>
        <div></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Upload Logo Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Name of your agency
            </label>
            <input
              {...register("agencyName", {
                required: "Agency name is required",
              })}
              type="text"
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
            />
            {errors.agencyName && (
              <span className="text-red-500 text-sm">
                {errors.agencyName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Upload logo
            </label>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md">
              <label className="px-4 py-2 text-gray-700 rounded-l-md cursor-pointer bg-gray-300 hover:bg-gray-200 transition-colors text-base font-semibold">
                Choose file
                <input
                  type="file"
                  className="hidden"
                  onChange={handleLogoChange}
                  accept="image/*"
                />
              </label>
              <span className="text-base text-gray-600">{logoFileName}</span>
            </div>
          </div>
        </div>

        {/* Facilities and Description Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-3">
              Facilities your agency provide
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["breakfast", "lunch", "snacks", "dinner"].map((facility) => (
                <label key={facility} className="flex items-center">
                  <input
                    {...register("facilities")}
                    type="checkbox"
                    value={facility}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                  />
                  <span className="text-base text-gray-700">
                    {facility.charAt(0).toUpperCase() +
                      facility.slice(1).toLowerCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Describe about yourself (Max 100 words)
            </label>
            <textarea
              {...register("about", {
                maxLength: {
                  value: 100,
                  message: "Description cannot exceed 100 words",
                },
              })}
              placeholder="Enter here"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white placeholder:text-base"
            />
            {errors.about && (
              <span className="text-red-500 text-sm">
                {errors.about.message}
              </span>
            )}
          </div>
        </div>

        {/* Aim and VAT ID Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Aim of the Agency
            </label>
            <input
              {...register("aim")}
              type="text"
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Upload VAT ID
            </label>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md">
              <label className="px-4 py-2 text-gray-700 rounded-l-md cursor-pointer bg-gray-300 hover:bg-gray-200 transition-colors text-base font-semibold">
                Choose file
                <input
                  type="file"
                  className="hidden"
                  onChange={handleVatChange}
                  accept="image/*,application/pdf"
                />
              </label>
              <span className="text-base text-gray-600">{vatFileName}</span>
            </div>
          </div>
        </div>

        {/* Other facilities and Categories Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Other facilities (Max 2)
            </label>
            <input
              {...register("otherFacilities")}
              type="text"
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Select categories (Max 5)
            </label>
            <input
              {...register("categories")}
              type="text"
              placeholder="Enter here (comma-separated)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
            />
          </div>
        </div>

        {/* Additional Services and Category Types as Text */}
        <div className="lg:flex items-center space-x-10 space-y-3">
          {[
            "Local Guides and Language Support",
            "24/7 Support during tour",
            "Mountain",
            "Sea",
            "River",
          ].map((item, index) => (
            <p
              key={index}
              className="text-base text-gray-700 bg-white px-5 rounded-full py-[2px]"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Contact information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Phone number (Home)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Ex. 123456789"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent Gibson-white placeholder:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                {...register("website")}
                type="url"
                placeholder="Enter here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                placeholder="Enter here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="user@mail.com"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Profile Handler Name
              </label>
              <input
                {...register("handlerName")}
                type="text"
                placeholder="Enter here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Profile Handler Position
              </label>
              <input
                {...register("handlerPosition")}
                type="text"
                placeholder="Enter here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={isUpdateLoading}
            className={`px-6 py-2 bg-[#3776E2] cursor-pointer font-medium text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-base ${
              isUpdateLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isUpdateLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfileEdit;
