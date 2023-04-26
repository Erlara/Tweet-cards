import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.header`
  padding-left: 40px;
  box-shadow: 0px 10px 10px #072f13;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding-left: 100px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
  color: #f1c32b;
  font-weight: bold;
  font-size: 20px;
  &.active {
    color: #df9307;
  }
`;
