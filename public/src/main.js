import { render } from "./render.js";
import { router } from "./router.js";
import { createRouter } from "./lib/createRouter.js";
import { HomePage } from "./page/HomePage.js";
import { LoginPage } from "./page/LoginPage.js";
import { globalStore } from "./stores/globalStore.js";
import { registerGlobalEvents } from "./util/eventUtils.js";
import { ForbiddenError } from "./error/ForbiddenError.js";

const AuthGuard = (validation, CustomError, Component) => {
  return () => {
    const { isLoggedIn } = globalStore.getState();
    if (validation(isLoggedIn)) {
      throw new CustomError();
    }
    return Component();
  };
};

router.set(
  createRouter({
    "/": HomePage,
    "/login": AuthGuard(Boolean, ForbiddenError, LoginPage),
  })
);

const main = () => {
  registerGlobalEvents();
  router.get().subscribe(render);
  globalStore.subscribe(render);
  render();
};

main();
