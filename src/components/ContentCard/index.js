import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import ContentCards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCourses } from "../../redux/actions/CoursesAction";
import { buttonMaterials } from "../../assets/JSONFile/dummyData";
import defaultImg from "../../assets/RectangleSquare.png";
function Content() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const searchCourses = useSelector(state => state.courses.searchCourse);
  useEffect(() => {
    dispatch(getCourses());
    if (searchCourses && searchCourses.length > 0) {
      return searchCourses;
    }
  }, [dispatch]);
  console.log(`search courses`, searchCourses);
  console.log(`search courses`, Boolean(searchCourses));
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
          {searchCourses.length > 0
            ? searchCourses.map((item, index) => (
                <Col
                  xl="3"
                  md="6"
                  sm="12"
                  key={index}
                  className="card-container"
                >
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
              ))
            : courses.map((item, index) => (
                <Col
                  xl="3"
                  md="6"
                  sm="12"
                  key={index}
                  className="card-container"
                >
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
    </div>
  );
}

export default Content;
