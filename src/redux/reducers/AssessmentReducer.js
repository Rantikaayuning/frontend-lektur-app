import { GET_QUESTIONS, STUDENTS_ACCEPT } from "../types/AssessmentTypes";

const initialState = {
  assessment: null,
};

const assessmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        assessment: payload,
      };

    default:
      return state;
  }
};

export default assessmentReducer;
