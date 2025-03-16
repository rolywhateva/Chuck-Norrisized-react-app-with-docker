import { ChuckButton } from "@/ui/chuck-button";
import { ChuckSelect } from "@/ui/chuck-select";

const chuckNorrisCategories: Record<string, string> = {
  random: "🎲",
  animal: "🐻",
  career: "💼",
  celebrity: "🎬",
  dev: "💻",
  explicit: "🔞",
  fashion: "👗",
  food: "🍔",
  history: "📜",
  money: "💰",
  movie: "🎥",
  music: "🎵",
  political: "🗳️",
  religion: "⛪",
  science: "🔬",
  sport: "⚽",
  travel: "✈️",
};

export interface IRandomJokeFiltersProps {
  selectedCategory: string;
  onCategoryChange: (newCategory: string) => void;
  isLoading: boolean;
  categories: string[] | null;
  onRepeatClick: () => void;
}

export function RandomJokeFilters(props: IRandomJokeFiltersProps) {
  return (
    <div className="flex flex-row justify-center align-center items-center gap-3">
      <ChuckSelect<string>
        values={props.categories}
        selectedValue={props.selectedCategory}
        labelText="Category"
        selectName="category"
        disabled={props.isLoading}
        onSelectedValueChange={props.onCategoryChange}
        getOptionValue={(c) => c}
        getOptionText={(c) => (
          <>
            {chuckNorrisCategories[c]} {c}
          </>
        )}
      />

      <ChuckButton onClick={props.onRepeatClick}>
        Get from category
      </ChuckButton>

      {/* <ChuckButton onClick={props.onRandomClick}> Get random </ChuckButton> */}
    </div>
  );
}
