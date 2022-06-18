import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent, getStudentByID } from "../actions/studentAction";

class StudentInfor extends Component {
  render() {
    const { student } = this.props;
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.major}</td>
        <td>{student.phoneNumber}</td>
        <td>{student.email}</td>
        <td>
          <button
            onClick={() => {
              this.props.getStudentByID(student.id);
            }}
            className="btn btn-success mx-2"
          >
            Update
          </button>
          <button
            onClick={() => {
              this.props.deleteStudent(student.id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (studentID) => {
      dispatch(deleteStudent(studentID));
    },
    getStudentByID: (studentID) => {
      dispatch(getStudentByID(studentID));
    },
  };
};

export default connect(null, mapDispatchToProps)(StudentInfor);
