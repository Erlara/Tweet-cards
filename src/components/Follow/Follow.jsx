import {
  Box,
  Button,
  Container,
  Followers,
  Line,
  Tweets,
} from './Follow.styled';

export const Follow = () => {
  return (
    <Container>
      <svg width="76" height="22">
        <use href="./Logo.svg"></use>
      </svg>
      <img src="./font.png" alt="font" />
      <Line></Line>
      <img src="" alt="avatar" />
      <Box>
        <Tweets>TWEETS</Tweets>
        <Followers>FOLLOWERS</Followers>
      </Box>
      <Button>FOLLOW</Button>
    </Container>
  );
};
