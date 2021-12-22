export type MetaKeyMap<T = string> = {
  mac: T;
  windows: T;
  other: T;
};

export const metaKeyMapDefault: MetaKeyMap = {
  mac: "⌘",
  windows: "⊞",
  other: "◆",
};
