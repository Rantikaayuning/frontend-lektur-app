import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  PUT_FINAL_SCORE,
  UPDATE_QUESTION,
} from "../types/AssessmentTypes";

const initialState = {
  assessment: [],
  addAssessment: null,
  finalScore: null,
  updateCreatedQuestion: null,
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
    case PUT_FINAL_SCORE:
      return {
        ...state,
        finalScore: payload,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        updateCreatedQuestion: payload,
      };

    default:
      return state;
  }
};

export default assessmentReducer;
