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

/**
 * Define a pure function through generics for readability purposes
 */
export interface PureFunction<P, R> {
  (props: P): R;
}

/**
 * @deprecated - consider OmitPattern
 * Provide an object type and a string to get a new type that filters out all keys that contain the string
 */
export type FilterOutKeyLike<T,K> = {
  [Key in keyof T as Key extends `${infer Start}${K & string}${infer End}` ? never : Key]: T[Key]
}


/**
 * Omits all keys matching provided patterns
 * Usage:
 *
 * type NewType = OmitPattern<MyType, 'test' | 'fix'>;
 */
export type OmitPattern<T, P extends string> = Omit<T, {
  [K in keyof T]: K extends `${string}${P & string}${string}` ? K : never
}[keyof T]>;

/**
 * Picks all keys that match any of the provided patterns.
 * Usage:
 *
 * type NewType = PickPattern<MyType, 'test' | 'fix'>;
 */
export type PickPattern<T, P extends string> = Pick<T, {
  [K in keyof T]: K extends `${infer _Prefix}${P}${infer _Suffix}` ? K : never
}[keyof T]>;
