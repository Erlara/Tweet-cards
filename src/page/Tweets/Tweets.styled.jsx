import styled from 'styled-components';

export const Btn = styled.button`
  width: 140px;
  height: 40px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background-color: #f1c32b;
  color: #2c0231;
  border: none;
  margin: 30px 0 40px 100px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: orange;
  }
`;

export const BtnLoad = styled.button`
  width: 140px;
  height: 40px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background-color: #f1c32b;
  color: #2c0231;
  border: none;
  display: block;
  margin: 40px auto;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: orange;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;
