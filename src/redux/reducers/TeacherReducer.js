import {
  GET_PROFILE_TEACHER,
  CREATE_COURSE,
  STUDENTS_ACCEPT,
} from "../types/TeacherTypes";

const initialState = {
  getCourses: [],
  createCourses: null,
  studentsAccStatus: [],
};

const teacherReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PROFILE_TEACHER:
      return {
        ...state,
        getCourses: payload,
      };
    case CREATE_COURSE:
      return {
        ...state,
        createCourses: payload,
      };
    case STUDENTS_ACCEPT:
      return {
        ...state,
        studentsAccStatus: payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
