import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSearch } from "../actions/studentAction";

class StudentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  // handleChangeSearch = (evt,) => {
  //   if (evt.key !== "Enter") return;
  //   this.props.changeSearch(value);
  // };

  render() {
    return (
      <div className="d-flex justify-content-end mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search here...."
          value={this.setState.searchValue}
          onChange={(evt) => this.setState({ searchValue: evt.target.value })}
          // onKeyDown={(evt) => this.handleChangeSearch(this.state.searchValue)}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.props.changeSearch(this.state.searchValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (value) => dispatch(changeSearch(value)),
  };
};

export default connect(null, mapDispatchToProps)(StudentSearch);
