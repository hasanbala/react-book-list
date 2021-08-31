import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, deleteBook } from "../../actions";
import "./bookList.css";

class BookItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{book.title}</div>
          <div className="description">{book.subtitle}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => {
                this.props.selectBook(book);
              }}
            >
              Approve
            </div>
            <div
              className="ui basic red button"
              onClick={() => {
                this.props.deleteBook(book);
              }}
            >
              Decline
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { selectBook, deleteBook })(BookItem);
