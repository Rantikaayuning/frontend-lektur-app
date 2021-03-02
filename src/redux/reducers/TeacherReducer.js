import {GET_PROFILE_TEACHER, CREATE_COURSE} from "../types/TeacherTypes";

const initialState = {
     getCourses : [],
     createCourses : null,
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


