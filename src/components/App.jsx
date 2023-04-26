import { Tweets } from '../page/Tweets/Tweets';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'page/Home/Home';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
