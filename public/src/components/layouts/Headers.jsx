/** @jsx createVNode */
import { createVNode } from "../../lib/createVNode.js";
import { router } from "../../router.js";
import { userStorage } from "../../storages/userStorage.js";
import { globalStore } from "../../stores/globalStore.js";

const logout = () => {
  globalStore.setState({
    user: null,
    isLoggedIn: false,
  });
  router.get().push("/login");
  userStorage.reset();
};

const NavItem = ({ isLoggedIn }) => {
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };
  if (isLoggedIn) {
    const { user } = globalStore.getState();
    return (
      <div>
        <span class="text-gray-600">👋 {user.name} </span>
        {"   "}
        <button onClick={handleLogout} class="text-gray-500 hover:text-gray-700">
          로그아웃
        </button>
      </div>
    );
  }
  return (
    <a href="/login" data-link class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      로그인
    </a>
  );
};
export const Headers = ({ isLoggedIn }) => {
  return (
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">✓</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-800">Post Master</h1>
        </div>
        <div class="flex items-center gap-4">
          <NavItem isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
};
