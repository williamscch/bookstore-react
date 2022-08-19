import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionNewBook, actionGetBooks } from '../redux/books/books';

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
      onSubmit={async (e) => {
        await dispatch(
          actionNewBook({
            title: bookTitle,
            author: bookAuthor,
            item_id: uuidv4(),
            category: 'hardcoded',
          }),
        );
        dispatch(actionGetBooks);
        e.preventDefault();
        setBookTitle('');
        setBookAuthor('');
      }}
    >
      <h2> Add a New Book Here!</h2>
      <input
        value={bookTitle}
        onChange={handleChangeTitle}
        type="text"
        placeholder="Book's Name..."
        name="title"
        required
        maxLength={25}
      />
      <input
        value={bookAuthor}
        onChange={handleChangeAuthor}
        type="text"
        placeholder="Book's Author..."
        name="author"
        required
        maxLength={25}
      />
      <button type="submit">Add New Book</button>
    </form>
  );
};
export default NewBook;
