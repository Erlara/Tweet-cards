import { useDispatch } from 'react-redux';
import Logo from '../../images/Logo.svg';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Circle,
  Container,
  Ellipse,
  Followers,
  Img,
  Line,
  Tweet,
  Div,
  LogoGo,
} from './TweetCard.styled';
import { changeUser } from 'redux/operations';

export const TweetCard = ({ id, user, avatar, tweets, followers }) => {
  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
  };

  const [following, setFollowing] = useLocalStorage(`${id}`, false);

  const dispatch = useDispatch();

  const handleClick = () => {
    !following ? setFollowing(true) : setFollowing(false);
    dispatch(changeUser(changeFollowers()));
  };

  const changeFollowers = () => {
    let followersCounter = followers;

    if (following) {
      followersCounter -= 1;

      return { id, followers: followersCounter };
    } else {
      followersCounter += 1;

      return { id, followers: followersCounter };
    }
  };

  return (
    <Container>
      <Div>
        <LogoGo src={Logo} alt="logo" width="76" height="22" />
      </Div>
      <Line>
        <Ellipse>
          <Circle>
            <Img src={avatar} alt="avatar" />
          </Circle>
        </Ellipse>
      </Line>
      <Box>
        <Tweet>{tweets} TWEETS</Tweet>
        <Followers>{followers.toLocaleString('en-US')} FOLLOWERS</Followers>
      </Box>
      <Button
        style={{ backgroundColor: following && '#5cd3a8' }}
        type="button"
        onClick={handleClick}
      >
        {following ? <>FOLLOWING </> : <> FOLLOW</>}
      </Button>
    </Container>
  );
};
