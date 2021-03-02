import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  GET_QUESTIONS_TEMP,
  INPUT_SCORE,
  UPDATE_QUESTION,
} from "../types/AssessmentTypes";

const initialState = {
  assessment: null,
  addAssessment: null,
  assessmentTemp: null,
  studentScore: null,
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
    case GET_QUESTIONS_TEMP:
      return {
        ...state,
        assessmentTemp: payload,
      };
    case INPUT_SCORE:
      return {
        ...state,
        studentScore: payload,
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
