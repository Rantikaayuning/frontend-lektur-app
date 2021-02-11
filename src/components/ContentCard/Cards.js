import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function Cards(props) {
  return (
    <div>
      <Card style={{ width: "279px" }}>
        <CardImg top width="100%" src={props.image} alt={props.title} />
        <CardBody className="p-2">
          <CardTitle tag="p" style={{ fontWeight: "700", fontSize: "16px" }}>
            {props.title}
          </CardTitle>
          <CardSubtitle
            tag="p"
            className="text-muted"
            style={{ fontWeight: "400" }}
          >
            {props.lecture}
          </CardSubtitle>
          <span>
            <small className="text-muted">{props.video_numbers}</small>{" "}
            <small className="text-muted" style={{ paddingLeft: "15px" }}>
              {props.material_numbers}
            </small>{" "}
          </span>
          <CardText className="mt-3" style={{ fontSize: "13px" }}>
            {props.text}
          </CardText>
        </CardBody>
        <div
          style={{
            margin: "0px",
            background: "#EAF7FE",
            padding: "10px 14px 10px 15px",
          }}
        >
          {props.footer}
        </div>
      </Card>
    </div>
  );
}

export default Cards;
