import React from "react";
import { Row, Col } from "reactstrap";
import ContentCards from "./Cards";
import { staticImage, buttonMaterials } from "../../assets/JSONFile/dummyData";

function Content() {
  return (
    <div className="content">
      <div className="material">
        <div className="home">What to learn next</div>
        <div className="btn-material">
          {buttonMaterials.map(material => (
            <button className="btn-home-detail">{material.name}</button>
          ))}
        </div>
      </div>

      <div className="card-content">
        <Row className="content-card-container">
          {staticImage.map((item, index) => (
            <Col xl="3" md="6" sm="12" key={index} className="card-container">
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

export default Content;
