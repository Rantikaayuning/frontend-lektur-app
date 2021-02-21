import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";
import coursesReducer from "./reducers/CoursesReducer"

export default combineReducers({
    users : userReducer,
    courses : coursesReducer,
});