import { GET_QUESTIONS, POST_QUESTIONS } from "../types/AssessmentTypes";

const initialState = {
  assessment: null,
  addAssessment: null,
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
    default:
      return state;
  }
};

export default assessmentReducer;
