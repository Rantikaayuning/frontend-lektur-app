import {
  GET_ALL_COURSES,
  GET_COURSE_DETAIL,
  GET_COURSE_STUDENT,
  POST_ENROLL_COURSE,
  GET_STUDENT_ENROLL,
  GET_TEACHER_COURSES,
  SEARCH_COURSE,
  CREATE_COURSE,
  GET_COURSE_FILLED,
  CREATE_CONTENT,
  UPLOAD_MATERIAL,
  UPLOAD_VIDEO,
  UPLOAD_IMAGE,
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
  createCourses : null,
  id: null,
  getTitle: null,
  getOverview: null,
  courseFilled: null,
  content:null,
  idContent: null,
  material: null,
  vidio: null,
  image: null,
};

const coursesReducer = (state = initialState, action) => {
  const { type, payload, id, title, overview, idContent, content, material } = action;
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
    case CREATE_COURSE:
      return{
        ...state,
        createCourses: payload,
        id: id,
        getTitle: title,
        getOverview: overview, 
      }  
    case GET_COURSE_FILLED:
      return {
        ...state,
        courseFilled: payload,
        contentFilled: content,
        materialFilled: material,
      }
    case CREATE_CONTENT:
      return{
        ...state,
        content: payload,
        idContent: idContent,
      }
    case UPLOAD_MATERIAL:
      return{
        ...state,
        material: payload,
      }
    case UPLOAD_VIDEO:
      return {
        ...state,
        video: payload,
      }
    case UPLOAD_IMAGE:
      return {
        ...state,
        image: payload,
      }
    default:
      return state;
  }
};

export default coursesReducer;
