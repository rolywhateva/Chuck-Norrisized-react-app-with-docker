import { Outlet } from 'react-router';

import { Header } from '@/components/header';

export function MainPage() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
