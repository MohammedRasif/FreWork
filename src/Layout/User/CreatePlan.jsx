"use client"

import { useForm } from "react-hook-form"
import { FiArrowLeft, FiCalendar } from "react-icons/fi"
import { useState } from "react"

const CreatePlan = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const onSubmit = (data) => {
        console.log("Form Data:", data)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }

    const handleSaveForFuture = () => {
        console.log("Saved for future")
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center mb-8">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <FiArrowLeft className="w-5 h-5" />
                        <span className="text-sm">Back</span>
                    </button>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-8">Create a tour plan</h1>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Row 1: Location From & To */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location (From)</label>
                            <input
                                type="text"
                                placeholder="Enter here"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("locationFrom", { required: "Location from is required" })}
                            />
                            {errors.locationFrom && <p className="text-red-500 text-sm mt-1">{errors.locationFrom.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location (To)</label>
                            <input
                                type="text"
                                placeholder="Enter here"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("locationTo", { required: "Location to is required" })}
                            />
                            {errors.locationTo && <p className="text-red-500 text-sm mt-1">{errors.locationTo.message}</p>}
                        </div>
                    </div>

                    {/* Row 2: Starting Date & Ending Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Starting Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Select date"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                    {...register("startingDate", { required: "Starting date is required" })}
                                />
                                <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                            {errors.startingDate && <p className="text-red-500 text-sm mt-1">{errors.startingDate.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Ending Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Select Date"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                    {...register("endingDate", { required: "Ending date is required" })}
                                />
                                <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                            {errors.endingDate && <p className="text-red-500 text-sm mt-1">{errors.endingDate.message}</p>}
                        </div>
                    </div>

                    {/* Row 3: Total Member & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Total Member</label>
                            <input
                                type="number"
                                placeholder="Enter here"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("totalMembers", { required: "Total members is required", min: 1 })}
                            />
                            {errors.totalMembers && <p className="text-red-500 text-sm mt-1">{errors.totalMembers.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                            <input
                                type="text"
                                placeholder="USD"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("budget", { required: "Budget is required" })}
                            />
                            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                        </div>
                    </div>

                    {/* Row 4: Tourist Spots & Upload Picture */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Tourist Spots Name</label>
                            <input
                                type="text"
                                placeholder="Example: Cox's Bazar, Sundarbani, Bandarban"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("touristSpots", { required: "Tourist spots are required" })}
                            />
                            {errors.touristSpots && <p className="text-red-500 text-sm mt-1">{errors.touristSpots.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload a Picture of the Tour Spot (Optional)
                            </label>
                            <div className="flex items-center gap-3">
                                <label className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg cursor-pointer transition-colors border border-gray-300">
                                    <span className="text-sm text-gray-600">Choose file</span>
                                    <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                                </label>
                                <span className="text-sm text-gray-500 flex-1">
                                    {selectedFile ? selectedFile.name : "a.sdjkojadslg.tasd.jpg"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Row 5: Description & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Describe about tour</label>
                            <textarea
                                placeholder="Enter here"
                                rows={4}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                {...register("description", { required: "Description is required" })}
                            />
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <input
                                type="text"
                                placeholder="Ex. Adventure, Family tour etc."
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register("category", { required: "Category is required" })}
                            />
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                        </div>
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-start gap-3 mt-8">
                        <input
                            type="checkbox"
                            id="confirmation"
                            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            {...register("confirmation", { required: "Please confirm the information" })}
                        />
                        <label htmlFor="confirmation" className="text-sm text-gray-600 leading-relaxed">
                            I Confirm This is a Travel request, All the information I provided are valid and don't include any third
                            party.
                        </label>
                    </div>
                    {errors.confirmation && <p className="text-red-500 text-sm mt-1">{errors.confirmation.message}</p>}

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8 pt-6">
                        <button
                            type="button"
                            onClick={handleSaveForFuture}
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Save for Future
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Publish Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePlan
