/** @jsx createVNode */
import { createVNode } from "./lib/createVNode.js";
import { router } from "./router.js";
import { ForbiddenError } from "./error/ForbiddenError.js";
import { renderElement } from "./lib/renderElement.js";
import { NotFoundPage } from "./page/NotFoundPage.jsx";

export function render() {
  const Page = router.get().getTarget() ?? NotFoundPage;
  const $root = document.querySelector("#root");

  try {
    renderElement(<Page />, $root);
  } catch (error) {
    if (error instanceof ForbiddenError) {
      router.get().push("/");
      return;
    }

    console.error(error);
  }
}
