interface IEmptyAction<T> {
  readonly type: T
}

interface IPayLoadAction<T, P> extends IEmptyAction<T> {
  readonly payload: P;
  readonly error?: boolean;
}
