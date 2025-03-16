import { ReactNode } from "react";

export interface IChuckSelect<ItemType> {
  values: ItemType[] | null;
  selectedValue: string;

  labelText: string;
  selectName: string;
  disabled: boolean;

  onSelectedValueChange: (newValue: ItemType) => void;
  getOptionValue: (item: ItemType) => string;
  getOptionText: (item: ItemType) => ReactNode;
}

export function ChuckSelect<ItemType>(props: IChuckSelect<ItemType>) {
  const onNewItemSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedItem = e.target.value as ItemType;

    props.onSelectedValueChange(newSelectedItem);
  };

  return (
    <div className="flex justify-center align-center items-center gap-3">
      <label
        htmlFor={props.selectName}
        className="block font-medium text-gray-700"
      >
        {props.labelText}
      </label>

      <select
        name={props.selectName}
        className="mt-1 block w-50 rounded-lg border-gray-300 bg-white py-4 px-5 text-gray-900 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 capitalize"
        value={props.selectedValue}
        onChange={onNewItemSelected}
        disabled={props.disabled}
      >
        {props.values?.map((c) => (
          <option key={props.getOptionValue(c)} value={props.getOptionValue(c)}>
            {props.getOptionText(c)}
          </option>
        ))}
      </select>
    </div>
  );
}
