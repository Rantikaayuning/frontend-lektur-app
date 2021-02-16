import {LOGIN, SIGN_UP} from "../types/UserLogin"

const initialState = {
    login: null,
    signup: null,
    status: '',
    isAuthentificated: localStorage.getItem("token") ? true : false,
    
}

const userReducer = (state = initialState, action) => {
    const {type, payload, role} = action;
    switch (type) {
        case LOGIN :
            return {
                ...state,
                login : payload,
                status: role,
                isAuthentificated: true,
            }
        case SIGN_UP :
            return {
                ...state,
                signup : payload,
            }
    }
    return state;
}

export default userReducer;