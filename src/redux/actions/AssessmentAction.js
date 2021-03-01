import API from "../../api/index";
import { GET_QUESTIONS } from "../types/AssessmentTypes";
import { STUDENTS_ACCEPT } from "../types/TeacherTypes";

import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getQuestions = id => dispatch => {
  API.get(`/assessment/?courseId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        // console.log(response.data.result);
        dispatch({
          type: GET_QUESTIONS,
          payload: response.data.result,
        });
      }
    })
    .catch(() => console.log("error"));
};
export const studentAcceptance = (courseId, studentId) => dispatch => {
  API.put(
    `/teacher/courses/student/approve?courseId=${courseId}studentId=${studentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: STUDENTS_ACCEPT,
          payload: response.data.result,
        });
      }
    })
    .catch(error => console.log("USER PROFILE ERROR:", error));
};
