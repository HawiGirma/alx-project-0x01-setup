import { PostProps } from "@/interfaces/PostProps";

export default function PostCard({ id, title, body, userId }: PostProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <div className="text-sm text-gray-500 mt-4">
        <p>Post ID: {id}</p>
        <p>User ID: {userId}</p>
      </div>
    </div>
  );
}
