export interface IDataAction<T> {
  actionType: 'isLoading' | 'hasError' | 'isFetching' | 'hasData';
  data?: T;
  error?: unknown;
}
