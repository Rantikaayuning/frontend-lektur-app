import { LOGIN, LOGOUT } from "../types/UserLogin";

const initialState = {
  token: localStorage.getItem("access_token") || "",
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
    default:
      return { ...state };
  }
};

export default userReducer;
