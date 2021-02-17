import React from "react";
import { Link } from "react-router-dom";
import Comp1 from "../../../../assets/RectangleComputer.png";
import Comp2 from "../../../../assets/RectangleCom2.png";
function CourseFilled() {
  return (
    <div className="main-course-filled">
      <div className="teacher-dashboard-list">
        <Link to="/teacher-new-course">
          <p>Course</p>
        </Link>
        <Link to="/teacher-new-assessment">
          <p>Assessment</p>
        </Link>
        <p className="open">Students</p>
      </div>
      <div className="course-detail">
        <div className="course-detail-filled">
          <span>React JS Basic</span>
          <i class="fa fa-pencil "></i>
          <p>
            Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis,
            eget faucibus iaculis facilisi pellentesque eleifend mattis vel.
            Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci.
            Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu
            facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut
            tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices
            id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim,
            donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales
            rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris.
            Lobortis interdum imperdiet mauris pharetra risus proin etiam est.
          </p>
        </div>
      </div>
      <div className="course-filled-content">
        <p>Content*</p>
        <div className="course-filled-content-card">
          <div className="course-filled-content-card-left">
            <span className="span">Lesson #1 : What is React </span>
            <i className="fa fa-pencil "></i>
            <span className="span-paragraph">
              Neque eu lorem ultrices id. Et mattis lacus fermentum id nec,
              aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque
              id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor
              adipiscing nullam mauris. Lobortis interdum imperdiet mauris
              pharetra risus proin etiam est.
            </span>
            <i class="fa fa-file files"></i>
            <span className="span-detail">React and Open Source.pdf</span>
            <br />
            <i className="fa fa-file files"></i>
            <span>Just Javascript.pdf</span>
          </div>
          <div className="image-computer1">
            <img src={Comp1} alt="comp1" />
          </div>
        </div>
        <div className="course-filled-content-card">
          <div className="course-filled-content-card-left">
            <span className="span">Lesson #2 : Create React App </span>
            <i className="fa fa-pencil "></i>
            <span className="span-paragraph">
              Neque eu lorem ultrices id. Et mattis lacus fermentum id nec,
              aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque
              id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor
              adipiscing nullam mauris. Lobortis interdum imperdiet mauris
              pharetra risus proin etiam est.
            </span>
          </div>
          <div className="image-computer1">
            <img src={Comp2} alt="comp2" />
          </div>
        </div>
        <u className="add-new-lesson">Add New Lesson</u>
        <button> Save Changes</button>
        <u className="delete-course">Delete Course</u>
      </div>
    </div>
  );
}

export default CourseFilled;
