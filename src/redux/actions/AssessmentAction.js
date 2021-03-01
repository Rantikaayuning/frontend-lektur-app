import API from "../../api/index";
import { GET_QUESTIONS } from "../types/AssessmentTypes";

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
