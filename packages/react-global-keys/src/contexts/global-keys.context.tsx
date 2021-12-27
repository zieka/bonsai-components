import React, { Component } from 'react';
import { reportKeyBindingConflict } from '../helpers/error.helpers';

export type KeyBinding = {
  key: string;
  action: () => void;
  modifier?: {
    meta?: boolean;
    alt?: boolean;
    ctrl?: boolean;
    shift?: boolean;
  };
};

const defaultModifier = {
  meta: false,
  alt: false,
  ctrl: false,
  shift: false,
};

type StoredKeyBinding = {
  [key: string]: undefined | (() => void);
};

type GlobalKeysContextProps = {
  /**
   * Set to see console messages
   */
  debug?: boolean;
  /**
   * Some OS intercept meta; set this so ctrl can be used as well as meta for
   * meta binds
   */
  useCtrlAsMetaAlternative?: boolean;
};

const initialState = {
  addKeyBinding: (_keyBinding: KeyBinding) => '' as undefined | string,
  keyBindings: {} as StoredKeyBinding,
};

type GlobalKeysContextState = typeof initialState;

export const GlobalKeysContext = React.createContext(initialState);

export class GlobalKeysProvider extends Component<
  GlobalKeysContextProps,
  GlobalKeysContextState
> {
  readonly state: GlobalKeysContextState = {
    ...initialState,
    addKeyBinding: (keyBinding): undefined | string => {
      const id = this.encodeKeyBinding(keyBinding);

      this.setState((prevState) => {
        const existingKeyBindingAction = prevState.keyBindings[id];
        if (existingKeyBindingAction) {
          if (this.props.debug) {
            reportKeyBindingConflict(keyBinding);
          }
          return { keyBindings: prevState.keyBindings };
        }
        return {
          keyBindings: {
            ...prevState.keyBindings,
            [id]: keyBinding.action,
          },
        };
      });
      return id;
    },
  };

  private handleKeyDown = (e: React.KeyboardEvent<Element>): void => {
    const keyId = this.encodeKeyEvent(e);
    const targetBindingAction = this.state.keyBindings[keyId];
    if (targetBindingAction) {
      targetBindingAction();
      e.preventDefault();
    }
  };

  private encodeKeyEvent = (e: React.KeyboardEvent<Element>): string => {
    const { key, metaKey, altKey, ctrlKey, shiftKey } = e;

    return `${key}${this.encodeModifierStates(
      metaKey,
      altKey,
      ctrlKey,
      shiftKey
    )}`;
  };

  private encodeKeyBinding = (keyBinding: KeyBinding): string => {
    const modifier = keyBinding.modifier ? keyBinding.modifier : null;
    if (!modifier) {
      return keyBinding.key;
    }

    return `${keyBinding.key}${this.encodeModifierStates(
      modifier.meta,
      modifier.alt,
      modifier.ctrl,
      modifier.shift
    )}`;
  };

  private encodeModifierStates = (
    meta?: boolean,
    alt?: boolean,
    ctrl?: boolean,
    shift?: boolean
  ) => {
    if (this.props.useCtrlAsMetaAlternative) {
      return `${alt ? 'a' : ''}${ctrl || meta ? 'c' : ''}${shift ? 's' : ''}`;
    }
    return `${meta ? 'm' : ''}${alt ? 'a' : ''}${ctrl ? 'c' : ''}${
      shift ? 's' : ''
    }`;
  };

  private addListener = (): void => {
    document.addEventListener(
      'keydown',
      this.handleKeyDown as unknown as EventListener
    );
  };

  private removeListener = (): void => {
    document.removeEventListener(
      'keydown',
      this.handleKeyDown as unknown as EventListener
    );
  };

  componentDidMount(): void {
    this.addListener();
  }

  componentWillUnmount(): void {
    this.removeListener();
  }

  render(): JSX.Element {
    return (
      <GlobalKeysContext.Provider value={this.state}>
        {this.props.children}
      </GlobalKeysContext.Provider>
    );
  }
}
