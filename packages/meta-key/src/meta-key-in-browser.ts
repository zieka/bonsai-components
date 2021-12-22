import { MetaKeyMap, metaKeyMapDefault } from "./meta-key-map";

declare var navigator: any;

export function metaKeyInBrowser<T = string>(
  metaKeyMapInput?: Partial<MetaKeyMap<T>>
): T {
  const metaKeyMap = { ...metaKeyMapDefault, ...metaKeyMapInput };
  let platform = "";
  if (typeof navigator !== "undefined") {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      platform = navigator.userAgentData.platform;
    } else if (navigator.platform) {
      platform = navigator.platform;
    }
  }

  if (platform.toUpperCase().indexOf("MAC") >= 0) {
    return metaKeyMap.mac as unknown as T;
  }

  if (platform.toUpperCase().indexOf("WIN") >= 0) {
    return metaKeyMap.windows as unknown as T;
  }

  return metaKeyMap.other as unknown as T;
}
