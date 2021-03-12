import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { getHomepage } from "../../redux/actions/HomePage";

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

  const dispatch = useDispatch();

  const { homePage } = useSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(getHomepage());
  }, [dispatch]);

  const categories = homePage.course.map((item) =>
    item.categoryId ? item.categoryId.categories : "gaada"
  );

  // console.log(categories);

  const filterCat = categories.filter(
    (item) => item === "Software Engineering"
  );

  // console.log(filterCat);

  return (
    <div>
      <Card className="card">
        <CardImg
          top
          width="100%"
          src={image}
          alt={title}
          className="card-image"
        />
        <CardBody className="p-2">
          <CardTitle tag="p" className="card-title">
            {title}
          </CardTitle>
          <CardSubtitle tag="p" className="text-muted card-subtitle">
            By {lecture}
          </CardSubtitle>
          <span>
            <small className="text-muted">{video_numbers} Videos</small>{" "}
            <small className="text-muted material-numbers">
              {material_numbers} Learning Material
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
