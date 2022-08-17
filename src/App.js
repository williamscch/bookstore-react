import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
