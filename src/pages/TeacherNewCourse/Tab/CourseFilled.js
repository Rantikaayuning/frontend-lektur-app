import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comp1 from "../../../assets/RectangleComputer.png";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../../redux/actions/CoursesAction"

function CourseFilled() {
  const dispatch = useDispatch()
  const {courseDetail} = useSelector(state => state.courses)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  console.log(courseDetail)
  return (
      <>
      {courseDetail === null ? (
        <div id='loader'></div>
      ) : (
      <>
      <div className="main-course-filled">
        <div className="teacher-dashboard-list">
          <p className='open'>Course</p>
          <Link to='/teacher-new-assessment'>
              <p>Assessment</p>
          </Link>
          <Link to='/teacher-new-students'>
              <p>Students</p>
          </Link>
        </div>
        <div className="course-detail">
          <div className="course-detail-filled">
            <span>{courseDetail.course.title}</span>
            <Link to={`/course-change-teacher/${id}`}>
              <i class="fa fa-pencil "></i>
            </Link>
            <p>
              {courseDetail.course.overview}
            </p>
          </div>
        </div>
        <div className="course-filled-content">
          <p>Content*</p>
          <div className="course-filled-content-box">
          <div className="course-filled-content-card">
              {/* {courseDetail.content.map((item, index) => ( */}
                <>
            <div className="course-filled-content-card-left">
              {/* <span className="span">Lesson #{courseDetail.content[0].number} : {courseDetail.content[0].title} </span> */}
              <Link to={`/course-change-teacher/${id}`}>
              <i className="fa fa-pencil "></i>
              </Link>
              <span className="span-paragraph">
              Create React App is a comfortable environment for learning React.
              </span>
              <Link to={`/course-change-teacher/${id}`}>
              <i class="fa fa-file files"></i>
              </Link>
              <span className="span-detail">React and Open Source.pdf</span>
              <br />
              <Link to={`/course-change-teacher/${id}`}>
              <i className="fa fa-file files"></i>
              </Link>
              <span>Just Javascript.pdf</span>
            </div>
            <div className="image-computer1">
              <img src={Comp1} alt="comp1" />
            </div>
                </>
            {/* ))} */}
            </div>
            </div>
          {/* <div className="course-filled-content-card">
            <div className="course-filled-content-card-left">
              <span className="span">Lesson #2 : Create React App </span>
              <Link to={`/course-change-teacher/${id}`}>
              <i className="fa fa-pencil "></i>
              </Link>
              <span className="span-paragraph">
              Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
              </span>
            </div>
            <div className="image-computer1">
              <img src={Comp2} alt="comp2" />
            </div>
          </div> */}
          <u className="add-new-lesson">Add New Lesson</u>
          <button> Save Changes</button>
          <u className="delete-course">Delete Course</u>
        </div>
      </div>
      </>
    )}
    </>
  );
}



export default CourseFilled;


