<p align="center"><img src="https://raw.githubusercontent.com/zieka/bonsai-components/main/svg/bonsai-logo.svg" height="250px" alt="Bonsai Logo"></p>

# Meta Key

## Intro

Meta keys vary based on the platform the user is on. This package aims to
make detection and actions (like printing the meta key as a string) easy.

## How to install

```
npm i @bonsai-components/meta-key
```

## How to use

There are 3 different variants:

- `metaKeyInBrowser` - handles detection in the browser
- `metaKeyInNodeProcess` - handles detection in node
- `metaKey` - universal detection (the most code delivered but handles universal usage)

All variants work the same way, `(metaKeyMap?: MetaKeyMap<T>) => T`. The keys of
`MetaKeyMap` are `mac`, `windows`, and `other`. The values of these fields can
be anything; one of the values will be returned depending on the platform
detection.

```ts
type VoidFunction = () => void;

const alertMetaKeyMap: MetaKeyMap<VoidFunction> = {
  mac: () => console.log('mac'),
  windows: () => console.log('windows'),
  other: () => console.log('other'),
};

const alertConsole: VoidFunction = metaKey<VoidFunction>(alertMetaKeyMap);
alertConsole();
```

If no `MetaKeyMap` is provided, the default maps to a string representing meta key symbol:

```ts
const metaKeyMapDefault: MetaKeyMap<string> = {
  mac: '⌘',
  windows: '⊞',
  other: '◆',
};

const metaKeyAsString: string = metaKey();
```

Additionally, if you pass a partial of the `MetaKeyMap` the missing keys will be
filled in with the default. This is handy when wanting to override one string:

```ts
const metaKeyAsString: string = metaKey({ windows: 'ctrl +' });
```

### Browser

```ts
import { metaKeyInBrowser } from '@bonsai-components/meta-key';
```

### Node Process

```ts
import { metaKeyInNodeProcess } from '@bonsai-components/meta-key';
```

### Universal

```ts
import { metaKey } from '@bonsai-components/meta-key';
```
