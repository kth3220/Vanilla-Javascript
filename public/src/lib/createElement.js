import { addEvent } from "./eventManager.js";

export const createElement = vNode => {
  if (vNode === null || vNode === undefined || typeof vNode === "boolean") {
    return document.createTextNode("");
  } else if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(vNode);
  }
  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach(child => fragment.appendChild(createElement(child)));
    return fragment;
  }

  const $el = document.createElement(vNode.type);

  updateAttributes($el, vNode.props ?? {});

  $el.append(...vNode.children.map(createElement));

  return $el;
};

const updateAttributes = ($el, props) => {
  Object.entries(props).forEach(([attr, value]) => {
    if (attr.startsWith("on") && typeof value === "function") {
      const eventType = attr.toLowerCase().slice(2);
      addEvent($el, eventType, value);
    } else if (attr === "className") {
      $el.setAttribute("class", value);
    } else if (attr === "style" && typeof value === "object") {
      Object.assign($el.style, value);
    } else {
      $el.setAttribute(attr, value);
    }
  });
};
