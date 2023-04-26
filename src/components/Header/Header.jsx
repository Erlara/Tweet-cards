import { Outlet } from 'react-router-dom';
import { Nav, Div, StyledLink } from '../Header/Header.styled';

export const Header = () => {
  return (
    <>
      <Div>
        <Nav>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/tweets">TWEETS</StyledLink>
        </Nav>
      </Div>
      <Outlet />
    </>
  );
};
