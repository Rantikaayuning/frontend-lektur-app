import {LOGIN, SIGNUP_STUDENT, SIGNUP_TEACHER} from "../types/UserLogin"

const initialState = {
    login: null,
    profile: null,
    signstudent:null,
    signteacher:null,
    isAuthentificated: localStorage.getItem("token") ? true : false,
}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOGIN :
            return {
                ...state,
                login : payload,
                isAuthentificated: true,
            }
         case SIGNUP_STUDENT:
            return {
                ...state,
                signstudent: payload,
            }
        case SIGNUP_TEACHER:
            return {
                ...state,
                signteacher: payload,
            }
    }
    return state;
}

export default userReducer;