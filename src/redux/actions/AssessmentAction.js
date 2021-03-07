import API from "../../api/index";
import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  PUT_FINAL_SCORE,
  UPDATE_QUESTION,
  GET_ONE_QUESTION,
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

export const postAssessment = (body, id) => async (dispatch) => {
  API.post(`/assessment/create?courseId=${id}`, JSON.stringify(body), {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  })
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

export const deleteQuestion = (courseId, questionId) => () => {
  return new Promise((resolve) => {
    API.delete(
      `/assessment/delete?courseId=${courseId}&questionId=${questionId}`,
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
        alert("question deleted");
      })
      .catch((err) => alert("error delete question", err));
  });
};

export const putFinalScore = (score, id) => (dispatch) => {
  API.put(
    `/assessment/result?courseId=${id}`,
    {
      score,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      console.log("score", score);
      dispatch({
        type: PUT_FINAL_SCORE,
        payload: response.data.result,
      });
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

export const getOneQuestion = (questionId) => (dispatch) => {
  API.get(`/assessment/question?questionId=${questionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_ONE_QUESTION,
          payload: response.data.result,
          questionText: response.data.result.question,
          questionNumber: response.data.result.number,
          questionRemarks: response.data.result.remarks,
          questionOptions: response.data.result.options,
        });
      }
      // alert(`question with questionId ${questionId} got dispatched`);
    })
    .catch((payload) => alert(payload.response.data.message));
};
