import { ICategory } from '@/models/category';
import { IJoke } from '@/models/joke';

import { getRequest } from './base-http-client';

async function getRandomJoke() {
  const response = await getRequest<IJoke>('https://api.chucknorris.io/jokes/random');

  return response;
}

async function getJokeFromCategory(category: string) {
  const response = await getRequest<IJoke>(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );

  return response;
}

async function getCategories() {
  const response = await getRequest<ICategory[]>('https://api.chucknorris.io/jokes/categories');

  return response;
}

export const chuckHttpClient = {
  getCategories,
  getJokeFromCategory,
  getRandomJoke
};
