import {
  GET_PROFILE_TEACHER,
  CREATE_COURSE,
  STUDENTS_ACCEPT,
  STUDENT_INVITE,
} from "../types/TeacherTypes";

const initialState = {
  getCourses: [],
  createCourses: null,
  studentsAccStatus: [],
  studentInvite: [],
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
    case STUDENT_INVITE:
      return {
        ...state,
        studentInvite: payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
