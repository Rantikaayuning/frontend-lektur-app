import API from "../../api/index";
import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  GET_QUESTIONS_TEMP,
  PUT_FINAL_SCORE,
  UPDATE_QUESTION,
} from "../types/AssessmentTypes";

import Cookies from "js-cookie";

const token = Cookies.get("token");

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
        alert("question created successfully");
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

export const deleteQuestion = (courseId, id) => () => {
  return new Promise((resolve) => {
    API.delete(`/assessment/delete?courseId=${courseId}&questionId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        alert("question deleted");
      })
      .catch((err) => alert("error delete question", err));
  });
};

export const putFinalScore = (score, id) => (dispatch) => {
  API.put(
    `/assessment/result?courseId=${id}`,
    {
      score
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
        console.log('score', score);
        dispatch({
          type: PUT_FINAL_SCORE,
          payload: response.data.result,
        })
    })
    .catch((payload) => alert(payload.response.data.message));
};

export const updateQuestion = (body, id, questionId) => async (dispatch) => {
  API.put(
    `/assessment/update?courseId=${id}&questionId=${questionId}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        console.log(body);
        console.log(response.data);
        dispatch({
          type: UPDATE_QUESTION,
          payload: response.data,
        });
        alert("question updated"); // response.data.message
      }
    })
    .catch((payload) => alert(payload.response.data.message));
};
