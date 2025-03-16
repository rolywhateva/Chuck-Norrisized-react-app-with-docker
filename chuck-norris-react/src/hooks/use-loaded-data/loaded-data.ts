export interface ILoadedData<T> {
    data: T | null;
    isLoading: boolean;
    isFetching?: boolean;
    error: unknown;
}
