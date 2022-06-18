import axios from "axios";
import * as actionTypes from "../constants/studentConstants";

export const getStudents = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.GET_STUDENT_PENDING });

      const { searchValue } = getState().student;

      const response = await axios.get(
        "https://629dfd933dda090f3c10fb7b.mockapi.io/api/students",
        {
          params: {
            name: searchValue,
          },
        }
      );
      
      dispatch({
        type: actionTypes.GET_STUDENT_FULLFILED,
        students: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_STUDENT_REJECTED,
        error: error.response.data,
      });
    }
  };
};

getStudents();

export const addStudent = (student, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://629dfd933dda090f3c10fb7b.mockapi.io/api/students",
        student
      );
      dispatch(getStudents());
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudent = (studentID) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://629dfd933dda090f3c10fb7b.mockapi.io/api/students/${studentID}`
      );
      dispatch(getStudents());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStudentByID = (studentID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://629dfd933dda090f3c10fb7b.mockapi.io/api/students/${studentID}`
      );
      dispatch({ type: "GET_STUDENT_BY_ID", student: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateStudent = (studentID, student, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://629dfd933dda090f3c10fb7b.mockapi.io/api/students/${studentID}`,
        student
      );
      dispatch(getStudents());
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeSearch = (value) => {
  return { type: actionTypes.CHANGE_SEARCH_VALUE, value };
};
