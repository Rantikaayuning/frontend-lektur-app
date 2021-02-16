import { GET_USER_PROFILE, LOGIN, SIGN_UP } from "../types/UserLogin";

const initialState = {
  login: null,
  signup: null,
  status: '',
  isAuthentificated: localStorage.getItem("token") ? true : false,
  userProfile: null,
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
    case SIGN_UP :
        return {
           ...state,
           signup : payload,
      }

    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
  }
  return state;
};

export default userReducer;
