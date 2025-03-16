import { useCallback } from 'react';

import { chuckHttpClient } from '@/clients';
import { useLoadedData } from '@/hooks/use-loaded-data';
import { IJoke } from '@/models/joke';

export function useJokes() {
  const [jokeState, dispatchJoke] = useLoadedData<IJoke>();

  const getRandomJoke = useCallback(async () => {
    try {
      const joke = await chuckHttpClient.getRandomJoke();

      dispatchJoke({ actionType: 'hasData', data: joke });
    } catch (error: unknown) {
      dispatchJoke({ actionType: 'hasError', error });
    }
  }, [dispatchJoke]);

  const getJokeFromCategory = useCallback(
    async (category: string) => {
      dispatchJoke({ actionType: 'isFetching' });

      try {
        const joke = await chuckHttpClient.getJokeFromCategory(category);

        dispatchJoke({ actionType: 'hasData', data: joke });
      } catch (error: unknown) {
        dispatchJoke({ actionType: 'hasError', error });
      }
    },
    [dispatchJoke]
  );

  return { jokeState, dispatchJoke, getRandomJoke, getJokeFromCategory };
}
