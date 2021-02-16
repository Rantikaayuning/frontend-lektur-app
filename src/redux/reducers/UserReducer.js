import { GET_TOKEN, GET_USER_PROFILE, LOGIN } from "../types/UserLogin";

const initialState = {
  login: null,
  isAuthentificated: localStorage.getItem("token") ? true : false,
  userProfile: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: payload,
        isAuthentificated: true,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
  }
  return state;
};

export default userReducer;
