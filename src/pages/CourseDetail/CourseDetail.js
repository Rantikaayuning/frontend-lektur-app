import React from "react";
import { Row, Col } from "reactstrap";

// import { Link } from 'react-router-dom'
import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial } from "../../assets/JSONFile/dummyData";

function CourseDetail() {
  return (
    <div className="main-course">
      <div className="course-detail">
        <div className="course-detail-left">
          <p className="p1">Art & Humanity</p>
          <p className="p2">Create Cinematic Music Video</p>
          <p className="p3">By Justin Junaedi </p>
          <button> Enroll Now </button>
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
      <div className="center"></div>
      <div className="card-content">
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
    </div>
  );
}

export default CourseDetail;
