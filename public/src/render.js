import { NotFoundPage } from "../public/src/lib/page/NotFoundPage.js";
import { router } from "./router.js";

export const render = () => {
  const $root = document.getElementById("root");

  try {
    const Page = router.get().getTarget() ?? NotFoundPage;

    $root.innerHTML = Page();
  } catch (e) {
    console.log(e);
  }
};
