import { LOGIN, LOGOUT, USER_DATA } from "../types/UserLogin";

const initialState = {
  token: localStorage.getItem("access_token") || "",
  userData: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
      };
    case USER_DATA: {
      return {
        ...state,
        userData: payload,
      };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
