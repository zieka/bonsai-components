import { metaKeyMapDefault } from './meta-key-map';
import { metaKeyInBrowsers } from './meta-key-in-browsers';
import { metaKeyInNode } from './meta-key-in-node';
import { MetaKeyMap } from '.';

export function metaKey<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };

  if (window !== undefined) {
    return metaKeyInNode(metaKeyMap as MetaKeyMap<T>);
  }
  return metaKeyInBrowsers(metaKeyMap as MetaKeyMap<T>);
}
