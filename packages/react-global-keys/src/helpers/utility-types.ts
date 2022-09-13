import {
  ReactNode,
  ReactElement,
  WeakValidationMap,
  ValidationMap,
  Component,
} from "react";

export type UnknownRecord = Record<string | number | symbol, unknown>;

export interface FunctionComponentWithChildren<P = UnknownRecord> {
  (
    props: P & { children?: ReactNode | undefined },
    context?: unknown
  ): ReactElement<unknown, any> | null;
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
