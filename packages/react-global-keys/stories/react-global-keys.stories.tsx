import React, { FC, useContext } from 'react';
import {
  GlobalKeysProvider,
  useGlobalKeyBinding,
  GlobalKeysContext,
} from '../src';

export default {
  title: 'Example/React-Global-Keys',
};

const KeyBinding1: FC = () => {
  const { getKeyBindingDescriptors } = useContext(GlobalKeysContext);
  useGlobalKeyBinding([
    {
      key: 'k',
      action: () => {
        alert('meta + k');
      },
      description: 'alert 1',
      modifier: {
        meta: true,
      },
    },
    {
      key: 'k',
      action: () => {
        alert('ctrl + k');
      },
      description: 'alert 2',
      modifier: {
        ctrl: true,
      },
    },
    {
      key: 'K',
      action: () => {
        alert('shift + k');
      },
      modifier: {
        shift: true,
      },
    },
    {
      key: '˚',
      action: () => {
        alert('alt + k');
      },
      modifier: {
        alt: true,
      },
    },
    {
      key: 'k',
      action: () => {
        console.log(JSON.stringify(getKeyBindingDescriptors(), null, 2));
        alert('ctrl + meta + k');
      },
      modifier: {
        ctrl: true,
        meta: true,
      },
    },
    {
      key: '˚',
      action: () => {
        console.log(JSON.stringify(getKeyBindingDescriptors(), null, 2));
        alert('ctrl + meta + alt + k');
      },
      modifier: {
        ctrl: true,
        meta: true,
        alt: true,
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const KeyBindsByKey = () => {
  return (
    <GlobalKeysProvider>
      <KeyBinding1 />
    </GlobalKeysProvider>
  );
};

const KeyBinding2: FC = () => {
  useGlobalKeyBinding([
    {
      key: 'k',
      action: () => {
        alert('meta + k');
      },
      modifier: {
        meta: true,
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const UseCtrlAsMetaAlternative = () => {
  return (
    <GlobalKeysProvider useCtrlAsMetaAlternative debug>
      <KeyBinding2 />
    </GlobalKeysProvider>
  );
};

const KeyBinding3: FC = () => {
  useGlobalKeyBinding([
    {
      key: 'k',
      action: () => {
        alert('meta + k');
      },
      modifier: {
        meta: true,
      },
    },
    {
      key: 'k',
      action: () => {
        alert('meta + k');
      },
      modifier: {
        meta: true,
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const DebugOn = () => {
  return (
    <GlobalKeysProvider debug>
      <KeyBinding3 />
    </GlobalKeysProvider>
  );
};

const KeyBinding4: FC = () => {
  const { getKeyBindingDescriptors } = useContext(GlobalKeysContext);
  useGlobalKeyBinding([
    {
      code: 'KeyK',
      action: () => {
        alert('meta + k');
      },
      description: 'alert 1',
      modifier: {
        meta: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        alert('ctrl + k');
      },
      description: 'alert 2',
      modifier: {
        ctrl: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        alert('shift + k');
      },
      modifier: {
        shift: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        alert('alt + k');
      },
      modifier: {
        alt: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        alert('alt + ctrl + k');
      },
      modifier: {
        alt: true,
        ctrl: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        console.log(JSON.stringify(getKeyBindingDescriptors(), null, 2));
        alert('ctrl + meta + k');
      },
      modifier: {
        ctrl: true,
        meta: true,
      },
    },
    {
      code: 'KeyK',
      action: () => {
        console.log(JSON.stringify(getKeyBindingDescriptors(), null, 2));
        alert('ctrl + meta + alt + k');
      },
      modifier: {
        ctrl: true,
        meta: true,
        alt: true,
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const KeyBindsByCode = () => {
  return (
    <GlobalKeysProvider>
      <KeyBinding4 />
    </GlobalKeysProvider>
  );
};

const KeyBinding5: FC = () => {
  useGlobalKeyBinding([
    {
      code: 'KeyK',
      action: () => {
        alert(`alt + k - code: 'KeyK' + alt: true`);
      },
      description: 'alert 1',
      modifier: {
        alt: true,
      },
    },
    {
      key: 'k',
      action: () => {
        alert(`alt + k - key: '˚' + alt: true`);
      },
      description: 'alert 2',
      modifier: {
        alt: true,
      },
    },
    {
      key: '˚',
      action: () => {
        alert(`alt + k - code: key: '˚'`);
      },
      description: 'alert 3',
      modifier: {
        alt: true,
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const KeyBindsMixed = () => {
  return (
    <GlobalKeysProvider>
      <KeyBinding5 />
    </GlobalKeysProvider>
  );
};
