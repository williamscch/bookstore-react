import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionRemoveBook, actionGetBooks } from '../redux/books/books';

const Book = ({ book }) => {
  Book.propTypes = {
    book: PropTypes.shape([]).isRequired,
  };

  const dispatch = useDispatch();

  return (
    <li>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <h4>{book.category}</h4>
      <button
        type="button"
        onClick={async () => {
          await dispatch(actionRemoveBook(book.item_id));
          dispatch(actionGetBooks());
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Book;
