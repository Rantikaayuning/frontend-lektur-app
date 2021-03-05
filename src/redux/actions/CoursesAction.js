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
  GET_POPUP_CONTENT,
  GET_POPUP_MATERIAL,
  GET_CONTENT_DETAIL,
  UPDATE_COURSE,
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
            background: response.data.result.course.image,
            detailTitle: response.data.result.course.title,
            detailOverview: response.data.result.course.overview,
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
        console.log(response.data.result.dataCourse)
        dispatch({
          type: GET_TEACHER_COURSES,
          payload: response.data.result.dataCourse,
        });
      }
    })
    .catch(() => {
      console.log('error');
    });
  }

export const getPopUpContent = (id) => (dispatch) => {
  API.get(`student/pop-up/course/content?courseId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      dispatch({
        type: GET_POPUP_CONTENT,
        payload: response.data.result,
      });
    })
    .catch(() => {
      console.log('error');
    });
  }
  
export const getPopUpMaterial = (id) => (dispatch) => {
  API.get(`student/pop-up/course/materials?courseId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      // console.log("response", response)
      dispatch({
        type: GET_POPUP_MATERIAL,
        payload: response.data.result,
      });
    })
    .catch(() => {
      console.log('error');
    });
  }

export const getContentDetail = (id) => (dispatch) => {
  API.get(`student/course/content?contentId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      // console.log("response", response)
      dispatch({
        type: GET_CONTENT_DETAIL,
        payload: response.data.result,
      });
    })
    .catch(() => {
      console.log('error');
    });
  }

export const updateCourse = (id, title, overview) => (dispatch) => {
  API.put(`/courses/update?courseId=${id}`,{title, overview}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      dispatch({
        type: UPDATE_COURSE,
        payload: response.data.result,
      });
    })
    .catch(() => {
      console.log('error');
    });
}

export const postCourse = (title, overview, file) => (dispatch) => {
  const form = {title, overview, file}

  const data = new FormData();
  Object.keys(form).forEach(key => 
  data.append(key, form[key]));
  
  API.post("/courses/create", data, 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  )
    .then((response) => {
        if(response.status === 201){
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

export const uploadMaterial = (idContent, material) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  API.post(`/content/upload/file?contentId=${idContent}` , material, config)
    .then((response) => {
      if(response.status === 201) {
        dispatch({
          type: UPLOAD_MATERIAL,
          payload: response.data.result,
        })
      }
    })
}

export const uploadVideo = (idContent, video) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  API.put(`/content/upload/video?contentId=${idContent}`, video, config)
    .then((response) => {
      if(response.status === 201) {
        dispatch({
          type: UPLOAD_VIDEO,
          payload: response.data.result,
        })
      }
  })
}

export const uploadImage = (id, file) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  API.put(`/courses/header/upload?courseId=${id}`, file, config)
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