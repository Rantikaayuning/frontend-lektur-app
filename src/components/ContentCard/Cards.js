import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function Cards(props) {
  const {
    image,
    title,
    lecture,
    video_numbers,
    material_numbers,
    text,
    footer,
  } = props;
  let history = useHistory();

  function handleClick() {
    history.push("/course-detail");
  }
  return (
    <div onClick={handleClick}>
      <Card className="card">
        <CardImg top width="100%" src={image} alt={title} />
        <CardBody className="p-2">
          <CardTitle tag="p" className="card-title">
            {title}
          </CardTitle>
          <CardSubtitle tag="p" className="text-muted card-subtitle">
            {lecture}
          </CardSubtitle>
          <span>
            <small className="text-muted">{video_numbers}</small>{" "}
            <small className="text-muted material-numbers">
              {material_numbers}
            </small>{" "}
          </span>
          <CardText className="mt-3 card-text">{text}</CardText>
        </CardBody>
        <div className="card-footer">{footer}</div>
      </Card>
    </div>
  );
}

export default Cards;
