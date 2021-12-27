import React, { FC } from 'react';
import { ComponentStory } from '@storybook/react';
import { GlobalKeysProvider, useGlobalKeyBinding } from '../src';

export default {
  title: 'Example/React-Global-Keys',
};

const KeyBinding1: FC = () => {
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
        alert('ctrl + k');
      },
      modifier: {
        ctrl: true,
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
