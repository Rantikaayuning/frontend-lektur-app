import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Row, Col } from "reactstrap";
import { Modal } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import {getCourseDetail, getCourses} from "../../redux/actions/CoursesAction"

import ContentCards from "../../components/ContentCard/Cards";
import { staticImage } from "../../assets/JSONFile/dummyData";
import defaultImg from "../../assets/RectangleSquare.png"

function CourseDetail() {
  const [PopUpCourseDetail, setPopUpCourseDetail] = useState(false);

  const {id} = useParams();
  const dispatch = useDispatch();

  const courseDetail = useSelector(state => state.courses.courseDetail)
  const courses = useSelector(state => state.courses.courses)

  const userProfile = useSelector(state => state.users.userProfile)
  const auth = useSelector(state => state.users.isAuthentificated)

  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(getCourses())
  }, []);

  // console.log(courseDetail)

  return (
    <div className="main-course">
      <div className="course-detail">
        <div className="course-detail-left">
          <p className="p1">Business</p>
          <p className="p2">{courseDetail.title}</p>
          {/* <p className="p3">By {courseDetail.teacherId.fullname}</p> */}
          {userProfile ? (
              <div> 
                {userProfile.status === 0 ? (
                <button onClick={() => setPopUpCourseDetail(true)}>Enroll Now</button>
                ) : null }
              </div>
            ) : (
              <button onClick={() => setPopUpCourseDetail(true)}>Enroll Now</button>
            )}

        </div>
        <div className="course-detail-right flex">
          <div>
            <p className="p1">{courseDetail.totalVideo}</p>
            <p className="p2">Learning Videos</p>
          </div>
          <div>
            <p className="p1">{courseDetail.totalMaterial}</p>
            <p className="p2">Study Material</p>
          </div>
          <div className="course-detail-right-material">
            <p>Content</p>
            <ul>
              <li>
                <div className="rectangle">
                  <p>Lesson #1: </p>
                </div>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="course-center">
          <h5>Description</h5>
          <p>{courseDetail.overview}</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card-text-course">Related Course</div>
        <Row className="content-card-container">
          {courses.map((item, index) => (
            <Col xl="3" key={index} className="card-container">
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
        
        {auth ? (  
        <>
          <Modal.Header closeButton>
            <div className="modal-central" closeButton>
              <div className="modal-central-image"></div>
              <div className="modal-central-content">
                <p className="p1">Successfully enrolled!</p>
                <p className="p2">{courseDetail.title}</p>
                {/* <p className="p3">{courseDetail.teacherId.fullname}</p> */}
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
                <p>Please <Link to="/login">login</Link> to enroll this course !</p>
              </div>
              {/* <div className="modal-central-body-login">
                <Link to="/login">LOGIN</Link>   
              </div> */}
            </div>
          </Modal.Header>
        )}

      </Modal>
    </div>
  );
}

export default CourseDetail;
