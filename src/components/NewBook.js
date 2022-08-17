import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionNewBook } from '../redux/books/books';

const NewBook = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleChangeTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setBookAuthor(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        dispatch(
          actionNewBook({
            title: bookTitle,
            author: bookAuthor,
            id: uuidv4(),
          }),
        );
        e.preventDefault();
        setBookTitle('');
        setBookAuthor('');
      }}
    >
      <input
        value={bookTitle}
        onChange={handleChangeTitle}
        type="text"
        placeholder="Add New Book..."
        name="title"
        required
        maxLength={15}
      />
      <input
        value={bookAuthor}
        onChange={handleChangeAuthor}
        type="text"
        placeholder="Book's Author..."
        name="author"
        required
        maxLength={15}
      />
      <button type="submit">Add New Book</button>
    </form>
  );
};
export default NewBook;
