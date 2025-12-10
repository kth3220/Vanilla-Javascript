import { globalStore } from "../../stores/globalStore.js";

export const PostHeaders = () => {
  const { posts } = globalStore.getState();
  const totalPosts = posts.length;
  const todayPosts = posts.filter(post => post.createdAt === new Date().toISOString().slice(0, 10)).length;
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div class="flex items-center justify-between">
            <div>
                <p class="text-gray-500 text-sm">전체 게시글</p>
                <p class="text-2xl font-bold text-gray-800">${totalPosts}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl">📝</span>
            </div>
            </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div class="flex items-center justify-between">
            <div>
                <p class="text-gray-500 text-sm">오늘 작성</p>
                <p class="text-2xl font-bold text-green-600">${todayPosts}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl">✨</span>
            </div>
            </div>
        </div>
    </div>
  `;
};
