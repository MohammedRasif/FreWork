import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

function UserEditProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phonePersonal: '',
    describeYourself: '',
    profession: '',
    education: '',
    gender: '',
    age: '',
    language: '',
    picture: null,
    houseNo: '',
    roadNo: '',
    townCity: '',
    postalCode: '',
    country: '',
    phoneHome: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, picture: file });
  };

  return (
    <div className="p-4 font-semibold">
      <div className="mb-5">
        <NavLink
          to="/user/profile"
          className="inline-flex items-center px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          <IoArrowBack className="h-5 w-5 mr-2 text-gray-700" />
          Back
        </NavLink>
      </div>
      <h1 className="text-3xl pb-5">Welcome, <span className="font-normal">Edit Profile Details</span></h1>
      <div className="grid grid-cols-3 gap-5 mb-4">
        <div>
          <label className="block text-gray-700 font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Phone number (personal)</label>
          <input
            type="tel"
            name="phonePersonal"
            value={formData.phonePersonal}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Describe yourself in short</label>
          <input
            type="text"
            name="describeYourself"
            value={formData.describeYourself}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Profession</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Upload picture</label>
          <div className="flex items-center space-x-2 p-1 h-[42px] border border-gray-200 rounded-sm bg-white">
            <label className="inline-block px-4 py-1 bg-gray-100 border rounded cursor-pointer">
              Choose file
              <input
                type="file"
                name="picture"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <span className="text-gray-500">
              {formData.picture ? formData.picture.name : 'a:sdlkjgjasdlg:lasd.jpg'}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-5">
        <h3 className="text-[24px] font-semibold text-gray-700">Address</h3>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <label className="block text-gray-700 font-medium">House No.</label>
            <input
              type="text"
              name="houseNo"
              value={formData.houseNo}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Road No</label>
            <input
              type="text"
              name="roadNo"
              value={formData.roadNo}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Town/city</label>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Postal code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone number (Home)</label>
            <input
              type="tel"
              name="phoneHome"
              value={formData.phoneHome}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              placeholder="Enter here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEditProfile;