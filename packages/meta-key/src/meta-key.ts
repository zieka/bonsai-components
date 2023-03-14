import { metaKeyMapDefault } from './meta-key-map';
import { MetaKeyMap } from '.';
import { detectOS } from '@bonsai-components/detect-os';

export function metaKey<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };

  return metaKeyMap[detectOS()] as unknown as T;
}
