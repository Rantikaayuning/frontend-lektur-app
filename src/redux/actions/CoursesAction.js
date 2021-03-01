import API from "../../api/index";
import {
  GET_ALL_COURSES,
  GET_COURSE_DETAIL,
  POST_ENROLL_COURSE,
  GET_COURSE_STUDENT,
  GET_STUDENT_ENROLL,
  GET_TEACHER_COURSES ,
  SEARCH_COURSE,
  CREATE_COURSE,
  GET_COURSE_FILLED,
  CREATE_CONTENT,
  UPLOAD_MATERIAL,
  UPLOAD_VIDEO,
  UPLOAD_IMAGE,
  DELETE_COURSE,
} from '../types/CoursesTypes'
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getCourses = (payload) => (dispatch) => {
    API.get("/courses/all", payload)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_ALL_COURSES,
            payload: response.data.result.result,
          });
        }
      })
      .catch(() => {
        console.log('error');
      });
  };

export const getCourseDetail = (id) => (dispatch) => {
    API.get(`/courses/detail?courseId=${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_COURSE_DETAIL,
            payload: response.data.result,
          });
        }
      })
      .catch(() => {
        console.log('error');
      });
  };

export const postEnrollCourse = (id) => (dispatch) => {
    API.post(`/student/course/enroll?courseId=${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } )
      .then((response) => {
        if (response.status === 201) {
          // console.log(response.data.result);
          dispatch({
            type: POST_ENROLL_COURSE,
            payload: response.data.result,
          });
        }
      })
      .catch(() => {
        console.log('error')
      });
  };

export const getStudentCourses = (payload) => (dispatch) => {
  API.get("/student/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    }}, payload)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_COURSE_STUDENT,
          payload: response.data.result,
        })
      }})
      .catch(() => {
        console.log('error')
      });
    }
  
export const getStudentEnroll = (id) => (dispatch) => {
  API.get(`teacher/courses/student?${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_STUDENT_ENROLL,
        });
      }})
      .catch(() => {
        console.log('error')
      });
    };

export const getCourseSearch = input => dispatch => {
  API.get(`/courses/search?search=${input}`)
    .then(response => {
      if (response.status === 200) {
        console.log("response", response.data.result)
        dispatch({
          type: SEARCH_COURSE,
          payload: response.data.result,
        });
      }
    })
    .catch(() => {
      console.log('error');
    });
  };

export const getTeacherCourses = () => (dispatch) => {
  API.get(`teacher/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.result[1])
        dispatch({
          type: GET_TEACHER_COURSES,
          payload: response.data.result[1],
        });
      }
    })
    .catch(() => {
      console.log('error');
    });
  }

export const postCourse = ( title, overview, category) => async (dispatch) => {
    return API.post("/courses/create", 
    {
        title, overview, category
      },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        if(response.status === 201){
            console.log(response.data.result._id);
            dispatch({
                type: CREATE_COURSE,
                payload: response.data.result,
                id: response.data.result._id,
                title: response.data.result.title,
                overview: response.data.result.overview,
            })  
        } 
    })
    .catch((error) => console.log(error))
}

export const getCourseFilled = (id) => (dispatch) => {
  API.get(`/courses/filled?courseId=${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }})
  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type:   GET_COURSE_FILLED,
        payload: response.data.result.course,
        content: response.data.result.content,
        material: response.data.result.material,
      })
    }
  })
  .catch((error) => console.log(error))
}

export const postContent = (id, title, description, number ) => (dispatch) => {
  return API.post(`/content/create?courseId=${id}`,  
  {
    title, description, number
  },{
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      if(response.status === 200) {
        console.log(response.data.result);
        dispatch({
          type: CREATE_CONTENT,
          payload: response.data.result,
          idContent: response.data.result._id,
        })
      }
    })
}

export const uploadMaterial = (idContent, file) => (dispatch) => {
  API.post(`/content/upload/file?contentId=${idContent}` , {file} ,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    }})
    .then((response) => {
      if(response.status === 201) {
        console.log(response.data.result);
        dispatch({
          type: UPLOAD_MATERIAL,
          payload: response.data.result,
        })
      }
    })
}

export const uploadVideo = (idContent, video) => (dispatch) => {
  API.put(`/content/upload/video?contentId=${idContent}`, 
  {
    video
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    }})
    .then((response) => {
      if(response.status === 201) {
        console.log(response.data.result);
        dispatch({
          type: UPLOAD_VIDEO,
          payload: response.data.result,
        })
      }

  })
}

export const uploadImage = (id, file) => (dispatch) => {
  API.put(`/courses/header/upload?courseId=${id}`, 
  {
    file
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    }})
    .then((response) => {
      if(response.status === 201) {
        console.log(response.data.result);
        dispatch({
          type: UPLOAD_IMAGE,
          payload: response.data.result,
        })
      }

  })
}

export const deleteCourse = (id) => () => {
	return new Promise((resolve) => {
    API.delete(`/courses/delete?courseId=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => console.log(err))
	})
}