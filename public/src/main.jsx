/** @jsx createVNode */
import { createVNode } from "./lib/createVNode.js";
import { render } from "./render.jsx";
import { router } from "./router.js";
import { createRouter } from "./lib/createRouter.js";
import { HomePage } from "./page/HomePage.jsx";
import { LoginPage } from "./page/LoginPage.jsx";
import { globalStore } from "./stores/globalStore.js";
import { registerGlobalEvents } from "./util/eventUtils.js";
import { ForbiddenError } from "./error/ForbiddenError.js";

const AuthGuard = (validation, CustomError, Component) => {
  return () => {
    const { isLoggedIn } = globalStore.getState();

    if (validation(isLoggedIn)) {
      throw new CustomError();
    }
    return <Component />;
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
