import React, { Component } from "react";
import { connect } from "react-redux";
import StudentInfor from "./studentInfor";

class StudentList extends Component {
  render() {
    const { students, isLoading, error } = this.props;
    if (isLoading) {
      return <h1>Loading............</h1>;
    } else if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <table className="table mt-3 table-info table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Major</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return <StudentInfor key={student.id} student={student} />;
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.students,
    isLoading: state.student.isLoading,
    error: state.student.error,
  };
};

export default connect(mapStateToProps)(StudentList);
