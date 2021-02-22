import API from "../../api/index";
import { GET_QUESTIONS } from '../types/AssessmentTypes'

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
        .catch(() => console.log('error'));
    };