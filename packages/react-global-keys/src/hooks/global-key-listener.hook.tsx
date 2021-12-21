import { useContext, useEffect } from 'react';
import { GlobalKeysContext, KeyBinding } from '../contexts/global-keys.context';

export const useGlobalKeyBinding = (keyBindings: KeyBinding | KeyBinding[]) => {
  const { addKeyBinding } = useContext(GlobalKeysContext);

  useEffect(() => {
    if (Array.isArray(keyBindings)) {
      keyBindings.forEach(addKeyBinding);
    } else {
      addKeyBinding(keyBindings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
