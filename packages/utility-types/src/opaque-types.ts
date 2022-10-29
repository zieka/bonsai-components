/**
 * Hack to add Opaque like support
 */
export type Opaque<T, K extends string> = T & { __typename: K };

export type Base64EncodedString = Opaque<string, 'base64'>;
