import { useDispatch, useSelector } from 'react-redux';
import { List, Btn, BtnLoad } from './Tweets.styled';
import { selectPage, selectUsers } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchUsersPage } from 'redux/operations';
import { Link } from 'react-router-dom';
import { addPage } from 'redux/usersSlice';
import { TweetsList } from 'components/TweetList/TweetList';

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const pageCurrent = useSelector(selectPage);

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
        <TweetsList />
      </List>
      {users.length < 13 && <BtnLoad onClick={onLoad}>LOAD MORE</BtnLoad>}
    </>
  );
};
