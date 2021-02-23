import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail, getCourses, postEnrollCourse } from "../../redux/actions/CoursesAction";

import ContentCards from "../../components/ContentCard/Cards";
import defaultImg from "../../assets/RectangleSquare.png";

function CourseDetail() {
  const [PopUpCourseDetail, setPopUpCourseDetail] = useState(false);
  // const [isEnroll, setEnroll] = useState(false)

  const { id } = useParams();
  const dispatch = useDispatch();

  const {courseDetail, courses} = useSelector(state => state.courses);
  const {userProfile, isAuthentificated} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(getCourses());
  }, [dispatch, id]);

  const handleEnroll = () => {
    dispatch(postEnrollCourse(id))
    // setEnroll(true)
    setPopUpCourseDetail(true)
  }

  console.log(courseDetail)

  return (
    <div className="main-course">
      {courseDetail === null ? (
        <div id="loader"></div>
      ) : (
        <>
          <div className="course-detail" id="myDiv">
            <div className="course-detail-left">
              <p className="p1">Business</p>
              <p className="p2">{courseDetail.course.title}</p>
              <p className="p3">By {courseDetail.course.teacherId.fullname}</p>
              {userProfile ? (
                <div>
                  {userProfile.status === 0 ? (
                    <button onClick={handleEnroll}>
                      Enroll Now
                    </button>
                  ) : null}
                </div>
              ) : (
                <button onClick={handleEnroll}>
                  Enroll Now
                </button>
              )}
            </div>
            <div className="course-detail-right flex">
              <div>
                <p className="p1">{courseDetail.course.totalVideo}</p>
                <p className="p2">Learning Videos</p>
              </div>
              <div>
                <p className="p1">{courseDetail.course.totalMaterial}</p>
                <p className="p2">Study Material</p>
              </div>
              <div className="course-detail-right-material">
                <p>Content</p>
                <ul>
                  <li>
                    {courseDetail.content.map((item, index) => (
                    <div className="rectangle">
                      <p>Lesson #{item.number + 1}: {item.title}</p>
                    </div>
                    ))}
                  </li>
                  {/* <li>
                    <div className="rectangle">
                      <p>Lesson #2: </p>
                    </div>
                  </li>
                  <li>
                    <div className="rectangle">
                      <p>Lesson #3: </p>
                    </div>
                  </li>
                  <li>
                    <div className="rectangle">
                      <p>Lesson #4: </p>
                    </div>
                  </li>
                  <li>
                    <div className="rectangle">
                      <p>Lesson #5: </p>
                    </div>
                  </li>
                  <li>
                    <div className="rectangle">
                      <p>Lesson #6: </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="course-center">
              <h5>Description</h5>
              <p>{courseDetail.course.overview}</p>
            </div>
          </div>
          <div className="card-content">
            <div className="card-text-course">Related Course</div>
            <Row className="content-card-container">
              {courses.map((item, index) => (
                <Col xl="3" md="6" sm="12" key={index} className="card-container">
                  <Link
                    to={`/course-detail/${item._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ContentCards
                      image={defaultImg}
                      text={item.overview}
                      title={item.title}
                      lecture={item.teacherId.fullname}
                      video_numbers={item.totalVideo}
                      material_numbers={item.totalMaterial}
                      footer="Business"
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
          <Modal
            show={PopUpCourseDetail}
            size="lg"
            onHide={() => setPopUpCourseDetail(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            {isAuthentificated ? (
              <>
                <Modal.Header closeButton>
                  <div className="modal-central" closeButton>
                    <div className="modal-central-image"><img src={defaultImg} alt='default'/></div>
                    <div className="modal-central-content">
                      <p className="p1">Successfully enrolled!</p>
                      <p className="p2">{courseDetail.course.title}</p>
                      <p className="p3">{courseDetail.course.teacherId.fullname}</p>
                    </div>
                  </div>
                </Modal.Header>
                <div className="modal-central-body">
                  <p>Please wait coresponding teacher approve you!</p>
                </div>
              </>
            ) : (
              <Modal.Header closeButton>
                <div className="modal-central-login" closeButton>
                  <div className="modal-central-content-login">
                    <p>
                      Please <Link to="/login">login</Link> to enroll this
                      course !
                    </p>
                  </div>
                  {/* <div className="modal-central-body-login">
                <Link to="/login">LOGIN</Link>   
              </div> */}
                </div>
              </Modal.Header>
            )}
          </Modal>
        </>
      )}
    </div>
  );
}

export default CourseDetail;
