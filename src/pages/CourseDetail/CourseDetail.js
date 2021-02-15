import React from "react";
import { Row, Col } from "reactstrap";

// import { Link } from 'react-router-dom'
import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial } from "../../assets/JSONFile/dummyData";

function CourseDetail() {
  return (
    <div className="course-detail">
      <div className="course-detail-left">
        <p>Art & Humanity</p>
        <p>Create Cinematic Music Video</p>
        <p>By Justin Junaedi </p>
        <button> Enroll Now </button>
      </div>
      <div className="course-detail-right"></div>
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
