import { IJoke } from "@/models/joke";

interface IJokeContainerProps {
  isLoading: boolean;
  error: unknown;
  joke: IJoke | null;
}

export function JokeContainer(props: IJokeContainerProps) {
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-col sm:items-center sm:gap-6 sm:py-4 w-200">
      <img
        className="mx-auto block h-24  sm:mx-0 sm:shrink-0"
        src="https://api.chucknorris.io/img/avatar/chuck-norris.png"
        alt=""
      />

      <div className="space-y-2 text-center sm:text-left">
          <q className="space-y-0.5 font-medium w-50 text-gray-500 text-center">
            {props.isLoading && "Getting Joke ... "}

            {!!props.error && "Something went wrong ..."}

            {props.joke?.value}
          </q>
      </div>
    </div>
  );
}
