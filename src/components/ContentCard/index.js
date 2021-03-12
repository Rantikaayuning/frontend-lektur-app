import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import ContentCards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCourses, getCategoryById } from "../../redux/actions/CoursesAction";
import { getHomepage } from "../../redux/actions/HomePage";
import { buttonMaterials } from "../../assets/JSONFile/dummyData";
import defaultImg from "../../assets/defaultLektur.png";

function Content() {
  const dispatch = useDispatch();
  const { courses, searchCourse } = useSelector((state) => state.courses);
  const { homePage, category } = useSelector((state) => state.homePage);

  const [categoryIds, setCategoryIds] = useState(0);

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getHomepage());
  }, [dispatch]);

  console.log(homePage);
  // console.log(category);

  const handleCategoryById = (id) => {
    setCategoryIds(id);
    dispatch(getCategoryById(id));
  };

  return (
    <>
      {courses.length === 0 ? (
        <div id="loader"></div>
      ) : (
        <div className="content">
          {searchCourse !== "" ? (
            <div className="material">
              <div className="card-search">
                <h3>"Search Result"</h3>
              </div>
            </div>
          ) : (
            <div className="material">
              <div className="home">What to learn next</div>
              {/* {category != null ? (
            <div className="btn-material">
            {category.map(item => (
              <button className="btn-home-detail">{item.categories}</button>
            ))}
          </div>
          ) : (
            <div></div>
          )} */}
              <div className="btn-material">
                {homePage !== null &&
                  homePage.category.map((item) => (
                    <button
                      className="btn-home-detail"
                      color={categoryIds === item._id ? "orange" : "red"}
                      onClick={() => handleCategoryById(item._id)}
                    >
                      {item.categories}
                    </button>
                  ))}
              </div>
            </div>
          )}
          <div className="card-content">
            {searchCourse !== "" ? (
              <Row className="content-card-container">
                {searchCourse.map((item, index) => (
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
                        image={item.image === null ? defaultImg : item.image}
                        text={item.overview}
                        title={item.title}
                        lecture={item.fullname[0].fullname}
                        video_numbers={item.totalVideo}
                        material_numbers={item.totalMaterial}
                        // footer = {item.categoryId.categories}
                        footer="Music"
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row className="content-card-container">
                {courses.map((item, index) => (
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
