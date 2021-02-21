import API from "../../api/index";
import {
  LOGIN,
  GET_USER_PROFILE,
  SIGN_UP,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

// const token = localStorage.getItem("token"); 
const token = Cookies.get("token");

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: LOGIN,
          payload: response.data.message,
          // token: localStorage.setItem("token", response.data.token), // this can be deleted and replaced by token: response.data.data.token
          token: Cookies.set("token", response.data.token),
          role: jwt_decode(response.data.token).status,
        });

        // localStorage.setItem("token", response.data.token);
        Cookies.set("token", response.data.token); // currently not used

        getUserProfile();
      }
    })
    .catch((payload) => {
      alert(payload.response.data.message);
    });
};

export const postSignup = (role, payload) => (dispatch) => {
  API.post(`/users/register?status=${role}`, payload)
    .then((response) => {
      if (response.status === 201) {
        dispatch({
          type: SIGN_UP,
          payload: response.data.message,
        });
        alert(`${response.data.message}, please continue to login`);
      }
    })
    .catch((payload) => {
      alert(payload.response.data.message);
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
        console.log(response.data.result);
        dispatch({
          type: GET_USER_PROFILE,
          payload: response.data.result,
        });
      }
    })
    .catch((error) => console.log("USER PROFILE ERROR:", error));
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
        payload: response.data.result,
      });

      getUserProfile();
    }
  });
};
