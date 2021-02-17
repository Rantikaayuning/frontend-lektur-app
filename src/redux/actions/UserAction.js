import API from "../../api/index";
import {
  LOGIN,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";
import Cookies from "js-cookie";

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        token: response.data.data.token,
      });
      localStorage.setItem("token", response.data.data.token);
      Cookies.set("token", response.data.data.token);

      getUserProfile();
    }
  });
};

export const getUserProfile = () => (dispatch) => {
  const token = Cookies.get("token");

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
  API.put("/users/update", {
    fullname,
    email,
  }).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: response.data.data,
      });
    }
  });
};
