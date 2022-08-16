const BOOK_ADDED = 'bookstore-react/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore-react/books/BOOK_REMOVED';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        { title: action.payload.title, author: action.payload.author },
      ];
    case BOOK_REMOVED:
      return [
        ...state,
        state.filter((book) => book.payload.id !== action.payload.id),
      ];
    default:
      return state;
  }
}

export const actionNewBook = (title, author, id) => ({
  type: BOOK_ADDED,
  payload: {
    title,
    author,
    id,
  },
});

export const actionRemoveBook = () => ({
  type: BOOK_REMOVED,
});
