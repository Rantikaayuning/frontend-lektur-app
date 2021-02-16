import API from "../../api/index";
import {
  LOGIN,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from "../types/UserLogin";

export const postLogin = (body) => (dispatch) => {
  API.post("/users/login", body).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        token: localStorage.setItem("token", response.data.data.token),
      });
    }
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
