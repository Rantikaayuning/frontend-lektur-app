import API from "../../api/index";
import {
  LOGIN,
  GET_USER_PROFILE,
  SIGN_UP,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const token = localStorage.getItem("token"); //   const token = Cookies.get("token");

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        token: localStorage.setItem("token", response.data.data.token), // this can be deleted and replaced by token: response.data.data.token
        role: jwt_decode(localStorage.getItem("token")).status,
      });

      localStorage.setItem("token", response.data.data.token);
      Cookies.set("token", response.data.data.token); // currently not used

      getUserProfile();
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
  API.get("/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
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

export const updateUserProfile = (fullname, email) => (dispatch) => {
  API.put(
    "/users/update",
    {
      fullname,
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: response.data.data,
      });

      getUserProfile();
    }
  });
};
