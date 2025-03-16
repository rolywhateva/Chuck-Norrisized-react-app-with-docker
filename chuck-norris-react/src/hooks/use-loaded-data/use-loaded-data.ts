import { useReducer } from "react";

import { loadedDataReducer } from "./loaded-data-reducer";

export function useLoadedData<T>() {
  return useReducer(loadedDataReducer<T>, {
    data: null,
    isLoading: true,
    error: null,
    isFetching: false,
  });
}
