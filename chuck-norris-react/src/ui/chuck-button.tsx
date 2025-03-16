import { ReactNode } from 'react';

interface IChuckButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function ChuckButton(props: IChuckButtonProps) {
  return (
    <button
      className="rounded-full bg-orange-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-orange-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
