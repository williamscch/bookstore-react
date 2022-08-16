import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';
// import { store } from './redux/books/books';

const App = () => (
  // <Provider store={store}>
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
  // </Provider>
);

export default App;
