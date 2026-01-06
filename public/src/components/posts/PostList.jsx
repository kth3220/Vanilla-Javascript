/** @jsx createVNode */
import { createVNode } from "../../lib/createVNode.js";
import { globalStore } from "../../stores/globalStore.js";
import { PostItem } from "./PostItem.jsx";

export const PostList = () => {
  const { posts, filteredPosts, user } = globalStore.getState();
  const displayPosts = filteredPosts ?? posts;

  return (
    <div className="divide-y divide-gray-200">
      {displayPosts?.map(post => (
        <PostItem key={post.id} post={post} showDeleteBtn={user?.name === post.author} />
      ))}
    </div>
  );
};
