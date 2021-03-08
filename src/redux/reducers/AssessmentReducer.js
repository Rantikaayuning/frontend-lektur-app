import {
  GET_QUESTIONS,
  POST_QUESTIONS,
  PUT_FINAL_SCORE,
  UPDATE_QUESTION,
  GET_ONE_QUESTION,
} from "../types/AssessmentTypes";

const initialState = {
  assessment: [],
  addAssessment: null,
  finalScore: null,
  updateCreatedQuestion: null,
  questionById: null,
  questionText: null,
  questionNumber: null,
  questionRemarks: null,
  questionOptions: null,
};

const assessmentReducer = (state = initialState, action) => {
  const {
    type,
    payload,
    questionText,
    questionNumber,
    questionRemarks,
    questionOptions,
  } = action;
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
    case GET_ONE_QUESTION:
      return {
        ...state,
        questionById: payload,
        questionText: questionText,
        questionNumber: questionNumber,
        questionRemarks: questionRemarks,
        questionOptions: questionOptions,
      };
    default:
      return state;
  }
};

export default assessmentReducer;
