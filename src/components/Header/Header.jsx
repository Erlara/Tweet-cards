import { Outlet } from 'react-router-dom';
import { Nav, Div, StyledLink } from '../Header/Header.styled';
//import { useDispatch } from 'react-redux';
//import { addPage } from 'redax/tweetsSlise';

export const Header = () => {
  //   const dispatch = useDispatch();

  //   const toTweets = () => {
  //     dispatch(addPage(1));
  //   };

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
