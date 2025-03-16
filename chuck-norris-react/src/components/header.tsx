import { ChuckNavLink } from './chuck-nav-link';

export function Header() {
  return (
    <nav className="border-gray-200 bg-orange-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            🥋👊🔥🏆 Chuck Norris 🥋👊🔥🏆
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-orange-900">
            <li>
              <ChuckNavLink to="/search"> Search </ChuckNavLink>
            </li>

            <li>
              <ChuckNavLink to="/random">Random </ChuckNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
