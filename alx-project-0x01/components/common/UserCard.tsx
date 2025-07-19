import React from "react";
import { UserProps } from "@/interfaces/UserProps";

const UserCard: React.FC<UserProps> = ({ id, name, username, email }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-500 text-sm">{email}</p>
      <p className="text-gray-400 text-xs mt-2">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
