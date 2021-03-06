import {
  GET_PROFILE_TEACHER,
  STUDENTS_ACCEPT,
  STUDENT_INVITE_SUCCESS,
  STUDENT_APPROVE,
} from "../types/TeacherTypes";

const initialState = {
  getCourses: [],
  studentsAccStatus: [],
  studentInviteSuccess: "",
  studentApprove: null,
};

const teacherReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PROFILE_TEACHER:
      return {
        ...state,
        getCourses: payload,
      };
    case STUDENTS_ACCEPT:
      return {
        ...state,
        studentsAccStatus: payload,
      };
    case STUDENT_INVITE_SUCCESS:
      return {
        ...state,
        studentInviteSuccess: payload,
      };
    case STUDENT_APPROVE:
      return {
        ...state,
        studentApprove: payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
