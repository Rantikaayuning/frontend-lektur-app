import {
  GET_ALL_COURSES,
  GET_COURSE_DETAIL,
  SEARCH_COURSE,
} from "../types/CoursesTypes";

const initialState = {
  courses: [],
  courseDetail: null,
  searchCourse: [],
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
    case SEARCH_COURSE:
      return {
        ...state,
        searchCourse: payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
