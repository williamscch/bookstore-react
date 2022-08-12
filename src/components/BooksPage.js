import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import NewBook from './NewBook';

class BooksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: 'Harry Potter',
          author: 'J.K. Rowling',
          id: uuidv4(),
        },
        {
          title: 'The Lord of the Rings',
          author: 'John Ronald Reuel Tolkien',
          id: uuidv4(),
        },
        {
          title: 'The Da Vinci Code',
          author: 'Dan Brown',
          id: uuidv4(),
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <>
        <BooksList books={books} />
        <NewBook />
      </>
    );
  }
}

export default BooksPage;
