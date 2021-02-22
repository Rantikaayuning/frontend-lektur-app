import API from "../../api/index";
import { GET_ALL_COURSES, GET_COURSE_DETAIL, POST_ENROLL_COURSE, GET_COURSE_STUDENT } from '../types/CoursesTypes'
import Cookies from "js-cookie";

const token = Cookies.get("token");

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
        alert('error');
      });
  };

export const getCourseDetail = (id) => (dispatch) => {
    API.get(`/courses/detail?courseId=${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_COURSE_DETAIL,
            payload: response.data.result,
          });
        }
      })
      .catch(() => {
        alert('error');
      });
  };

export const postEnrollCourse = (id) => (dispatch) => {
    API.post(`/student/course/enroll?courseId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } )
      .then((response) => {
        if (response.status === 201) {
          // console.log(response.data.result);
          dispatch({
            type: POST_ENROLL_COURSE,
            payload: response.data.result,
          });
        }
      })
      .catch((error) => {
        alert(error.data.message)
      });
  };

export const getStudentCourses = (payload) => (dispatch) => {
  API.get("/student/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    }}, payload)
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data.result)
        dispatch({
          type: GET_COURSE_STUDENT,
          payload: response.data.result,
        });
      }
    })
    .catch(() => {
      alert('error');
    });
  };
