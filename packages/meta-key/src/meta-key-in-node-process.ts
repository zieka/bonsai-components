import { MetaKeyMap, metaKeyMapDefault } from './meta-key-map';
import { detectOSInNodeProcess } from '@bonsai-components/detect-os';

process.platform === 'darwin';

export function metaKeyInNodeProcess<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };

  return metaKeyMap[detectOSInNodeProcess()] as unknown as T;
}
