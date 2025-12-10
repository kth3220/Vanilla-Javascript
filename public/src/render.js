import { ForbiddenError } from "./error/ForbiddenError.js";
import { NotFoundPage } from "./page/NotFoundPage.js";
import { router } from "./router.js";
import { addEvent } from "./util/eventUtils.js";

addEvent("click", "[data-link]", e => {
  e.preventDefault();
  router.get().push(e.target.href.replace(window.location.origin, ""));
});

export const render = () => {
  const $root = document.getElementById("root");

  try {
    const Page = router.get().getTarget() ?? NotFoundPage;
    console.log(router.get().getTarget());

    $root.innerHTML = Page();
  } catch (e) {
    if (e instanceof ForbiddenError) {
      router.get().push("/");
      return;
    }
    console.log(e);
  }
};
