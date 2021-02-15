import API from '../../api/index';
import {LOGIN} from "../types/UserLogin"

export const postLogin = (body) => (dispatch) => {
    API.post('/users/login', body)
    .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: LOGIN,
            payload: response.data.message,
            token: localStorage.setItem("token", response.data.data.token)
          });
        }
      });

    }



