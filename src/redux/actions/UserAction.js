import API from "../../api/index";
import {
  LOGIN,
  GET_USER_PROFILE,
  SIGN_UP,
  UPDATE_USER_PROFILE,
  UPDATE_PROFILE_IMAGE,
} from "../types/UserLogin";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const postLogin = (body) => async (dispatch) => {
  return API.post("/users/login", body)
    .then((response) => {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        token: response.data.token,
        role: jwt_decode(response.data.token).status,
      });

      Cookies.set("token", response.data.token);
      return response.data.token;
    })
    .catch((payload) => {
      alert(payload.response.data.message);
    });
};

export const postSignup = (role, payload) => async (dispatch) => {
  // add async
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

export const getUserProfile = (access_token = null) => (dispatch) => {
  // console.log(access_token);
  API.get("/users/profile", {
    headers: {
      Authorization: access_token
        ? `Bearer ${access_token}`
        : `Bearer ${Cookies.get("token")}`,
    },
  })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: GET_USER_PROFILE,
        payload: response.data.result,
        // role: jwt_decode(response.data.token).status, // try here
      });
    })
    .catch((error) => console.log("USER PROFILE ERROR:", error));
};

export const updateUserProfile = (fullname, email) => async (dispatch) => {
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
    // console.log(response);
    if (response.status === 201) {
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: response.data.result,
      });
    }
    // return response.data.token;
  });
};

export const updateProfileImage = (file) => async (dispatch) => {
  const data = new FormData()
  data.append("file", file)

  API.put("/users/update/image", data, 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    dispatch({
      type: UPDATE_PROFILE_IMAGE,
      payload: response.data.result.Location,
      message: response.data.message,
    })
  })
  .catch((err) => alert("updated fail, try again!", err));
}