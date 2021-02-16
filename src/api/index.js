import Axios from "axios";

const access_token = localStorage.getItem("token"); // to get the token

const API = Axios.create({
  baseURL: `/api`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

export default API;
