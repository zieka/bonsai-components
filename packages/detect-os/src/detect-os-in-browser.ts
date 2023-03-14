import { OS } from './os.enum';

declare var navigator: any;

export function detectOSInBrowser(): OS {
  let platform = '';
  if (typeof navigator !== 'undefined') {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      platform = navigator.userAgentData.platform;
    } else if (navigator.platform) {
      platform = navigator.platform;
    }
  }

  if (platform.toUpperCase().indexOf('MAC') >= 0) {
    return OS.Mac;
  }

  if (platform.toUpperCase().indexOf('WIN') >= 0) {
    return OS.Windows;
  }

  return OS.Other;
}
