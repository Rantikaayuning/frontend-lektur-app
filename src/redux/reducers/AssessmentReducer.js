import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  GET_QUESTIONS_TEMP,
} from "../types/AssessmentTypes";

const initialState = {
  assessment: null,
  addAssessment: null,
  assessmentTemp: null,
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
    default:
      return state;
  }
};

export default assessmentReducer;
