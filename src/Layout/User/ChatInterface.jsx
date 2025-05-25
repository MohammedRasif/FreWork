
// import { useState } from "react"
// import { Search, Send, ChevronDown, MoreHorizontal, Ellipsis, EllipsisVertical } from "lucide-react"


// export default function ChatInterface() {
//   const [selectedAgency, setSelectedAgency] = useState("WebWaves")
//   const [message, setMessage] = useState("")

//   const agencies = [
//     { name: "WebWaves", logo: "🌊", active: true },
//     { name: "WebVision", logo: "👁️", active: false },
//     { name: "CodeCrafters", logo: "🔧", active: false },
//     { name: "username1335", logo: "🎯", active: false },
//     { name: "QuantumWeb", logo: "⚛️", active: false },
//     { name: "WebGenius", logo: "🧠", active: false },
//     { name: "PixelPioneers", logo: "🎨", active: false },
//     { name: "StudioStream", logo: "🎬", active: false },
//     { name: "CreativeCloud", logo: "☁️", active: false },
//     { name: "WebWorks", logo: "⚙️", active: false },
//     { name: "BrightBridge", logo: "🌉", active: false },
//     { name: "WebSavvy", logo: "💡", active: false },
//   ]

//   const messages = [
//     {
//       id: 1,
//       text: "ype and scrambled it to scramble",
//       sender: "user",
//       time: "10:30",
//     },
//     {
//       id: 2,
//       text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
//       sender: "agent",
//       time: "10:32",
//       avatar: "👨",
//     },
//     {
//       id: 3,
//       text: "ype and scrambled it to",
//       sender: "user",
//       time: "10:35",
//     },
//     {
//       id: 4,
//       text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
//       sender: "agent",
//       time: "10:37",
//     },
//   ]

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
      
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
//         {/* Messages Header */}
        
         
       

//         {/* Search */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="relative">
//             <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
//             <input placeholder="Search chats" className="pl-14 text-sm bg-[#EFF2F6] w-full py-3 rounded-md border-gray-200 border" />
//           </div>
//         </div>

//         {/* Agency List */}
//         <div className="flex-1 overflow-y-auto">
//           {agencies.map((agency) => (
//             <div
//               key={agency.name}
//               className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
//                 agency.active ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
//               }`}
//               onClick={() => setSelectedAgency(agency.name)}
//             >
//               <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg mr-3">
//                 {agency.logo}
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-medium text-gray-900">{agency.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
       

//         {/* Tour Selection and Tips */}
//         <div className="bg-white border-b border-gray-200 p-4 py-[18px] flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-600">Tour:</span>
//             <button variant="ghost" className="text-sm font-medium flex items-center">
//               Dhaka to Cox's Bazar
//               <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//           </div>
//           <div className="flex items-center space-x-1">
//             <button variant="outline" className="text-blue-600 text-sm font-semibold  hover:bg-blue-100 cursor-pointer border border-[#4978E7] rounded-full py-2.5 px-8">
//             Get tips for discount
//           </button>


          
// <div className="dropdown dropdown-end shadow-2xl">
//   <div tabIndex={0} role="button" className=" m-1"><EllipsisVertical size={20} className="cursor-pointer" /></div>
//   <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-46 p-2 shadow-sm border ">
//     <li><a>View Tour Details</a></li>
//     <li><a>Cancel the discussion</a></li>
//   </ul>
// </div>
          
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg) => (
//             <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
//               <div
//                 className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
//               >
//                 {msg.sender === "agent" && (
//                   <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
//                     {msg.avatar}
//                   </div>
//                 )}
//                 <div
//                   className={`px-4 py-2 rounded-lg ${
//                     msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
//                   }`}
//                 >
//                   <p className="text-sm">{msg.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Accept Offer button */}
//           <div className="flex justify-end">
//             <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-full px-6">Accept offer</button>
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="bg-white border-t border-gray-200 p-4">
//           <div className="flex items-center space-x-2">
//             <input
//               placeholder="Start chat"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-1"
//             />
//             <button size="sm" className="bg-blue-500 hover:bg-blue-600">
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import { Search, Send, ChevronDown, EllipsisVertical } from "lucide-react"
import { RxCrossCircled } from "react-icons/rx";
import { VscEye } from "react-icons/vsc"

export default function ChatInterface() {
  const [selectedAgency, setSelectedAgency] = useState("WebWaves")
  const [message, setMessage] = useState("")

  const agencies = [
    { name: "WebWaves", logo: "🌊", active: true },
    { name: "WebVision", logo: "👁️", active: false },
    { name: "CodeCrafters", logo: "🔧", active: false },
    { name: "username1335", logo: "🎯", active: false },
    { name: "QuantumWeb", logo: "⚛️", active: false },
    { name: "WebGenius", logo: "🧠", active: false },
    { name: "PixelPioneers", logo: "🎨", active: false },
    { name: "StudioStream", logo: "🎬", active: false },
    { name: "CreativeCloud", logo: "☁️", active: false },
    { name: "WebWorks", logo: "⚙️", active: false },
    { name: "BrightBridge", logo: "🌉", active: false },
    { name: "WebSavvy", logo: "💡", active: false },
  ]

  const messages = [
    {
      id: 1,
      text: "ype and scrambled it to scramble",
      sender: "user",
      time: "10:30",
    },
    {
      id: 2,
      text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      sender: "agent",
      time: "10:32",
      avatar: "👨",
    },
    {
      id: 3,
      text: "ype and scrambled it to",
      sender: "user",
      time: "10:35",
    },
    {
      id: 4,
      text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      sender: "agent",
      time: "10:37",
    },
    {
      id: 5,
      text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      sender: "user",
      time: "10:37",
    },
     {
      id: 6,
      text: "ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      sender: "agent",
      time: "10:37",
    },
  ]

  return (
    <div className="flex h-[87vh] bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
            <input
              placeholder="Search chats"
              className="pl-14 text-sm bg-[#EFF2F6] w-full py-3 rounded-md border-gray-200 border"
            />
          </div>
        </div>

        {/* Agency List */}
        <div className="flex-1 overflow-y-auto">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                agency.active ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
              }`}
              onClick={() => setSelectedAgency(agency.name)}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg mr-3">
                {agency.logo}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{agency.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col pb-5">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 py-[18px] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Tour:</span>
            <button variant="ghost" className="text-sm font-medium flex items-center">
              {"Dhaka to Cox's Bazar"}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <button
              variant="outline"
              className="text-blue-600 text-sm font-semibold hover:bg-blue-100 cursor-pointer border border-[#4978E7] rounded-full py-2.5 px-8"
            >
              Get tips for discount
            </button>
            <div className="dropdown dropdown-end shadow-2xl">
              <div tabIndex={0} role="button" className="m-1">
                <EllipsisVertical size={20} className="cursor-pointer" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm border"
              >
                <li className="text-[#343E4B] ">
                  <a className="text-sm">
                    <VscEye size={18} />
                    View Tour Details
                </a>
                </li>
                <li className="text-[#343E4B] text-sm">
                  <a className="text-sm">
                    <RxCrossCircled  size={18} />
                    Cancel the discussion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Area with Floating Accept Button */}
        <div className="flex-1 flex flex-col relative">
          {/* Floating Accept Offer Button */}
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-full px-6 py-2 shadow-lg">
              Accept offer
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                    msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  {msg.sender === "agent" && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                      {msg.avatar}
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
     <div className="border-t border-gray-200">
 <div className="shadow-md w-3/4 rounded-full px-5 mx-auto mt-5 ">
          <div className=" border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <input
              placeholder="Start chat"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border rounded-full bg-[#EDF0F6]"
            />
            <button size="sm" className=" p-2 rounded-md text-[#A4AEBB]">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
     </div>
      </div>
    </div>
  )
}
