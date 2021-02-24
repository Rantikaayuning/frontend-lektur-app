import API from "../../api/index";
import { GET_QUESTIONS, POST_QUESTIONS } from "../types/AssessmentTypes";

import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getQuestions = () => (dispatch) => {
  API.get(`/assessment/?courseId=602e06cc34a3a426b0311c94`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.result);
        dispatch({
          type: GET_QUESTIONS,
          payload: response.data.result,
        });
      }
    })
    .catch(() => console.log("error"));
};

// 602e06cc34a3a426b0311c94

export const postAssessment = (body) => (dispatch) => {
  alert("dispatched assesment");

  API.post(
    `/assessment/create?courseId=602e06cc34a3a426b0311c94`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.status === 201) {
        console.log(body);
        dispatch({
          type: POST_QUESTIONS,
          payload: response.data.result,
        });
      }
    })
    .catch((error) => console.log(error));
};
