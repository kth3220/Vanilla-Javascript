import { createStore } from "../lib/createStore.js";
import { userStorage } from "../storages/userStorage.js";

export const globalStore = createStore({
  user: userStorage.get(),
  isLoggedIn: !!userStorage.get(),
  users: [
    { id: 1, name: "김태희", userId: "taehee", password: "1234" },
    { id: 2, name: "김철수", userId: "chulsoo", password: "1234" },
    { id: 3, name: "이영희", userId: "younghee", password: "1234" },
  ],
});
