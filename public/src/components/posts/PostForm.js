import { globalStore } from "../../stores/globalStore.js";
import { addEvent } from "../../util/eventUtils.js";

const getPostFormHTML = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return `
    <div class="mb-6">
        <form id="post-form">
            <textarea id="post-content" placeholder="내용을 입력하세요" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
            <button id="submit-post" class="mt-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                게시글 등록
            </button>
        </form>
    </div>
    `;
  }
  return `
    <p class="text-gray-500 text-sm mb-4">
        로그인 후 게시글을 작성할 수 있습니다.
    </p>
  `;
};
export const PostForm = ({ isLoggedIn }) => {
  return `
    ${getPostFormHTML({ isLoggedIn })}
  `;
};

const addPost = ({ content }) => {
  const { posts } = globalStore.getState();
  const newPost = {
    id: posts.length + 1,
    content,
    author: globalStore.getState().user.name,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  globalStore.setState({
    posts: [newPost, ...posts],
  });
};

addEvent("submit", "#post-form", e => {
  e.preventDefault();
  const content = document.getElementById("post-content").value;
  if (!content.trim()) {
    alert("내용을 입력해주세요.");
  }
  addPost({ content });
});
