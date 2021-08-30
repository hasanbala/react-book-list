const addBook = (isbn, title, subtitle, author, pages, description) => {
  return {
    type: "ADD_BOOK",
    payload: {
      isbn,
      title,
      subtitle,
      author,
      pages,
      description,
    },
  };
};

const deleteBook = (book) => {
  return {
    type: "DELETE_BOOK",
    payload: book,
  };
};

const selectBook = (book) => {
  return {
    type: "SELECT_BOOK",
    payload: book,
  };
};

const unselectBook = (book) => {
  return {
    type: "UNSELECT_BOOK",
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addBook,
  deleteBook,
  selectBook,
  unselectBook,
};
