import API from "../../api/index";
import { GET_ALL_COURSES, GET_COURSE_DETAIL } from '../types/CoursesTypes'

export const getCourses = (payload) => (dispatch) => {
    API.get("/courses/all", payload)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_ALL_COURSES,
            payload: response.data.result.result,
          });
        }
      })
      .catch(() => {
        alert('try again');
      });
  };

export const getCourseDetail = (id) => (dispatch) => {
    API.get(`/courses/detail?courseId=${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_COURSE_DETAIL,
            payload: response.data.result[0],
          });
        }
      })
      .catch(() => {
        alert('try again');
      });
  };