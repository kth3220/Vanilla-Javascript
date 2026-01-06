import { setupEventListeners } from "./eventManager.js";
import { createElement } from "./createElement.js";
import { normalizeVNode } from "./normalizeVNode.js";
import { updateElement } from "./updateElement.js";

const OldNodeMap = new WeakMap();

export function renderElement(vNode, container) {
  const oldNode = OldNodeMap.get(container);
  const newNode = normalizeVNode(vNode);

  if (!oldNode) {
    container.appendChild(createElement(newNode));
  } else {
    updateElement(container, newNode, oldNode);
  }

  OldNodeMap.set(container, newNode);
  setupEventListeners(container);
}
