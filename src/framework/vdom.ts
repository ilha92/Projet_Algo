export type VNode = {
  tag: string;
  props?: Record<string, string | number | boolean | null | undefined>;
  children?: Array<VNode | string | number | null | undefined>;
};

export function h(
  tag: string,
  props: Record<string, any> | null = null,
  children: Array<VNode | string | number | null | undefined> = [],
): VNode {
  return {
    tag,
    props: props ?? {},
    children,
  };
}

export function render(
  vnode: VNode | string | number | null | undefined,
): Node {
  if (vnode == null) {
    return document.createTextNode("");
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(String(vnode));
  }

  const element = document.createElement(vnode.tag);

  for (const [key, value] of Object.entries(vnode.props ?? {})) {
    if (value == null || value === false) continue;

    if (key === "class") {
      element.setAttribute("class", String(value));
      continue;
    }

    element.setAttribute(key, String(value));
  }

  for (const child of vnode.children ?? []) {
    const renderedChild = render(child);
    element.appendChild(renderedChild);
  }

  return element;
}
