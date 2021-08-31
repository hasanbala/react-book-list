import React, { Component } from "react";
import { connect } from "react-redux";
import BookItem from "./bookItem";
import "./bookList.css";

class Booklist extends Component {
  render() {
    const { bookList } = this.props;
    return (
      <div className="book-list-container ui cards">
        {bookList.map((book) => (
          <BookItem key={book.isbn} book={book} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bookList: state.bookList };
};

export default connect(mapStateToProps)(Booklist);
