import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent, updateStudent } from "../actions/studentAction";

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        phoneNumber: 0,
        email: "",
        major: "",
      },
    };
  }

  handleSubmitSuccess = () => {
    this.setState({
      values: {
        name: "",
        phoneNumber: 0,
        email: "",
        major: "",
      },
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { id, ...student } = this.state.values;

    if (id) {
      this.props.updateStudent(id, student, this.handleSubmitSuccess);
    } else {
      this.props.addStudent(this.state.values, this.handleSubmitSuccess);
    }
  };

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStudent !== this.props.selectedStudent) {
      this.setState({ values: { ...this.props.selectedStudent } });
    }
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  value={values.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="major" className="form-label">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  className="form-control"
                  name="major"
                  value={values.major}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="phoneNumber"
                  id="phoneNumber"
                  className="form-control"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <button className="btn btn-success px-4 py-2">
                Add New Student
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.student.selectedStudent,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student, onSuccess) => {
      dispatch(addStudent(student, onSuccess));
    },

    updateStudent: (studentID, student, onSuccess) => {
      dispatch(updateStudent(studentID, student, onSuccess));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
