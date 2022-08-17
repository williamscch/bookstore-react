import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const reduxStateBooks = useSelector((state) => state.books);
  return (
    <ul>
      {reduxStateBooks.map((book) => (
        <Book
          key={book.id}
          book={{
            title: book.title,
            author: book.author,
            id: book.id,
          }}
        />
      ))}
    </ul>
  );
};

export default BooksList;
