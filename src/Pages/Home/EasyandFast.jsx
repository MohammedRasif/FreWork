import React from 'react';
import img1 from "../../assets/img/Rectangle 14305.png";
import img2 from "../../assets/img/Rectangle 14306.png";
import img3 from "../../assets/img/Rectangle 14307.png";
import img4 from "../../assets/img/Rectangle 14327.svg";
import img5 from "../../assets/img/Plane vector.svg";
import { CiHeart } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

import { MapPin, Send, Leaf, Users, ArrowRight } from "lucide-react";

const EasyandFast = () => {
    return (
       <div className='mb-20'>
         <img src={img4} alt="" className='absolute right-0 h-[50vh] -mt-32 ' />
         <img src={img4} alt="" className='absolute left-0 h-[50vh] rotate-180 mt-[110vh]' />
         <div className="font-sans relative flex flex-col items-center justify-center max-w-7xl mx-auto  py-12">
           
            {/* Benefits and Trip Card Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 gap-100">
                {/* Benefits List */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-10">
                        {/* Custom Badge for "Easy and Fast" */}
                        <span className="inline-block mb-3 text-xl text-gray-700 font-medium  ">
                            Easy and Fast
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold leading-tight">
                            WHY USE <br /> VacanzaMyCost.it?
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1748100792/Group_12_ziiomp.svg" alt="" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-gray-800 mb-1 -mt-1">NO COMMISSION</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utma. tortor tempus.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1748100792/Group_7_the57s.svg" alt="" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-gray-800 mb-1 -mt-1">FAST REPLIES</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utma. tortor tempus.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1748100792/Group_11_n4edkj.svg" alt="" />
                            </div>
                            <div>
                                
                                <p className="text-xl font-bold text-gray-800 mb-1 -mt-1">ONLY VERIFIED AGENCIES</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utma. tortor tempus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trip Card */}
                <div className="relative w-full lg:w-auto min-w-[380px] ">
                    <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                        {/* Image Section */}
                        <div className="relative h-64 bg-white overflow-hidden rounded-xl mb-4">
                            <img
                                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/sheep.jpg"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Trip to Greece"
                            />
                            <button className="absolute  right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-white">
                                <CiHeart size={22} className="text-gray-700" />
                            </button>
                        </div>

                        {/* Content Section */}
                        <div className="p-2">
                            {/* Title */}
                            <div className="mb-2">
                                <h3 className="text-2xl font-bold text-gray-800 leading-tight">Trip To Greece</h3>
                                <p className="text-gray-500 text-sm">14-29 June | by Robbin Joseph</p>
                            </div>

                            {/* Icons */}
                            <div className="flex items-center gap-2 mb-6 mt-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Send className="w-5 h-5 text-gray-600" />
                                </div>
                            </div>

                            {/* People Going */}
                            <div className="flex items-center">
                                <Users className="w-5 h-5 text-gray-600 mr-2" />
                                <span className="text-gray-600 text-sm font-medium">24 People Going</span>
                            </div>
                        </div>
                    </div>

                    {/* Ongoing Trip */}
                    <div className="absolute top-[374px] -right-16 bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-[220px]">
                        <div className="flex items-center">
                            <img
                                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/landscapes/architecture-signs.jpg"
                                alt="Profile"
                                className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-white"
                            />
                            <div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
                                    <p className="text-xs font-medium text-green-600">Ongoing</p>
                                </div>
                                <p className="text-md font-semibold text-gray-800">Trip to Rome</p>
                                {/* Custom Progress Bar */}
                                <div className="w-32 h-1.5 bg-gray-200 rounded-full mt-1.5 mb-1">
                                    <div className="h-1.5 bg-purple-500 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500">40% Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Your Agency Section */}
            <div className="flex flex-col lg:flex-row items-center pt-32 lg:pt-52 gap-12">
                {/* Images Section */}
                <div className="relative mr-0 lg:mr-8 w-full lg:w-1/2 h-[400px] lg:h-[50vh]">
                    <img
                        src={img1}
                        alt="Destination 1"
                        className=" w-96 h-[60vh] object-cover rounded-3xl"
                    />
                    <img
                        src={img3}
                        alt="Destination 3"
                        className="w-44 h-52 object-cover rounded-3xl absolute top-44 left-[32vh] z-10"
                    />
                    <img
                        src={img2}
                        alt="Destination 2"
                        className="w-44 h-52 object-cover rounded-3xl absolute -bottom-14 left-[32vh] z-20"
                    />
                    <img
                        src={img5}
                        alt="Plane vector"
                        className="absolute left-80 w-[70vh] -ml-4 -mt-4 -top-[55vh]"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    {/* Custom Badge for "Start Earning" */}
                    <span className="inline-block mb-4 text-gray-700 font-medium text-xl">
                        Start Earning
                    </span>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold leading-tight pb-5">
                           Add Your Agency to <br className="hidden md:block" />
                        <span className="">VacanzaMyCost.it</span>
                        </h1>
                    <div className="space-y-4 text-gray-600">
                        <p className="text-md leading-relaxed">
                            Amet cursus vulputate sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volut pat consectetur mauris nunc congue nisi vitae suscipit in arcu cursus euis mod quis viverra nibh cras pulvinar. Vulputate eu scelerisques felis imperdiet proin fermentum.
                        </p>
                        <p className="text-md leading-relaxed">
                            Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.
                        </p>
                    </div>

                    <div className="space-y-3 mt-6">
                        <a
                            href="#"
                            className="group flex items-center  text-md font-medium "
                        >
                            <IoMdSend  className="w-4 h-4 mr-2 text-blue-600 transition-transform group-hover:translate-x-1 font-bold" />
                            Done adipiscing tristique risus nec feugiat in
                        </a>
                        <a
                            href="#"
                            className="group flex items-center  text-md font-medium transition-colors"
                        >
                            <IoMdSend  className="w-4 h-4 mr-2 text-blue-600 transition-transform group-hover:translate-x-1 font-bold" />
                            Done adipiscing tristique risus nec feugiat in
                        </a>
                        <a
                            href="#"
                            className="group flex items-center  text-md font-medium  transition-colors"
                        >
                            <IoMdSend  className="w-4 h-4 mr-2 text-blue-600 transition-transform group-hover:translate-x-1 font-bold" />
                            Done adipiscing tristique risus nec feugiat in
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default EasyandFast;