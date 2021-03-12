import {GET_HOMEPAGE} from "../types/HomePage"

const initialState = {
    homePage: null,
}

const homePageReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_HOMEPAGE:
      return{
        ...state,
        homePage: payload,
      }
    default:
      return state;
    }
}

export default homePageReducer;