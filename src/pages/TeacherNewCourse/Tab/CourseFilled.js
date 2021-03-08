import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
// import Comp1 from "../../../assets/RectangleComputer.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseFilled,
  deleteCourse,
  getCourseDetail,
} from "../../../redux/actions/CoursesAction";

function CourseFilled() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    courseFilled,
    contentFilled,
    materialFilled,
    courseDetail,
    background,
  } = useSelector((state) => state.courses);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getCourseFilled(id));
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  const deleteCourseTeacher = () => {
    dispatch(deleteCourse(id));
    history.push("/teacher-dashboard");
  };

  console.log(courseDetail);
  return (
    <>
      {courseFilled === null ? (
        <div id="loader"></div>
      ) : (
        <>
          <div className="main-course-filled">
            <div className="teacher-dashboard-list">
              <p className="open">Course</p>
              <Link to={`/teacher-new-assessment/${id}`}>
                <p>Assessment</p>
              </Link>
              <Link to={`/teacher-new-students/${id}`}>
                <p>Students</p>
              </Link>
            </div>
            <div
              className="course-detail"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <div className="course-detail-filled">
                <span>{courseFilled.title}</span>
                <Link to={`/course-change-teacher/${id}`}>
                  <i class="fa fa-pencil "></i>
                </Link>
                <p>{courseFilled.overview}</p>
              </div>
            </div>
            <div className="course-filled-content">
              <p>Content*</p>
              <div className="course-filled-content-box">
                <div className="course-filled-content-card">
                  {contentFilled.map((item, index) => (
                    <div className="card-filled">
                      <div className="course-filled-content-card-left">
                        <span className="span">
                          Lesson #{index + 1} : {item.title}{" "}
                        </span>
                        <Link to={`/course-change-teacher/${id}`}>
                          <i className="fa fa-pencil "></i>
                        </Link>
                        <br />
                        <>
                          {item.description === null ? null : (
                            <span className="span-paragraph">
                              {item.description}
                            </span>
                          )}
                        </>
                        <br />
                        {materialFilled.map((materi, index) => (
                          <>
                            {materi.contentId === item._id ? (
                              <>
                                <Link to={`/course-change-teacher/${id}`}>
                                  <i class="fa fa-file files"></i>
                                </Link>
                                <a href={materi.material} target="_blank" rel="noreferrer">
                                  <span className="span-detail">
                                    {item.title} {index + 1}.pdf
                                  </span>
                                </a>
                              </>
                            ) : null}
                            <br />
                          </>
                        ))}
                      </div>
                      <div className="image-computer1">
                        {item.video === null ? null : (
                          <iframe src={`${item.video}`} title="glints" />
                        )}
                        {/* <img src={Comp1} alt="comp1" /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <u className="add-new-lesson">Add New Lesson</u>
              <Link to={`/teacher-new-assessment/${id}`}>
                <button> Save Changes</button>
              </Link>
              <u className="delete-course" onClick={deleteCourseTeacher}>
                Delete Course
              </u>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CourseFilled;
