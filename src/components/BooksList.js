import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { actionGetBooks } from '../redux/books/books';

const BooksList = () => {
  const reduxStateBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetBooks());
  }, []);
  return (
    <ul className="book-list">
      {reduxStateBooks.map((book) => (
        <Book
          key={book.item_id}
          book={{
            title: book.title,
            author: book.author,
            item_id: book.item_id,
            category: book.category,
          }}
        />
      ))}
    </ul>
  );
};

export default BooksList;
