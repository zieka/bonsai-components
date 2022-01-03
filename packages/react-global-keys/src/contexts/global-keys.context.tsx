import React, { Component } from 'react';
import { reportKeyBindingConflict } from '../helpers/error.helpers';

export type KeyBinding = {
  key: string;
  action: (e?: React.KeyboardEvent<Element>) => void;
  description?: string;
  modifier?: {
    meta?: boolean;
    ctrl?: boolean;
  };
};

type ActionDescriptor = {
  action: (e?: React.KeyboardEvent<Element>) => void;
  description?: string;
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
  keyBindings: new Map<string, ActionDescriptor>(),
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
        const existingKeyBindingAction = prevState.keyBindings.has(id);
        if (existingKeyBindingAction) {
          if (this.props.debug) {
            reportKeyBindingConflict(keyBinding);
          }
          return { keyBindings: prevState.keyBindings };
        }
        const newKeyBindingsMap = new Map(prevState.keyBindings);
        newKeyBindingsMap.set(id, {
          action: keyBinding.action,
          description: keyBinding.description,
        });

        return { keyBindings: newKeyBindingsMap };
      });

      return id;
    },
  };

  private handleKeyDown = (e: React.KeyboardEvent<Element>): void => {
    const keyId = this.encodeKeyEvent(e);
    const targetBindingAction = this.state.keyBindings.get(keyId)?.action;
    if (targetBindingAction) {
      targetBindingAction(e);
      e.preventDefault();
    }
  };

  private encodeKeyEvent = (e: React.KeyboardEvent<Element>): string => {
    const { key, metaKey, ctrlKey } = e;

    return `${key}${this.encodeModifierStates(metaKey, ctrlKey)}`;
  };

  private encodeKeyBinding = (keyBinding: KeyBinding): string => {
    const modifier = keyBinding.modifier ? keyBinding.modifier : null;
    if (!modifier) {
      return keyBinding.key;
    }

    return `${keyBinding.key}${this.encodeModifierStates(
      modifier.meta,
      modifier.ctrl
    )}`;
  };

  private encodeModifierStates = (meta?: boolean, ctrl?: boolean) => {
    if (this.props.useCtrlAsMetaAlternative) {
      return `${ctrl || meta ? 'c' : ''}`;
    }
    return `${meta ? 'm' : ''}${ctrl ? 'c' : ''}`;
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
