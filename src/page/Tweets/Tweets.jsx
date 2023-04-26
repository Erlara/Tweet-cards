import { useDispatch, useSelector } from 'react-redux';
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
  List,
  Btn,
  BtnLoad,
} from './Tweets.styled';
import { selectPage, selectUsers } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { changeUser, fetchUsersPage } from 'redux/operations';
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { addPage } from 'redux/usersSlice';

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const pageCurrent = useSelector(selectPage);

  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
  };

  const [following, setFollowing] = useLocalStorage(`${users.id}`, false);

  const handleClick = () => {
    !following ? setFollowing(true) : setFollowing(false);
    dispatch(changeUser(changeFollowers));
  };

  const changeFollowers = ({ id, followers }) => {
    let followersCounter = followers;

    if (following) {
      followersCounter -= 1;

      return { id, followers: followersCounter };
    } else {
      followersCounter += 1;
      console.log(followersCounter);
      return { id, followers: followersCounter };
    }
  };

  const onLoad = () => {
    dispatch(addPage(pageCurrent + 1));
  };

  useEffect(() => {
    dispatch(fetchUsersPage(pageCurrent));
  }, [dispatch, pageCurrent]);

  return (
    <>
      <Link to="/">
        <Btn>GO BACK</Btn>
      </Link>
      <List>
        {users.map(({ id, followers, tweets, avatar }) => (
          <li key={id}>
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
                <Followers>{followers} FOLLOWERS</Followers>
              </Box>
              <Button
                style={{ backgroundColor: following && '#5cd3a8' }}
                type="button"
                onClick={handleClick}
              >
                {following ? <>FOLLOWING </> : <> FOLLOW</>}
              </Button>
            </Container>
          </li>
        ))}
      </List>
      {users.length < 13 && <BtnLoad onClick={onLoad}>LOAD MORE</BtnLoad>}
    </>
  );
};
