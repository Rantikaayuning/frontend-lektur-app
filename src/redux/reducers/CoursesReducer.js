import {
  GET_ALL_COURSES,
  GET_COURSE_DETAIL,
  GET_COURSE_STUDENT,
  POST_ENROLL_COURSE,
  GET_STUDENT_ENROLL,
  GET_TEACHER_COURSES,
  GET_STUDENT_ASSESSMENT
} from "../types/CoursesTypes";
import Cookies from "js-cookie";

const initialState = {
  courses: [],
  courseDetail: null,
  enrollCourse: null,
  studentCourses: [],
  studentEnrollList: [],
  teacherCourses: [],
  studentAssessment: [],
  isAuthentificated: Cookies.get("token") ? true : false,
};

const coursesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        courses: payload,
      };
    case GET_COURSE_DETAIL:
      return {
        ...state,
        courseDetail: payload,
      };
    case POST_ENROLL_COURSE:
      return {
        ...state,
        enrollCourse: payload,
        isAuthentificated: true,
      };
    case GET_COURSE_STUDENT:
      return {
        ...state,
        studentCourses: payload,
      };
    case GET_STUDENT_ENROLL:
      return {
        ...state,
        studentEnrollList: payload,
      };
    case GET_TEACHER_COURSES:
      return {
        ...state,
        teacherCourses: payload,
      };
    case GET_STUDENT_ASSESSMENT:
      return {
        ...state,
        studentAssessment: payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
