
import { useForm } from "react-hook-form"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";


const AdminProfileEdit = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [logoFileName, setLogoFileName] = useState("")
    const [vatFileName, setVatFileName] = useState("")

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleLogoChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setLogoFileName(file.name)
        }
    }

    const handleVatChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setVatFileName(file.name)
        }
    }

    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <NavLink to="/admin/profile" className="flex items-center space-x-1 cursor-pointer ">
                    <GoArrowLeft size={22} />
                    <h1 className="text-[19px] -mt-1">Back</h1>
                </NavLink >
                <h1 className="text-3xl text-black font-semibold text-center pb-10 pt-5">Agency Profile</h1>
                <div>

                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Upload Logo Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name of your agency */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Name of your agency</label>
                        <input
                            {...register("agencyName", { required: true })}
                            type="text"
                            placeholder="Enter here"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                        />
                    </div>

                    {/* Upload logo */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Upload logo</label>
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md">
                            <label className="px-4 py-2  text-gray-700 rounded-l-md cursor-pointer bg-gray-300 hover:bg-gray-200 transition-colors text-base font-semibold">
                                Choose file
                                <input
                                    {...register("logo")}
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
                    {/* Facilities your agency provide */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-3">Facilities your agency provide</label>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="flex items-center">
                                <input
                                    {...register("facilities")}
                                    type="checkbox"
                                    value="breakfast"
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                                />
                                <span className="text-base text-gray-700">Breakfast</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("facilities")}
                                    type="checkbox"
                                    value="lunch"
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                                />
                                <span className="text-base text-gray-700">Lunch</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("facilities")}
                                    type="checkbox"
                                    value="snacks"
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                                />
                                <span className="text-base text-gray-700">Snacks</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("facilities")}
                                    type="checkbox"
                                    value="dinner"
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                                />
                                <span className="text-base text-gray-700">Dinner</span>
                            </label>
                        </div>
                    </div>

                    {/* Describe about yourself */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Describe about yourself (Max 100 words)
                        </label>
                        <textarea
                            {...register("description", { maxLength: 100 })}
                            placeholder="Enter here"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white placeholder:text-base"
                        />
                    </div>
                </div>

                {/* Aim and VAT ID Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Aim of the Agency */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Aim of the Agency</label>
                        <input
                            {...register("aim")}
                            type="text"
                            placeholder="Enter here"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                        />
                    </div>

                    {/* Upload VAT ID */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Upload VAT ID</label>
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md">
                            <label className="px-4 py-2  text-gray-700 rounded-l-md cursor-pointer bg-gray-300 hover:bg-gray-200 transition-colors text-base font-semibold">
                                Choose file
                                <input
                                    {...register("logo")}
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

                {/* Other facilities and Categories Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Other's facilities */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Other's facilities (Max 2)</label>
                        <input
                            {...register("otherFacilities")}
                            type="text"
                            placeholder="Enter here"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                        />
                    </div>

                    {/* Select categories */}
                    <div>
                        <label className="block text-base font-medium text-gray-700 mb-2">Select categories (Max 5)</label>
                        <input
                            {...register("categories")}
                            type="text"
                            placeholder="Enter here"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                        />
                    </div>
                </div>

                {/* Additional Services and Category Types as Text */}
                <div className=" lg:flex items-center space-x-10 space-y-3">


                    <p className="text-base text-gray-700 bg-white px-5 rounded-full  py-[2px]">Local Guides and Language Support</p>
                    <p className="text-base text-gray-700 bg-white px-5 rounded-full  py-[2px]">24/7 Support during tour</p>





                    <p className="text-base text-gray-700 bg-white px-5 rounded-full  py-[2px]">Mountain</p>
                    <p className="text-base text-gray-700 bg-white px-5 rounded-full  py-[2px]">Sea</p>
                    <p className="text-base text-gray-700 bg-white px-5 rounded-full  py-[2px]" >River</p>

                </div>

                {/* Contact Information Section */}
                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone number */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Phone number (Home)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                                />
                            </div>
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Website</label>
                            <input
                                {...register("website")}
                                type="url"
                                placeholder="Enter here"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Location</label>
                            <input
                                {...register("location")}
                                type="text"
                                placeholder="Enter here"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                        {/* Profile Handler Name */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Profile Handler Name</label>
                            <input
                                {...register("handlerName")}
                                type="text"
                                placeholder="Enter here"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder:text-base"
                            />
                        </div>

                        {/* Profile Handler Position */}
                        <div>
                            <label className="block text-base font-medium text-gray-700 mb-2">Profile Handler Position</label>
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
                        className="px-6 py-2 bg-[#3776E2] cursor-pointer font-medium text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-base"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminProfileEdit
