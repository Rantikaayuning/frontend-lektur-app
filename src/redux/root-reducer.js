import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";
import coursesReducer from "./reducers/CoursesReducer";
import teacherReducer from "./reducers/TeacherReducer";

export default combineReducers({
    users : userReducer,
    courses : coursesReducer,
    teachers: teacherReducer,
});