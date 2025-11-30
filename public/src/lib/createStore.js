import { createObserver } from "./createObserver.js";

export const createStore = (initialState) => {
  const { subscribe, notify } = createObserver();

  let state = { ...initialState };
  const setState = (newState) => {
    state = { ...state, ...newState };
    notify();
  };
  const getState = () => ({ ...state });

  return { setState, getState, subscribe };
};
