import { createObserver } from "./createObserver.js";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();
  const getPath = () => window.location.pathname;
  const getTarget = () => routes[getPath()];

  const push = (path) => {
    window.history.pushState(null, null, path);
    notify();
  };
  window.addEventListener("popstate", () => notify());

  return {
    getPath,
    subscribe,
    push,
    getTarget,
  };
};
