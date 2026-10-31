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

const node = h("button", { id: "mon-button", disabled: true }, ["retour"]);
