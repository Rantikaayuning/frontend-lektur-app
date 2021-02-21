import {
  GET_USER_PROFILE,
  LOGIN,
  SIGN_UP,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";
import Cookies from "js-cookie";

const initialState = {
  login: null,
  signup: null,
  status: "",
  // isAuthentificated: localStorage.getItem("token") ? true : false,
  isAuthentificated: Cookies.get("token") ? true : false,
  userProfile: null,
  updateUser: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload, role } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: payload,
        status: role,
        isAuthentificated: true,
      };
    case SIGN_UP:
      return {
        ...state,
        signup: payload,
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
