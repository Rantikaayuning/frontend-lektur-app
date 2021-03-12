import {GET_HOMEPAGE} from "../types/HomePage"
import API from "../../api/index";

export const getHomepage = () => (dispatch) => {
    API.get("/all")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.result);
        dispatch({
          type: GET_HOMEPAGE,
          payload: response.data.data,
        });
      }
    })
    .catch((error) => console.log(error));
  }