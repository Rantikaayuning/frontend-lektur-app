import API from "../../api/index";
import { LOGIN, SIGNUP_STUDENT, SIGNUP_TEACHER } from "../types/UserLogin";

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: LOGIN,
          payload: response.data.msg,
          token: localStorage.setItem("token", response.data.data.token),
        });
      }
    })
    .catch((payload) => {
      alert(payload.response.data.msg);
    });
};

export const signup = (role, payload) => (dispatch) => {
  API.post(`/users/register?status=${role}`, payload)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGNUP_TEACHER,
          payload: response.data.msg,
        });
        alert("Sign up is successful, please continue to login");
      }
    })
    .catch((payload) => {
      alert(payload.response.data.msg);
    });
};
