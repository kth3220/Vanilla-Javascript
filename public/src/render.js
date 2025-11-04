import { NotFoundPage } from "./page/NotFoundPage.js";
import { router } from "./router.js";
import { addEvent, registerGlobalEvents } from "./util/eventUtils.js";

addEvent("click", "[data-link]", (e) => {
  e.preventDefault();
  router.get().push(e.target.href.replace(window.location.origin, ""));
});

export const render = () => {
  const $root = document.getElementById("root");

  try {
    const Page = router.get().getTarget() ?? NotFoundPage;

    $root.innerHTML = Page();
  } catch (e) {
    console.log(e);
  }
  registerGlobalEvents();
};
