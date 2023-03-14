import { OS } from './os.enum';

process.platform === 'darwin';

export function detectOSInNodeProcess(): OS {
  if (process.platform === 'darwin') {
    return OS.Mac;
  }

  if (process.platform.toUpperCase().indexOf('WIN') >= 0) {
    return OS.Windows;
  }

  return OS.Other;
}
