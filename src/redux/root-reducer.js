import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";
import coursesReducer from "./reducers/CoursesReducer"
import assessmentReducer from "./reducers/AssessmentReducer"

export default combineReducers({
    users : userReducer,
    courses : coursesReducer,
    assessment : assessmentReducer
});