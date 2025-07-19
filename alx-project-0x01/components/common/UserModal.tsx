import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested fields (address and company)
    if (
      name.startsWith("address.") ||
      name.startsWith("company.") ||
      name.startsWith("address.geo.")
    ) {
      const keys = name.split(".");
      if (keys[0] === "address") {
        if (keys[1] === "geo") {
          setUser((prevUser) => ({
            ...prevUser,
            address: {
              ...prevUser.address,
              geo: {
                ...prevUser.address.geo,
                [keys[2]]: value,
              },
              street: prevUser.address.street,
              suite: prevUser.address.suite,
              city: prevUser.address.city,
              zipcode: prevUser.address.zipcode,
            },
          }));
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            address: {
              ...prevUser.address,
              [keys[1]]: value,
              geo: prevUser.address.geo,
            },
          }));
        }
      } else if (keys[0] === "company") {
        setUser((prevUser) => ({
          ...prevUser,
          company: {
            ...prevUser.company,
            [keys[1]]: value,
          },
        }));
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address fields */}
          <fieldset className="border border-gray-300 rounded p-4">
            <legend className="font-semibold text-gray-700 mb-2">
              Address
            </legend>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                placeholder="Suite"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="City"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                placeholder="Zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <legend className="font-semibold text-gray-700 mt-4 mb-2">
              Geo
            </legend>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Latitude"
                name="address.geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Longitude"
                name="address.geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </fieldset>

          {/* Phone, Website */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="website"
            >
              Website
            </label>
            <input
              id="website"
              name="website"
              type="text"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <fieldset className="border border-gray-300 rounded p-4">
            <legend className="font-semibold text-gray-700 mb-2">
              Company
            </legend>
            <input
              type="text"
              placeholder="Company Name"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              required
            />
            <input
              type="text"
              placeholder="Catch Phrase"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            />
            <input
              type="text"
              placeholder="BS"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </fieldset>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
