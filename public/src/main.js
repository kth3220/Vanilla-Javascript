import { router } from "../../src/router.js";
import { createRouter } from "./lib/createRouter.js";
import { HomePage } from "./lib/page/HomePage.js";
import { render } from "../../src/render.js";
import { LoginPage } from "./lib/page/LoginPage.js";

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
