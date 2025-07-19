import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="userId"
            value={post.userId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter title"
          />
          <textarea
            name="body"
            value={post.body}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter body"
          />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
