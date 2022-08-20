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
    <li className="book">
      <div className="book-info">
        <h4 className="category">{book.category}</h4>
        <h4 className="title">{book.title}</h4>
        <h4 className="author">{book.author}</h4>
        <div className="buttons-container">
          <button className="book-buttons" type="button">
            Comments
          </button>
          <button
            className="book-buttons"
            type="button"
            onClick={async () => {
              await dispatch(actionRemoveBook(book.item_id));
              dispatch(actionGetBooks());
            }}
          >
            Delete
          </button>
          <button className="book-buttons" type="button">
            Comments
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress">
          <div className="outer">
            <div className="inner" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            height="80px"
            width="80px"
          >
            <circle cx="40" cy="40" r="32.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="number-progress">
          <span>65%</span>
          <h4>Completed</h4>
        </div>
      </div>
      <div className="chapter">
        <h5>CURRENT CHAPTER</h5>
        <h4>Chapter 18</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;
