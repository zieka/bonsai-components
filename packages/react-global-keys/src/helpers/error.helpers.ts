export const reportKeyBindingConflict = (newKeyBinding, existingKeyBinding) => {
  console.error(
    `adding key binding failed:\n ${JSON.stringify(
      newKeyBinding,
      null,
      2
    )}\n Conflicts with:\n ${JSON.stringify(existingKeyBinding, null, 2)}`
  );
};
