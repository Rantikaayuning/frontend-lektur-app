import {GET_HOMEPAGE} from "../types/HomePage"

const initialState = {
    homePage: null,
    category: null,
}

const homePageReducer = (state = initialState, action) => {
    const {type, payload, category} = action
    switch (type) {
        case GET_HOMEPAGE:
      return{
        ...state,
        homePage: payload,
        category: category,
      }
    default:
      return state;
    }
}

export default homePageReducer;