import { ReactNode } from 'react';
import { NavLink } from 'react-router';

export function ChuckNavLink(props: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `block py-2 px-3  ${
          isActive ? 'text-green-300' : 'text-white'
        } rounded-sm md:hover:bg-transparent md:border-0  md:p-0`
      }>
      {props.children}
    </NavLink>
  );
}
