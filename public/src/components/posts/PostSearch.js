import { globalStore } from "../../stores/globalStore.js";
import { addEvent } from "../../util/eventUtils.js";

export const PostSearch = () => {
  const { searchQuery } = globalStore.getState();
  return `
    <div class="flex gap-2 mb-6">
        <form id="post-search-form" class="flex flex-1 w-full gap-2">
            <input 
                type="text" 
                id="post-search-input"
                placeholder="게시글 검색..." 
                value="${searchQuery || ""}"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
            <button class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                검색
            </button>
             <button type="button" id="clear-search" class="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition">
                전체보기
            </button>
        </form>
    </div>
    `;
};

const getSearchPosts = ({ query }) => {
  const { posts } = globalStore.getState();

  if (!query.trim()) {
    globalStore.setState({
      ...globalStore.getState(),
      filteredPosts: null,
      searchQuery: "",
    });
    return;
  }

  const filteredPosts = posts.filter(post => post.content.toLowerCase().includes(query.toLowerCase()));

  globalStore.setState({
    ...globalStore.getState(),
    filteredPosts: filteredPosts,
    searchQuery: query,
  });
};
addEvent("submit", "#post-search-form", e => {
  e.preventDefault();
  const query = document.getElementById("post-search-input").value;

  getSearchPosts({ query });
});

addEvent("click", "#clear-search", () => {
  document.getElementById("post-search-input").value = "";
  getSearchPosts({ query: "" });
});
