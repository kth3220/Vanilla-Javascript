import { globalStore } from "../../stores/globalStore.js";
import { addEvent } from "../../util/eventUtils.js";

const getDisplayPosts = () => {
  const { posts, filteredPosts, user } = globalStore.getState();
  const displayPosts = filteredPosts !== null ? filteredPosts : posts;

  return (
    displayPosts
      ?.map(post => {
        const showDeleteBtn = user?.name === post.author;

        return `
    <div class="p-4 hover:bg-gray-50 transition cursor-pointer">
        <div class="flex items-start gap-4">
            <div class="flex-1">
                <p class="text-gray-600 text-sm mb-2 line-clamp-2">${post.content}</p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                    <span class="flex items-center gap-1">${post.author}</span>
                    <span class="flex items-center gap-1">${post.createdAt}</span>
                </div>
            </div>
            ${
              showDeleteBtn
                ? `
                <button 
                    class="delete-post-btn p-2 hover:bg-red-50 rounded-lg transition group"
                    data-post-id="${post.id}"
                    aria-label="삭제"
                >
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            `
                : ""
            }
        </div>
    </div>
    `;
      })
      .join("") || ""
  );
};

const deletePost = postId => {
  const currentState = globalStore.getState();
  const { posts, filteredPosts } = currentState;

  const updatedPosts = posts.filter(post => post.id !== postId);

  const updatedFilteredPosts = filteredPosts ? filteredPosts.filter(post => post.id !== postId) : null;

  globalStore.setState({
    ...currentState,
    posts: updatedPosts,
    filteredPosts: updatedFilteredPosts,
  });
};
addEvent("click", ".delete-post-btn", e => {
  e.preventDefault();
  e.stopPropagation();

  const btn = e.target.closest(".delete-post-btn");
  const postId = parseInt(btn.dataset.postId);

  if (confirm("정말 삭제하시겠습니까?")) {
    deletePost(postId);
  }
});

export const PostList = () => {
  return `
    <div class="divide-y divide-gray-200">
        ${getDisplayPosts()}
    </div>  
  `;
};
