import { HttpError } from './http-exception';

export async function getRequest<T>(url: string) {
  const response: Response = await fetch(url);

  if (response.status !== 200) {
    throw new HttpError(response.status, 'Something went wrong');
  }

  const data = (await response.json()) as T;

  return data;
}
