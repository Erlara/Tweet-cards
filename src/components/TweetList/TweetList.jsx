import { useSelector } from 'react-redux';
import { TweetCard } from '../TweetCard/TweetCard';
import { selectUsers } from 'redux/selectors';

export const TweetsList = () => {
  const users = useSelector(selectUsers);

  return users.map(({ id, ...otherProps }) => (
    <li key={id}>
      <TweetCard id={id} {...otherProps} />
    </li>
  ));
};
