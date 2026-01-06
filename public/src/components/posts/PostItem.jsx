/** @jsx createVNode */
import { createVNode } from "../../lib/createVNode.js";
import { PostDeleteButton } from "./PostDeleteButton.jsx";

export const PostItem = ({ post, showDeleteBtn }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.content}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">{post.author}</span>
            <span className="flex items-center gap-1">{post.createdAt}</span>
          </div>
        </div>
        {showDeleteBtn && <PostDeleteButton postId={post.id} />}
      </div>
    </div>
  );
};
