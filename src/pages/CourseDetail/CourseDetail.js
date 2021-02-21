import React, { useState, useEffect } from "react";
import { useHistory, Link} from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial, staticImage } from "../../assets/JSONFile/dummyData";

function CourseDetail(props) {
  const [PopUpCourseDetail, setPopUpCourseDetail] = useState(false);
  let history = useHistory();

  function handleClick() {
    history.push("/course-detail");
  }

  console.log(props.userProfile);
  return (
    <div className="main-course">
      <div className="course-detail">
        <div className="course-detail-left">
          <p className="p1">{staticImage[0].footer}</p>
          <p className="p2">{staticImage[0].title}</p>
          <p className="p3">{staticImage[0].lecture}</p>
          {props.userProfile ? (
              <div> 
                {props.userProfile.status === 0 ? (
                <button onClick={() => setPopUpCourseDetail(true)}>Enroll Now</button>
                ) : null }
              </div>
            ) : (
              <button onClick={() => setPopUpCourseDetail(true)}>Enroll Now</button>
            )}
        </div>
        <div className="course-detail-right flex">
          <div>
            <p className="p1">14</p>
            <p className="p2">Learning Videos</p>
          </div>
          <div>
            <p className="p1">12</p>
            <p className="p2">Study Material</p>
          </div>
          <div className="course-detail-right-material">
            <p>Content</p>
            <ul>
              <li>
                <div className="rectangle">
                  <p>Lesson #1: What is {staticImage[0].title}?</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #2: How to make {staticImage[0].title}?</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #3: Why {staticImage[0].title}?</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #4: About {staticImage[0].title}</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #5: About {staticImage[0].title}</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #6: About {staticImage[0].title}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="course-center">
          <h5>Description</h5>
          <p>{staticImage[0].description}</p>
        </div>
      </div>
      <div className="card-content" onClick={handleClick}>
        <div className="card-text-course">Related Course</div>
        <Row className="content-card-container">
          {cardMaterial.map((item, index) => (
            <Col xl="3" key={index} className="card-container">
              <ContentCards
                image={item.image}
                text={item.text}
                title={item.title}
                lecture={item.lecture}
                video_numbers={item.video_numbers}
                material_numbers={item.material_numbers}
                footer={item.footer}
              />
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
        {props.auth ? (  
        <>
          <Modal.Header closeButton>
            <div className="modal-central" closeButton>
              <div className="modal-central-image"></div>
              <div className="modal-central-content">
                <p className="p1">Successfully enrolled!</p>
                <p className="p2">{staticImage[0].title}</p>
                <p className="p3">{staticImage[0].lecture}</p>
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

const mapStateToProps = (state) => {
  return {
    userProfile: state.users.userProfile,
    auth: state.users.isAuthentificated,
  };
};

export default connect(mapStateToProps)(CourseDetail);
