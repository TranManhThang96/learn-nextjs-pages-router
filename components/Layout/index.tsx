import React from 'react';
import MainNavigation from './MainNavigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
