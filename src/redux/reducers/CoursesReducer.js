import { GET_ALL_COURSES, GET_COURSE_DETAIL, GET_COURSE_STUDENT , POST_ENROLL_COURSE } from "../types/CoursesTypes";

const initialState = {
  courses: [],
  courseDetail: null,
  enrollCourse: null,
  studentCourses: []
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
      };
    case GET_COURSE_STUDENT:
      return {
        ...state,
        studentCourses: payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
