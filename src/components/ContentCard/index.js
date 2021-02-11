import React from "react";
import { Row, Col } from "reactstrap";
import ContentCards from "./Cards";
import { staticImage } from "../../assets/JSONFile/dummyData";

function Content() {
  return (
    <div>
      <Row className="content-card-container">
        {staticImage.map((item, index) => (
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
  );
}

export default Content;
