/** @jsx createVNode */
import { createVNode } from "../../lib/createVNode.js";

const deletePost = postId => {
  const { posts, filteredPosts, ...restState } = globalStore.getState();

  globalStore.setState({
    ...restState,
    posts: posts.filter(post => post.id !== postId),
    filteredPosts: filteredPosts ? filteredPosts.filter(post => post.id !== postId) : null,
  });
};

export const PostDeleteButton = ({ postId }) => {
  const handleDelete = e => {
    e.preventDefault();
    e.stopPropagation();

    if (confirm("정말 삭제하시겠습니까?")) {
      deletePost(postId);
    }
  };

  return (
    <button onClick={handleDelete} className="delete-post-btn p-2 hover:bg-red-50 rounded-lg transition text-2xl" aria-label="삭제">
      🗑️
    </button>
  );
};
