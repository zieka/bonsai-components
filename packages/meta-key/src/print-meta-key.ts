import { metaKeyMapDefault } from './meta-key-map';
import { printMetaKeyInBrowsers } from './print-meta-key-in-browser';
import { printMetaKeyInNode } from './print-meta-key-in-node';

export function printMetaKey<T = string>(metaKeyMap = metaKeyMapDefault): T {
  if (window !== undefined) {
    return printMetaKeyInNode(metaKeyMap);
  }
  return printMetaKeyInBrowsers(metaKeyMap);
}
