import { v4 as uuidv4 } from 'uuid';

const BOOK_ADDED = 'bookstore-react/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore-react/books/BOOK_REMOVED';

const initialSate = [
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
];

export default function booksReducer(state = initialSate, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        action.book,
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const actionNewBook = (book) => ({
  type: BOOK_ADDED,
  book,
});

export const actionRemoveBook = (id) => ({
  type: BOOK_REMOVED,
  id,
});
