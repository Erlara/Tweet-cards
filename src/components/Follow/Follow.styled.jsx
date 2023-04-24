import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  overflow: hidden;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Tweets = styled.p`
  /* position: absolute;
  width: 132px;
  height: 24px;
  left: 124px;
  top: 284px; */

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  /* position: absolute;
  width: 214px;
  height: 24px;
  left: 83px;
  top: 324px; */

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px; */

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  //margin-top: 26px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: solid;
  position: absolute;
  width: 100%;
  gap: 16px;
  flex-direction: column;
  //height: 50px;
  //left: 92px;
  top: 280px;
`;
