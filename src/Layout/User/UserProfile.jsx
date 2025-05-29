import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon from react-icons
import { NavLink } from 'react-router-dom';

const userData = {
  header: {
    title: "Profile Details",
    invitationCode: "INVITATION CODE: 101020"
  },
  userInfo: {
    imageSrc: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg",
    name: "Alex Tammy",
    role: "DevOps Engineer",
    location: "Ontario, Canada"
  },
  about: {
    title: "About me",
    description: "Ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ype and scrambled.typesetting, remaining essentially It has survived not only five centuries"
  },
  personalInfo: [
    { label: "First Name", value: "Alex" },
    { label: "Last Name", value: "Tammy" },
    { label: "Age", value: "20 years" },
    { label: "Gender", value: "Bangla" },
    { label: "Educational qualification", value: "BSc. in Computer science" },
    { label: "Language", value: "Bangla, English" },
    { label: "Phone (Home)", value: "+1234567890" },
    { label: "Email Address (Business)", value: "alextammy.123@gmail.com" }
  ],
  address: [
    { label: "House No.", value: "63/4" },
    { label: "Road No.", value: "24/1" },
    { label: "City/State", value: "Tammy" },
    { label: "Country", value: "Tammy" },
    { label: "Post Code", value: "8250" },
    { label: "Country", value: "Bangladesh" },
    { label: "Phone number (Home)", value: "163494130358651320", span: 3 }
  ]
};

function UserProfile() {
  return (
    <div className="mx-auto p-4">
      {/* Header Section */}
      <h2 className="text-3xl font-semibold text-gray-800">{userData.header.title}</h2>
      <div className="flex items-center justify-between py-2 space-x-2">
        <h1 className="text-lg text-gray-600">{userData.header.invitationCode}</h1>
       <NavLink to="/user/editProfile">
         <button className="text-blue-500 hover:underline border border-blue-500 rounded-md px-6 py-2 flex items-center cursor-pointer">
          <FaEdit className="mr-2" /> Edit
        </button>
       </NavLink>
      </div>

      {/* User Info and About Me */}
      <div className="flex items-start mb-6 bg-white p-5 rounded-md">
        {/* User Image and Details */}
        <div className="w-2/5 flex space-x-5">
          <div className="w-28 h-28 bg-gray-300 rounded-full mb-2">
            <img src={userData.userInfo.imageSrc} className="w-full h-full rounded-full" alt="" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold text-gray-700">{userData.userInfo.name}</h3>
            <p className="text-sm text-gray-600 pt-2 font-medium">{userData.userInfo.role}</p>
            <p className="text-sm text-gray-600 pt-1 font-medium">{userData.userInfo.location}</p>
          </div>
          <div className="w-px ml-12 bg-gray-300 mx-4"></div>
        </div>
        {/* About Me */}
        <div className="w-4/5 pl-4">
          <h4 className="text-[24px] font-semibold text-gray-800">{userData.about.title}</h4>
          <p className="text-sm text-gray-600">{userData.about.description}</p>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="mb-6 bg-white p-5 rounded-md">
        <h3 className="text-[24px] font-semibold text-gray-800 mb-4">Personal Information</h3>
        <div className="grid grid-cols-3 gap-4">
          {userData.personalInfo.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-md font-medium text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white p-5 rounded-md">
        <h3 className="text-[24px] font-semibold text-gray-800 mb-4">Address</h3>
        <div className="grid grid-cols-3 gap-4">
          {userData.address.map((item, index) => (
            <div key={index} className={item.span ? `col-span-${item.span}` : ""}>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-md font-medium text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;