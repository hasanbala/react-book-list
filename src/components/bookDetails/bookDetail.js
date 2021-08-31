import React, { Component } from "react";
import { connect } from "react-redux";
import { unselectBook } from "../../actions";

class BookDetail extends Component {
  getContent() {
    const { selectedBook } = this.props;

    if (selectedBook.isbn) {
      return (
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{selectedBook.title}</div>
              <div className="description">{selectedBook.description}</div>
            </div>
            <div
              className="ui bottom attached button"
              onClick={() => {
                this.props.unselectBook();
              }}
            >
              unselect book
            </div>
          </div>
        </div>
      );
    }

    return <div>no selected book</div>;
  }

  render() {
    return <div> {this.getContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { selectedBook: state.selectedBook };
};

export default connect(mapStateToProps, { unselectBook })(BookDetail);
