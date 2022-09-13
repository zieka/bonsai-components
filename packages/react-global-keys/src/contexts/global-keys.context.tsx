import React, { Component } from 'react';
import { reportKeyBindingConflict } from '../helpers/error.helpers';
import { ComponentWithChildren } from '../helpers/utility-types';

const DELIMITER = '#!';

export type Modifiers = {
  meta?: boolean;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
};

export type BindingByKey = {
  key: string;
  action: (e?: React.KeyboardEvent<Element>) => void;
  description?: string;
  modifier?: Modifiers;
};

export type BindingByCode = {
  code: string;
  action: (e?: React.KeyboardEvent<Element>) => void;
  description?: string;
  modifier?: Modifiers;
};

export type KeyBinding = BindingByKey | BindingByCode;

export type BindingDescriptorByKey = Pick<
  BindingByKey,
  'key' | 'description' | 'modifier'
>;
export type BindingDescriptorByCode = Pick<
  BindingByCode,
  'code' | 'description' | 'modifier'
>;

export type KeyBindingDescriptor =
  | BindingDescriptorByKey
  | BindingDescriptorByCode;

const hasCode = (
  descriptor: KeyBindingDescriptor
): descriptor is BindingDescriptorByCode => {
  return Boolean((descriptor as BindingDescriptorByCode).code);
};

export type GlobalKeysContextProps = {
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
  getKeyBindingDescriptors: () => [] as KeyBindingDescriptor[],
  keyBindings: new Map<string, KeyBinding>(),
};

export type GlobalKeysContextState = typeof initialState;

export const GlobalKeysContext = React.createContext(initialState);

export class GlobalKeysProvider extends ComponentWithChildren<
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
        newKeyBindingsMap.set(id, keyBinding);

        return { keyBindings: newKeyBindingsMap };
      });

      return id;
    },
    getKeyBindingDescriptors: (): KeyBindingDescriptor[] => {
      return Array.from(this.state.keyBindings.values()).map((e) => {
        if (hasCode(e)) {
          return {
            code: e.code,
            modifier: e.modifier,
            description: e.description || '',
          };
        } else {
          return {
            key: e.key,
            modifier: e.modifier,
            description: e.description || '',
          };
        }
      });
    },
  };

  private handleKeyDown = (e: React.KeyboardEvent<Element>): void => {
    const [keyId, codeId] = this.encodeKeyEvent(e);
    console.log(JSON.stringify({ keyId, codeId }, null, 2));
    // for now only one binding will win
    if (this.state.keyBindings.has(codeId)) {
      return this.state.keyBindings.get(codeId)!.action(e);
    }
    if (this.state.keyBindings.has(keyId)) {
      return this.state.keyBindings.get(keyId)!.action(e);
    }
  };

  private encodeKeyEvent = (
    e: React.KeyboardEvent<Element>
  ): [string, string] => {
    const { key, code, metaKey, ctrlKey, altKey, shiftKey } = e;

    return [
      `${key}${this.encodeModifierStates(metaKey, ctrlKey, altKey, shiftKey)}`,
      `${code}${this.encodeModifierStates(metaKey, ctrlKey, altKey, shiftKey)}`,
    ];
  };

  private encodeKeyBinding = (keyBinding: KeyBinding): string => {
    const modifier = keyBinding.modifier
      ? (keyBinding.modifier as Modifiers)
      : null;
    let identifier;

    if (hasCode(keyBinding)) {
      identifier = keyBinding.code;
    } else {
      identifier = keyBinding.key;
    }

    if (!modifier) {
      return `${identifier}${DELIMITER}`;
    }

    return `${identifier}${this.encodeModifierStates(
      modifier.meta,
      modifier.ctrl,
      modifier.alt,
      modifier.shift
    )}`;
  };

  private encodeModifierStates = (
    meta?: boolean,
    ctrl?: boolean,
    alt?: boolean,
    shift?: boolean
  ) => {
    if (this.props.useCtrlAsMetaAlternative) {
      return `${DELIMITER}${ctrl || meta ? 'c' : ''}${alt ? 'a' : ''}${
        shift ? 's' : ''
      }`;
    }
    return `${DELIMITER}${meta ? 'm' : ''}${ctrl ? 'c' : ''}${alt ? 'a' : ''}${
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
