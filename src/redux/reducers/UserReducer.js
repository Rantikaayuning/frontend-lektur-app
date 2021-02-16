import {
  GET_USER_PROFILE,
  LOGIN,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";

const initialState = {
  login: null,
  isAuthentificated: localStorage.getItem("token") ? true : false,
  userProfile: null,
  updateUser: null,
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
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        updateUser: payload,
      };
  }
  return state;
};

export default userReducer;
