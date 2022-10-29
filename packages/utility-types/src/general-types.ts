/**
 * Construct a type with a set of properties K of type unknown
 */
export type UnknownRecord = Record<string | number | symbol, unknown>;

/**
 * Provide a Type (T) and pick which keys (K) should be made partials (allows undefined)
 */
export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

/**
 * Provide a Type (T) and pick which keys (K) should be made required (not undefined)
 */
export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>;
