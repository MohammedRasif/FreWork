import { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function ChatInterface() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAgencyId, setSelectedAgencyId] = useState(null);

  const agencies = [
    { id: "A001", name: "WebWaves", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/cld-sample.jpg", active: true },
    { id: "A002", name: "WebVision", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529178/samples/man-portrait.jpg", active: false },
    { id: "A003", name: "CodeCrafters", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529177/samples/smile.jpg", active: false },
    { id: "A004", name: "username1335", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529173/samples/two-ladies.jpg", active: false },
    { id: "A005", name: "QuantumWeb", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/boy-snow-hoodie.jpg", active: false },
    { id: "A006", name: "WebGenius", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/smiling-man.jpg", active: false },
    { id: "A007", name: "PixelPioneers", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529168/samples/people/kitchen-bar.jpg", active: false },
    { id: "A008", name: "StudioStream", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/cld-sample.jpg", active: false },
    { id: "A009", name: "CreativeCloud", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529178/samples/man-portrait.jpg", active: false },
    { id: "A010", name: "WebWorks", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529177/samples/smile.jpg", active: false },
    { id: "A011", name: "BrightBridge", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529173/samples/two-ladies.jpg", active: false },
    { id: "A012", name: "WebSavvy", image: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/boy-snow-hoodie.jpg", active: false },
  ];

  // Update selectedAgencyId based on the current route
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const agencyIdFromPath = pathParts[pathParts.length - 1];

    if (pathParts.includes("chat") && agencies.some(agency => agency.id === agencyIdFromPath)) {
      setSelectedAgencyId(agencyIdFromPath);
    } else {
      setSelectedAgencyId(null);
    }
  }, [location.pathname]);

  const handleAgencyClick = (agency) => {
    setSelectedAgencyId(agency.id);
    navigate(`/user/chat/${agency.id}`, { state: { agency } });
  };

  const isBaseRoute = location.pathname === "/user/chat";

  return (
    <div className="  roboto">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Messages</h1>
      <div className="flex" style={{ height: "80vh" }}>
        {/* Sidebar */}
        <div className="w-1/4 rounded-l-lg bg-gray-50 dark:bg-[#1E232E] border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="m-3 relative">
            <input
              type="text"
              placeholder="Search chats"
              className="border border-gray-300 rounded-md w-full pl-10 py-[10px]"
            />
            <IoMdSearch  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full object-cover" />

          </div>

          {/* Agency List */}
          <div className="overflow-y-auto flex-1">
            {agencies.map((agency) => (
              <div
                key={agency.id}
                onClick={() => handleAgencyClick(agency)}
                className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#252c3b] text-gray-700 dark:text-gray-200 transition-colors border-b border-gray-200 ${
                  selectedAgencyId === agency.id ? "bg-blue-100 dark:bg-[#2F80A9]" : ""
                }`}
              >
                <img
                  src={agency.image}
                  alt={agency.name}
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />
                <div className="relative">
                  <span className="font-medium text-[15px]">{agency.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="w-3/4 bg-white dark:bg-[#252c3b] rounded-r-lg">
          {isBaseRoute ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Select a Chat to Start Messaging
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Choose an agency to begin your conversation.
                </p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}