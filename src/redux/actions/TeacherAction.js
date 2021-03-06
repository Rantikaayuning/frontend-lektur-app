import API from "../../api/index";
import {
  GET_PROFILE_TEACHER,
  STUDENTS_ACCEPT,
  STUDENT_INVITE_SUCCESS,
  STUDENT_APPROVE,
} from "../types/TeacherTypes";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getTeacherProfile = () => dispatch => {
  API.get("/teacher/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: GET_PROFILE_TEACHER,
          payload: response.data.result[1],
        });
      }
    })
    .catch(error => console.log(error));
};
export const studentAcceptance = courseId => dispatch => {
  API.get(`/teacher/courses/student?courseId=${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log(response);
      dispatch({
        type: STUDENTS_ACCEPT,
        payload: response.data.result,
      });
    })
    .catch(error => console.log("USER PROFILE ERROR:", error));
};
export const studentInvite = (courseId, body) => dispatch => {
  API({
    method: "post",
    url: `/teacher/courses/invite?courseId=${courseId}`,
    data: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log(response);
      dispatch({
        type: STUDENT_INVITE_SUCCESS,
        payload: response.data.message,
      });
      alert(`${response.data.message}`);
    })
    .catch(error => console.log("USER PROFILE ERROR:", error));
};
export const putStudentApprove = (courseId, studentId) => dispatch => {
  API({
    method: "put",
    url: `/teacher/courses/student/approve?courseId=${courseId}&studentId=${studentId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log(response);
      dispatch({
        type: STUDENT_APPROVE,
        payload: response.data,
      });
    })
    .catch(error => console.log("USER PROFILE ERROR:", error));
};
// export const createCourse = ( title, overview, category) => (dispatch) => {
//     API.post("/courses/create",
//     {
//         title,
//         overview,
//         category,
//       },
//     {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     })
//     .then((response) => {
//         if(response.status === 201){
//             dispatch({
//                 type: CREATE_COURSE,
//                 payload: response.data.result,
//             })
//         }
//     })
//     .catch((error) => console.log(error))
// }
