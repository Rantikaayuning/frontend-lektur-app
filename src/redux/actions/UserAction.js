import axios from "axios";

// import API from "../../api/index";
import { LOGIN, LOGOUT, USER_DATA } from "../types/UserLogin";

const baseURL = "https://lekturapp.herokuapp.com/api/";

export const postLogin = (email, password) => {
  return (dispatch) => {
    return axios
      .post(`${baseURL}users/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.data.token);
          dispatch({ type: LOGIN, payload: response.data.data.token });
        }
      })
      .catch((err) => console.log(err));
  };
};

// export const postRegister NOT YET

export const postLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch({ type: LOGOUT });
  };
};

export const getUserData = () => {
  return (dispatch) => {
    return axios
      .get(`${baseURL}users/profile`)
      .then((response) => {
        dispatch({ type: USER_DATA, payload: response.data.data });
      })
      .catch((error) => console.log(error));
  };
};
