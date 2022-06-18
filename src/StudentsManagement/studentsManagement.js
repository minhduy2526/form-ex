import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import StudentForm from "./studentForm";
import StudentList from "./studentList";
import { getStudents } from "../actions/studentAction";
import StudentSearch from "./studentSearch";

class StudentsManagement extends Component {
  handleSubmitSuccess = () => {
    this.fetchStudents();
  };

  fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://629dfd933dda090f3c10fb7b.mockapi.io/api/students"
      );
      this.props.getStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.props.getStudents();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.props.getStudents();
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary my-1">Student Management</h1>
        <StudentForm />
        <StudentSearch />
        <StudentList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.student.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (students) => {
      dispatch(getStudents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsManagement);
