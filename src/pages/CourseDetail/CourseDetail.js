import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Modal } from "react-bootstrap";

// import { Link } from 'react-router-dom'
import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial } from "../../assets/JSONFile/dummyData";

function CourseDetail() {
  const [PopUpCourseDetail, setPopUpCourseDetail] = useState(false);
  let history = useHistory();

  function handleClick() {
    history.push("/course-detail");
  }
  return (
    <div className="main-course">
      <div className="course-detail">
        <div className="course-detail-left">
          <p className="p1">Art & Humanity</p>
          <p className="p2">Create Cinematic Music Video</p>
          <p className="p3">By Justin Junaedi </p>
          <button onClick={() => setPopUpCourseDetail(true)}>Enroll Now</button>
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
                  <p>Lesson #1: What is React?</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #2: Create React App</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #3: CSS in React </p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #4: Lorem Ipsum</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #5: Lorem Ipsum</p>
                </div>
              </li>
              <li>
                <div className="rectangle">
                  <p>Lesson #6: Lorem Ipsum</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="course-center">
          <h5>Description</h5>
          <p>
            Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis,
            eget faucibus iaculis facilisi pellentesque eleifend mattis vel.
            Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci.
            Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu
            facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut
            tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices
            id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim,
            donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales
            rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris.
            Lobortis interdum imperdiet mauris pharetra risus proin etiam est.
          </p>
        </div>
      </div>
      <div className="card-content" onClick={handleClick}>
        <div className="card-text-course">Related Course</div>
        <Row className="content-card-container">
          {cardMaterial.map((item, index) => (
            <Col xs="6" sm="6" md="3" key={index} className="card-container">
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
        <Modal.Header closeButton>
          <div className="modal-central" closeButton>
            <div className="modal-central-image"></div>
            <div className="modal-central-content">
              <p className="p1">Successfully enrolled!</p>
              <p className="p2">Create Cinematic Music Video</p>
              <p className="p3">By John Doe</p>
            </div>
          </div>
        </Modal.Header>
        <div className="modal-central-body">
          <p>Please wait coresponding teacher approve you!</p>
        </div>
      </Modal>
    </div>
  );
}

export default CourseDetail;
