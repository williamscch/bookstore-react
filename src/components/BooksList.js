import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
  BooksList.propTypes = {
    books: PropTypes.shape([]).isRequired,
  };
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
