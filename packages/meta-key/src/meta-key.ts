import { metaKeyMapDefault } from './meta-key-map';
import { metaKeyInBrowser } from './meta-key-in-browser';
import { metaKeyInNodeProcess } from './meta-key-in-node-process';
import { MetaKeyMap } from '.';

export function metaKey<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };

  if (window !== undefined) {
    return metaKeyInNodeProcess(metaKeyMap as MetaKeyMap<T>);
  }
  return metaKeyInBrowser(metaKeyMap as MetaKeyMap<T>);
}
