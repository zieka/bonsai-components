import { MetaKeyMap, metaKeyMapDefault } from './meta-key-map';
import { detectOSInBrowser } from '@bonsai-components/detect-os';

export function metaKeyInBrowser<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };

  return metaKeyMap[detectOSInBrowser()] as unknown as T;
}
