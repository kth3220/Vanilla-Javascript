import { render } from "./render.js";
import { router } from "./router.js";
import { createRouter } from "./lib/createRouter.js";
import { HomePage } from "./page/HomePage.js";
import { LoginPage } from "./page/LoginPage.js";

router.set(
  createRouter({
    "/": HomePage,
    "/login": LoginPage,
  })
);

const main = () => {
  router.get().subscribe(render);
  render();
};

main();
