import { Tweets } from '../page/Tweets/Tweets';
import { GlobalStyle } from './GlobalStyle';
//import { useDispatch } from 'react-redux';
//import { fetchUsers } from 'redux/operations';
//import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'page/Home/Home';
import { Header } from './Header/Header';

// export function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

//   return (
//     //<Layout>
//      <GlobalStyle />
//      <Tweets />

//     //</Layout>
//   );
