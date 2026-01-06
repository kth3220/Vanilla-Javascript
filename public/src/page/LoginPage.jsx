/** @jsx createVNode */
import { createVNode } from "../lib/createVNode.js";
import { userStorage } from "../storages/userStorage.js";
import { globalStore } from "../stores/globalStore.js";

const login = ({ userId, password }) => {
  const { users } = globalStore.getState();
  const user = users.find(e => e.userId === userId && e.password === password);
  if (user) {
    const userData = {
      id: user.id,
      userId: user.userId,
      name: user.name,
    };
    globalStore.setState({
      user: userData,
      isLoggedIn: true,
    });
    userStorage.set(userData);
    return true;
  } else {
    return false;
  }
};

export const LoginPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    if (login({ userId, password })) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">로그인</h1>
            <p class="text-gray-500 mt-2">계정에 로그인하세요</p>
          </div>
          <form id="login-form" class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">
                아이디
              </label>
              <input
                type="text"
                id="userId"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="아이디를 입력하세요"
                required
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <button class="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-200">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};
