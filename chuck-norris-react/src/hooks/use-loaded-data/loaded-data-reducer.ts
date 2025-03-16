import { IDataAction } from './data-action';
import { ILoadedData } from './loaded-data';

export function loadedDataReducer<T>(
  state: ILoadedData<T>,
  action: IDataAction<T>
): ILoadedData<T> {
  if (action.actionType === 'hasData' && !action.data) {
    throw new Error('Action type is hasData but no data was provided');
  }

  if (action.actionType === 'hasError' && !action.error) {
    throw new Error('Action type is error but no error was provided');
  }

  switch (action.actionType) {
    case 'isLoading':
      return {
        ...state,
        isLoading: true,
        isFetching: false,
        error: null
      };
    case 'isFetching':
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        error: null
      };
    case 'hasData':
      return {
        isLoading: false,
        isFetching: false,
        error: null,
        data: action.data ?? null
      };
    case 'hasError':
      return {
        isLoading: false,
        isFetching: false,
        error: action.error,
        data: null
      };
  }
}
