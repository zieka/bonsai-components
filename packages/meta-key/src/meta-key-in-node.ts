import { MetaKeyMap, metaKeyMapDefault } from './meta-key-map';

process.platform === 'darwin';

export function metaKeyInNode<T = string>(metaKeyMapInput?: MetaKeyMap<T>): T {
  const metaKeyMap = metaKeyMapInput || metaKeyMapDefault;

  if (process.platform === 'darwin') {
    return metaKeyMap.mac as unknown as T;
  }

  if (process.platform.toUpperCase().indexOf('WIN') >= 0) {
    return metaKeyMap.windows as unknown as T;
  }

  return metaKeyMap.other as unknown as T;
}
