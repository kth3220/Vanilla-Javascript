import { Headers } from "../components/layouts/Headers.js";
import { PostForm } from "../components/posts/PostForm.js";
import { PostHeaders } from "../components/posts/PostHeaders.js";
import { PostList } from "../components/posts/PostList.js";
import { PostSearch } from "../components/posts/PostSearch.js";
import { globalStore } from "../stores/globalStore.js";

export const HomePage = () => {
  const { isLoggedIn } = globalStore.getState();
  return `
    <div class="min-h-screen bg-gray-50">
      ${Headers({ isLoggedIn })}
      <main class="max-w-6xl mx-auto px-4 py-8">

        <!-- 상단 통계 -->
        ${PostHeaders({ isLoggedIn })}

        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
          ${PostForm({ isLoggedIn })}

          <!-- 검색 영역 -->
          ${PostSearch()}
        </div>

        <!-- 게시글 목록 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            ${PostList()}
        </div>
      </main>
    </div>
  `;
};
