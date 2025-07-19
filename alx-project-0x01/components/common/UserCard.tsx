import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Username:</strong> {username}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Address:</strong> {address.street}, {address.suite},{" "}
        {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong> {website}
      </p>
      <p className="text-gray-600">
        <strong>Company:</strong> {company.name} - {company.catchPhrase}
      </p>
    </div>
  );
};

export default UserCard;
