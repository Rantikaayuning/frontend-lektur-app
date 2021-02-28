import {GET_PROFILE_TEACHER} from "../types/TeacherTypes";

const initialState = {
     getCourses : [],
     
}

const teacherReducer = (state = initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_PROFILE_TEACHER:
            return{
                ...state,
                getCourses: payload,
            }       
         default :
            return state;
    }
}

export default teacherReducer;


