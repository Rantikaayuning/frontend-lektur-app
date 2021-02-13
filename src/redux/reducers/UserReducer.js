import {LOGIN} from "../types/UserLogin"

const initialState = {
    login: null,
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
    }
    return state;
}

export default userReducer;