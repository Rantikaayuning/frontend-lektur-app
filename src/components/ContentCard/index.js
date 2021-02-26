import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import ContentCards from "./Cards";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {getCourses} from "../../redux/actions/CoursesAction"
import { buttonMaterials } from "../../assets/JSONFile/dummyData";
import defaultImg from "../../assets/RectangleSquare.png"

function Content() {
  const dispatch = useDispatch();
  const { courses, searchCourse } = useSelector(state => state.courses)

  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch]);

  // console.log("result", searchCourse)

  return (
    <>
    {courses.length === 0 ? (
      <div id='loader'></div>
    ) : (
      <div className="content">
      {searchCourse !== '' ? (
        <div className="material">
          <div className="card-search">
              <h3>"Search Result"</h3>
          </div>
        </div>
      ) : (
        <div className="material">
          <div className="home">What to learn next</div>
          <div className="btn-material">
            {buttonMaterials.map(material => (
              <button className="btn-home-detail">{material.name}</button>
            ))}
          </div>
        </div>
      )}
      <div className="card-content">
        {searchCourse !== '' ? (
          <Row className="content-card-container">
          {searchCourse.map((item, index) => (
            <Col xl="3" md="6" sm="12" key={index} className="card-container">
              <Link 
                to={`/course-detail/${item._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <ContentCards
                image={item.image === null ? defaultImg : item.image}
                text={item.overview}
                title={item.title}
                lecture={item.fullname[0].fullname}
                video_numbers={item.totalVideo}
                material_numbers={item.totalMaterial}
                footer="Business"
              />
              </Link>
            </Col>
          ))}
        </Row>
        ) : (
          <Row className="content-card-container">
          {courses.map((item, index) => (
            <Col xl="3" md="6" sm="12" key={index} className="card-container">
              <Link 
                to={`/course-detail/${item._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <ContentCards
                image={item.image === null ? defaultImg : item.image}
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
        )}
      </div>
    </div>
    )}
    </>
  );
}

export default Content;
