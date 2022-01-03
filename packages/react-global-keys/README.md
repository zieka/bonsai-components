<p align="center"><img src="https://raw.githubusercontent.com/zieka/bonsai-components/main/svg/bonsai-logo.svg" height="250px" alt="Bonsai Logo"></p>

# React Global Keys

## Install

```
npm i @bonsai-components/react-global-keys
```

## How to Use

### Add the context

There is a context that will store all key mappings and their actions. You will
need to wrap your app in this context or the proportion of your app that needs
global keys.

```tsx
import { GlobalKeysProvider } from '@bonsai-components/react-global-keys';

<GlobalKeysProvider>
  <YourAwesomeApp />
</GlobalKeysProvider>;
```

When using the `meta` key modifier this is not always the best experience
for users using browsers that do not support it or OS that intercept the meta
key. For these reasons, you can specify `useCtrlAsMetaAlternative` so `meta` or
`ctrl` modifier can be used for the binding:

```tsx
<GlobalKeysProvider useCtrlAsMetaAlternative>
```

Additionally, you can activate debugging mode to get extra console statements
using the debug prop:

```tsx
<GlobalKeysProvider debug>
```

### Add some key mappings

Now in any component use the `useGlobalKeyBinding` hook to add some key mappings:

```tsx
import { useGlobalKeyBinding } from '@bonsai-components/react-global-keys';

const awesomeAction = (e) => {
  //... your action code here
};

useGlobalKeyBinding({
  key: 'k',
  action: awesomeAction,
  modifier: { meta: true },
});
```

`useGlobalKeyBinding` hook also accepts an array of key mappings:

```tsx
useGlobalKeyBinding([
  {
    key: 'k',
    action: focusSearch,
    modifier: { meta: true },
  },
  {
    key: '/',
    action: focusSearchIfNotInInput,
  },
]);
```

### Key Support

Currently supporting `event.key` which means to use modifiers like `shift` and
`alt` you will need to pass the specific key character generated. For example,
to create a key bind for `shift + m` you would provide `key: 'M'`
