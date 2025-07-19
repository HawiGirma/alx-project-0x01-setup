import { PostProps } from "@/interfaces/PostProps";

export default function PostCard({ id, title, body }: PostProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <span className="text-xs text-gray-400 block mt-2">Post ID: {id}</span>
    </div>
  );
}
