import { combineReducers } from "redux";
import books from "./books.json";

const bookList = (oldBookList = books, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...oldBookList, action.payload];

    case "DELETE_BOOK":
      return {
        // eslint-disable-next-line array-callback-return
        ...oldBookList.filter((item) => {
          // eslint-disable-next-line no-unused-expressions
          item.isbn !== action.payload.isbn;
        }),
      };

    default:
      return oldBookList;
  }
};

const selectedBook = (oldSelectedBook = {}, action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.payload;

    case "UNSELECT_BOOK":
      return {};

    default:
      return oldSelectedBook;
  }
};

const reducers = combineReducers({
  bookList,
  selectedBook,
});

export default reducers;
