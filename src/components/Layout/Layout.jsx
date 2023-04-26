import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//import { Header, Nav, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      {/* <Header>
        <Nav>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/tweets">TWEETS</StyledLink>
        </Nav>
      </Header> */}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
