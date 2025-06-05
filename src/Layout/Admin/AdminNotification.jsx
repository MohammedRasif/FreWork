import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdminNotification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "You got a review from user for 'Dhaka to Chattagong tour'", timestamp: "Today" },
    { id: 2, text: "You have a message request by a user for 'Dhaka to Bankok tour'", timestamp: "4 days ago" },
    { id: 3, text: "You have a offer 'confirmation request' from user 'Mr. Banik' for 'Dhaka to Bankok tour'", timestamp: "4 days ago" },
    { id: 4, text: "5 New request published in last 2 hours", timestamp: "Today" },
    { id: 5, text: "You got a review from user for 'Dhaka to Chattagong tour'", timestamp: "Today" },
    { id: 6, text: "You have a message request by a user for 'Dhaka to Bankok tour'", timestamp: "4 days ago" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNotificationId, setSelectedNotificationId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedNotificationId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setNotifications(notifications.filter((item) => item.id !== selectedNotificationId));
    setShowPopup(false);
    setSelectedNotificationId(null);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setSelectedNotificationId(null);
  };

  // Function to split text and highlight quoted parts
  const renderHighlightedText = (text) => {
    const parts = text.split(/('[^']*')/); // Split by quoted text, including the quotes
    return parts.map((part, index) => {
      if (part.startsWith("'") && part.endsWith("'")) {
        // Remove the quotes and highlight the text in blue
        const highlightedText = part.slice(1, -1);
        return (
          <span key={index} className="text-blue-500">
            {highlightedText}
          </span>
        );
      }
      return <span key={index} className="text-gray-700">{part}</span>;
    });
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center sm:text-left">
          All Notifications
        </h1>
        <a href="#" className="text-sm sm:text-md underline text-center sm:text-right">
          Clear all
        </a>
      </div>

      {/* Notifications List */}
      <div className="space-y-2">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
          >
            <p className="text-sm sm:text-md text-gray-700">
              {renderHighlightedText(item.text)}
            </p>
            <div className="flex items-center justify-between sm:justify-end space-x-2">
              <span className="text-gray-500 text-sm sm:text-md">{item.timestamp}</span>
              <button
                onClick={() => handleDeleteClick(item.id)}
                className="text-red-500 hover:text-red-700 border border-gray-300 rounded-sm cursor-pointer p-1 sm:p-[2px]"
              >
                <RiDeleteBin6Line size={24} sm:size={28} className="py-1 px-[2px]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">
              Are you sure you want to delete this notification?
            </h2>
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleCancelDelete}
                className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer w-full sm:w-auto"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNotification;