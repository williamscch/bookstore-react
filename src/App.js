import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    );
  }
}

export default App;
