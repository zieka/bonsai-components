export const reportKeyBindingConflict = (newKeyBinding) => {
  console.error(
    `Error: Conflict with existing key binding when adding:\n ${JSON.stringify(
      newKeyBinding,
      null,
      2
    )}`
  );
};
