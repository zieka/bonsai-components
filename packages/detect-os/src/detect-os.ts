import { detectOSInBrowser } from './detect-os-in-browser';
import { detectOSInNodeProcess } from './detect-os-in-node-process';
import { OS } from './os.enum';

export function detectOS(): OS {
  if (window !== undefined) {
    return detectOSInBrowser();
  }
  return detectOSInNodeProcess();
}
