import * as actionTypes from "../constants/studentConstants";

const initialState = {
  students: [],
  selectedStudent: null,
  searchValue: "",
  isLoading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_PENDING: {
      return { ...state, isLoading: true };
    }

    case actionTypes.GET_STUDENT_FULLFILED: {
      return { ...state, students: action.students, isLoading: false };
    }

    case actionTypes.GET_STUDENT_REJECTED: {
      return { ...state, error: action.error, isLoading: false };
    }

    case actionTypes.CHANGE_SEARCH_VALUE: {
      return { ...state, searchValue: action.value };
    }

    case "GET_STUDENT_BY_ID": {
      return { ...state, selectedStudent: action.student };
    }

    default:
      return state;
  }
};

export default studentReducer;
