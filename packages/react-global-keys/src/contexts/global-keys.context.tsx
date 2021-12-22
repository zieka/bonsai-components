import React, { Component } from 'react';
import { reportKeyBindingConflict } from '../helpers/error.helpers';

export type KeyBinding = {
  key: string;
  action: () => void;
  modifier: {
    meta?: boolean;
    alt?: boolean;
    ctrl?: boolean;
    shift?: boolean;
  };
};

type StoredKeyBinding = KeyBinding & { id: string };

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
  keyBindings: [] as StoredKeyBinding[],
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
      const existingKeyBinding = this.state.keyBindings.find(
        (kb) => kb.id === id
      );
      if (existingKeyBinding) {
        if (this.props.debug) {
          reportKeyBindingConflict(keyBinding, existingKeyBinding);
        }
        return;
      }
      this.setState((prevState) => ({
        keyBindings: [
          ...prevState.keyBindings,
          { ...keyBinding, id: this.encodeKeyBinding(keyBinding) },
        ],
      }));
      return id;
    },
  };

  private handleKeyDown = (e: React.KeyboardEvent<Element>): void => {
    this.state.keyBindings.forEach((keyBinding) => {
      if (e.key === keyBinding.key) {
        if (
          (keyBinding.modifier.meta && e.metaKey) ||
          (keyBinding.modifier.meta &&
            this.props.useCtrlAsMetaAlternative &&
            e.ctrlKey) ||
          (keyBinding.modifier.alt && e.altKey) ||
          (keyBinding.modifier.ctrl && e.ctrlKey) ||
          (keyBinding.modifier.shift && e.shiftKey)
        ) {
          keyBinding.action();
          e.preventDefault();
        }
      }
    });
  };

  private encodeKeyBinding = (keyBinding: KeyBinding): string => {
    const modifiers = Object.keys(keyBinding.modifier)
      .map((key) => (keyBinding.modifier[key] ? key[0] : ''))
      .join('');
    return `${keyBinding.key}${modifiers}`;
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
