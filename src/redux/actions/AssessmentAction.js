import API from "../../api/index";
import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  GET_QUESTIONS_TEMP,
} from "../types/AssessmentTypes";

import Cookies from "js-cookie";

const token = Cookies.get("token");

// export const getQuestions = (id) => (dispatch) => {
export const getQuestions = (id) => (dispatch) => {
  API.get(`/assessment/?courseId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_QUESTIONS,
          payload: response.data.result,
        });
      }
    })
    .catch((err) => alert(err));
};

// should be body here
// export const postAssessment = (body, id) => (dispatch) => {
export const postAssessment = (body) => async (dispatch) => {
  // (`/assessment/create?courseId=${id}`)
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
        // alert("question created successfully");
      }
    })
    .catch((payload) => alert(payload.response.data.message));
};

// export const getQuestions = (id) => (dispatch) => {
export const getQuestionsTemp = (id) => (dispatch) => {
  // API.get(`/assessment/?courseId=${id}`, {
  API.get(`/assessment/?courseId=602e06cc34a3a426b0311c94`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_QUESTIONS_TEMP,
          payload: response.data.result,
        });
      }
    })
    .catch((err) => alert(err));
};

export const deleteQuestion = (id) => () => {
  return new Promise((resolve) => {
    API.delete(
      `/assessment/delete?courseId=602e06cc34a3a426b0311c94&questionId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((err) => alert("error delete question", err));
  });
};
