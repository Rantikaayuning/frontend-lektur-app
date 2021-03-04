import API from "../../api/index";
import {GET_PROFILE_TEACHER, CREATE_COURSE} from "../types/TeacherTypes";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getTeacherProfile = () => (dispatch) =>{
    API.get("/teacher/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        if(response.status === 200){
            dispatch({
                type: GET_PROFILE_TEACHER,
                payload: response.data.result[1],
            })
        }
    })
    .catch((error) => console.log(error))
};
