import { GET_ALL_COURSES, GET_COURSE_DETAIL } from '../types/CoursesTypes'

const initialState = {
    courses: [],
    courseDetail: [],
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
      default :
        return state;
    }
  };
  
  export default coursesReducer;
  