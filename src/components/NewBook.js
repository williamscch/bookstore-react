import React from 'react';

const NewBook = () => (
  <form>
    <input type="text" placeholder="Add New Book..." name="title" />
    <input type="text" placeholder="Add the Author..." name="author" />
    <button type="submit">Add New Book</button>
  </form>
);
export default NewBook;
