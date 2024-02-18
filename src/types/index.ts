export type Result<T, E> =
  | { result: 'success'; data: T }
  | { result: 'error'; error: E };
