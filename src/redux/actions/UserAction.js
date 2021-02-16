import API from "../../api/index";
import { LOGIN, GET_USER_PROFILE, SIGN_UP } from "../types/UserLogin";
import jwt_decode from "jwt-decode";

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        token: localStorage.setItem("token", response.data.data.token),
        role: jwt_decode(localStorage.getItem("token")).status,
      });
    }
  });
};


export const signup = (role, payload) => (dispatch) => {
  API.post(`/users/register?status=${role}`, payload)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGN_UP,
          payload: response.data.msg,
        });
        alert("Sign up is successful, please continue to login");
      }
    })
    .catch((payload) => {
      alert(payload.response.data.msg);
    });
};


export const getUserProfile = () => (dispatch) => {
  API.get("/users/profile")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
        dispatch({
          type: GET_USER_PROFILE,
          payload: response.data.data,
        });
      }
    })
    .catch((error) => console.log(error));
};
