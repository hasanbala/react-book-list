import BookList from "./bookList/bookList";
import BookDetail from "./bookDetails/bookDetail";
import "./app.css";

const App = () => {
  return (
    <div className="app-container">
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
