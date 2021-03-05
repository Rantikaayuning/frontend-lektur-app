import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  GET_QUESTIONS_TEMP,
  PUT_FINAL_SCORE
} from "../types/AssessmentTypes";

const initialState = {
  assessment: null,
  addAssessment: null,
  assessmentTemp: null,
  inputAnswer: [],
  finalScore: null
};

const assessmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        assessment: payload,
      };
    case POST_QUESTIONS:
      return {
        ...state,
        addAssessment: payload,
      };
    case GET_QUESTIONS_TEMP:
      return {
        ...state,
        assessmentTemp: payload,
      };
    case PUT_FINAL_SCORE:
      return {
        ...state,
        finalScore: payload,
      };
    default:
      return state;
  }
};

export default assessmentReducer;
