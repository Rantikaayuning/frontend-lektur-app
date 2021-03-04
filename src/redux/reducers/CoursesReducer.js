import {
  GET_ALL_COURSES,
  GET_COURSE_DETAIL,
  GET_COURSE_STUDENT,
  POST_ENROLL_COURSE,
  GET_STUDENT_ENROLL,
  GET_TEACHER_COURSES,
  SEARCH_COURSE,
  GET_POPUP_CONTENT,
  GET_POPUP_MATERIAL,
  GET_CONTENT_DETAIL,
  GET_COURSE_FILLED,
  UPLOAD_IMAGE,
  UPDATE_COURSE
} from "../types/CoursesTypes";

const initialState = {
  courses: [],
  courseDetail: null,
  enrollCourse: null,
  studentCourses: [],
  studentEnrollList: [],
  teacherCourses: [],
  studentAssessment: [],
  searchCourse: '',
  popUpContent: {},
  popUpMaterial: [],
  contentDetail: {},
  courseFilled: null,
  background: null,
  image: null,
  detailTitle: null,
  detailOverview: null,
};

const coursesReducer = (state = initialState, action) => {
  const { type, payload, background, material, content, detailTitle, detailOverview} = action;
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
        background: background,
        detailTitle: detailTitle,
        detailOverview: detailOverview,
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
    case SEARCH_COURSE:
      return {
        ...state,
        searchCourse: payload,
      };
    case GET_POPUP_CONTENT:
      return {
        ...state,
        popUpContent: payload,
      };
    case GET_POPUP_MATERIAL:
      return {
        ...state,
        popUpMaterial: payload,
      };
    case GET_CONTENT_DETAIL:
      return {
        ...state,
        contentDetail: payload,
      };
     case GET_COURSE_FILLED:
      return {
        ...state,
        courseFilled: payload,
        contentFilled: content,
        materialFilled: material,
      }
     case UPLOAD_IMAGE:
      return {
        ...state,
        image: payload,
      }
    case UPDATE_COURSE:
      return{
        ...state,
        update: payload,
      } 



    default:
      return state;
  }
};

export default coursesReducer;
