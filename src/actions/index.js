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

const unselectBook = () => {
  return {
    type: "UNSELECT_BOOK",
  };
};

export { addBook, deleteBook, selectBook, unselectBook };
