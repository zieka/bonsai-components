<p align="center"><img src="https://raw.githubusercontent.com/zieka/bonsai-components/main/svg/bonsai-logo.svg" height="250px" alt="Bonsai Logo"></p>

# Detect OS

## Intro

This package aims to make detection of the user's operating system easy.

## How to install

```
npm i @bonsai-components/detect-os
```

## How to use

There are 3 different variants:

- `detectOSInBrowser` - handles detection in the browser
- `detectOSInNodeProcess` - handles detection in node
- `detectOS` - universal detection (the most code delivered but handles universal usage)

All variants work the same way `() => 'mac' | 'windows' | 'other'`. There is a `const enum` for typescript users to take advantage of as well.

Common usage:

```ts
import { detectOS } from '@bonsai-components/detect-os';

switch (detectOS()) {
  case 'mac':
    // do something
    break;
  case 'windows':
    // do something
    break;
  case 'other':
    // do something
    break;
}
```
