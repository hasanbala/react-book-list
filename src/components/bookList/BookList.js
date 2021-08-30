import React, { Component } from "react";
import { connect } from "react-redux";
import BookItem from "./BookItem";

class Booklist extends Component {
  render() {
    const { bookList } = this.props;
    return (
      <div>
        {bookList.map((book) => (
          <BookItem key={book} book={book} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { booklist: state.booklist };
};

export default connect(mapStateToProps)(Booklist);
