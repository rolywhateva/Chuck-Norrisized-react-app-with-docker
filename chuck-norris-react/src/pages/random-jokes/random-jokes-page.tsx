import { useEffect } from "react";

import { JokeContainer } from "@/components/joke-container";
import { RandomJokeFilters } from "@/components/random-joke-filters";
import { ICategory } from "@/models/category";

import { RadomCategory, useCategories } from "./use-categories";
import { useJokes } from "./use-jokes";

export function RandomJokesPage() {
  const {
    categoriesState,
    dispatchCategories,
    selectedCategory,
    setSelectedCategory,
    getCategories,
  } = useCategories();

  const { jokeState, dispatchJoke, getRandomJoke, getJokeFromCategory } =
    useJokes();

  useEffect(() => {
    const getInitialData = async () => {
      await getCategories();

      dispatchJoke({ actionType: "isLoading" });

      await getRandomJoke();
    }
    
    void getInitialData();
  }, [dispatchCategories, dispatchJoke, getCategories, getRandomJoke]);

  const getNewJoke = (category: ICategory) =>
    category === RadomCategory
      ? getRandomJoke()
      : getJokeFromCategory(category);

  async function onRepeatClick() {
    await getNewJoke(selectedCategory);
  }

  async function onCategoryChange(newCategory: ICategory) {
    setSelectedCategory(newCategory);
    await getNewJoke(newCategory);
  }

  return (
    <div className="flex flex-col justify-center align-center items-center mt-3">
      <RandomJokeFilters
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        isLoading={categoriesState.isLoading}
        categories={categoriesState.data}
        onRepeatClick={onRepeatClick}
      />

      <JokeContainer
        joke={jokeState.data}
        isLoading={jokeState.isLoading}
        error={jokeState.error}
      />
    </div>
  );
}
