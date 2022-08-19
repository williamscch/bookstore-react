// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const OBTAIN_BOOKS = 'bookstore-react/books/BOOKS_OBTAINED';
const BOOK_ADDED = 'bookstore-react/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore-react/books/BOOK_REMOVED';
export const apiPath = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kayYQu9Xpeml8zqTokVA/books/';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case OBTAIN_BOOKS:
      return action.books;
    case BOOK_ADDED:
      return [...state, action.book];
    case BOOK_REMOVED:
      return state.filter((book) => book.item_id !== action.item_id);
    default:
      return state;
  }
}

export const actionGetBooks = () => async (dispatch) => {
  const response = await axios.get(apiPath);
  const books = [];
  Object.keys(response.data).forEach((e) => {
    books.push({ ...response.data[e][0], item_id: e });
  });
  dispatch({
    type: OBTAIN_BOOKS,
    books,
  });
};

export const actionNewBook = (book) => async (dispatch) => {
  axios.post(apiPath, {
    ...book,
  });
  dispatch({
    type: BOOK_ADDED,
    book,
  });
};

export const actionRemoveBook = (id) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kayYQu9Xpeml8zqTokVA/books/${id}`);
  dispatch({
    type: BOOK_REMOVED,
    item_id: id,
  });
};
