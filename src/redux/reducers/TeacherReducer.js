import { getRoles } from "@testing-library/react";
import {GET_PROFILE_TEACHER, CREATE_COURSE} from "../types/TeacherTypes";

const initialState = {
     getTeacher : [],
     createCourses : null,
     id: null,
}

const teacherReducer = (state = initialState, action) => {
    const {payload, type, id} = action;
    switch (type) {
        case GET_PROFILE_TEACHER:
            return{
                ...state,
                getTeacher: payload,
            }
        case CREATE_COURSE:
            return{
                ...state,
                createCourses: payload, 
                id: id,
            }   
         default :
            return state;
    }
}

export default teacherReducer;


