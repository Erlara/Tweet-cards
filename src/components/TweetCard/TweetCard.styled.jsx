import styled from 'styled-components';
import font from '../../images/font.png';

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

export const Div = styled.div`
  height: 214px;
  background-image: url('${font}');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const LogoGo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
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

export const Ellipse = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: -40px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9.48px;
  top: 9.42px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Tweet = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  gap: 16px;
  flex-direction: column;
  top: 280px;
`;
