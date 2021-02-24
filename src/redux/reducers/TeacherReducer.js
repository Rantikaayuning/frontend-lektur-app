import {GET_PROFILE_TEACHER, CREATE_COURSE} from "../types/TeacherTypes";

const initialState = {
     getTeacher : [],
     createCourses : null,
}

const teacherReducer = (state = initialState, action) => {
    const {payload, type} = action;
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
            }   
         default :
            return state;
    }
}

export default teacherReducer;


