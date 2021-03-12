import {GET_HOMEPAGE} from "../types/HomePage"
import Axios from "axios";

export const getHomepage = () => (dispatch) => {
    Axios.get("https://lekturapp.herokuapp.com/all")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        dispatch({
          type: GET_HOMEPAGE,
          payload: response.data.data,
          category: response.data.data.category,
        });
      }
    })
    .catch((error) => console.log(error));
  }