import React, { FC, useContext } from 'react';
import { ComponentStory } from '@storybook/react';
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
    },
    {
      key: '˚',
      action: () => {
        alert('alt + k');
      },
    },
    {
      key: 'k',
      action: () => {
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
      },
    },
  ]);

  return <div>Try out some keybinds!</div>;
};

export const KeyBinds = () => {
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
