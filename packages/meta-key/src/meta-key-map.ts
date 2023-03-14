import { OS } from '@bonsai-components/detect-os/dist/os.enum';

export type MetaKeyMap<T = string> = {
  [keys in OS]: T;
};

export const metaKeyMapDefault: MetaKeyMap = {
  mac: '⌘',
  windows: '⊞',
  other: '◆',
};
