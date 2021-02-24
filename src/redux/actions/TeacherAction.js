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

export const postCourse = ( title, overview, category) => async (dispatch) => {
    API.post("/courses/create", 
    {
        title, overview, category
      },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        if(response.status === 201){
            console.log(response.data.result._id);
            dispatch({
                type: CREATE_COURSE,
                payload: response.data.result,
                id: response.data.result._id,
            })  
        } 
    })
    .catch((error) => console.log(error))
}