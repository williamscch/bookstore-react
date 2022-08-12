import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  Book.propTypes = {
    book: PropTypes.shape([]).isRequired,
  };
  return (
    <li>
      <h3>{ book.title }</h3>
      <h4>{ book.author }</h4>
      <button type="button">Delete</button>
    </li>
  );
};

export default Book;
