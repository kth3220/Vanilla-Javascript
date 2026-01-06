/** @jsx createVNode */
import { createVNode } from "../lib/createVNode.js";
import { Headers } from "../components/layouts/Headers.jsx";
import { PostForm } from "../components/posts/PostForm.jsx";
import { PostHeaders } from "../components/posts/PostHeaders.jsx";
import { PostList } from "../components/posts/PostList.jsx";
import { PostSearch } from "../components/posts/PostSearch.jsx";
import { globalStore } from "../stores/globalStore.js";

export const HomePage = () => {
  const { isLoggedIn } = globalStore.getState();
  return (
    <div class="min-h-screen bg-gray-50">
      <Headers />
      <main class="max-w-6xl mx-auto px-4 py-8">
        <PostHeaders />
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
          <PostForm isLoggedIn={isLoggedIn} />
          <PostSearch />
        </div>
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <PostList />
        </div>
      </main>
    </div>
  );
};
