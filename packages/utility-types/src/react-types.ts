import type {
  ReactNode,
  ReactElement,
  WeakValidationMap,
  ValidationMap,
} from 'react';

import { Component } from 'react';
import { UnknownRecord } from './general-types';

export interface FunctionComponentWithChildren<P = UnknownRecord> {
  (
    props: P & { children?: ReactNode | undefined },
    context?: unknown
  ): ReactNode | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<unknown> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

export class ComponentWithChildren<
  P = UnknownRecord,
  S = UnknownRecord,
  SS = any
> extends Component<P & { children?: ReactNode | undefined }, S, SS> {}
