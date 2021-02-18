import React from "react";
import { Link } from "react-router-dom";
import Comp1 from "../../../assets/RectangleComputer.png";
import Comp2 from "../../../assets/RectangleCom2.png";

function CourseFilled() {
  return (
    <div className="main-course-filled">
      <div className="teacher-dashboard-list">
        <p className='open'>Course</p>
        <Link to='/teacher-new-assessment'>
            <p>Assessment</p>
        </Link>
        <Link to='/teacher-new-students'>
            <p>Students</p>
        </Link>
      </div>
      <div className="course-detail">
        <div className="course-detail-filled">
          <span>React JS Basic</span>
          <Link to='/teacher-new-course'>
            <i class="fa fa-pencil "></i>
          </Link>
          <p>
          React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. The create react app package can help you to set up your basic environment to start a new single page application. It makes using third party libraries, live-editing CSS and JSS in development and scaling to many files and components easier for you, by combining React, React-Dom with many other dependencies.
          </p>
        </div>
      </div>
      <div className="course-filled-content">
        <p>Content*</p>
        <div className="course-filled-content-card">
          <div className="course-filled-content-card-left">
            <span className="span">Lesson #1 : What is React </span>
            <Link to='/teacher-new-course'>
            <i className="fa fa-pencil "></i>
            </Link>
            <span className="span-paragraph">
            React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.
            </span>
            <Link to='/teacher-new-course'>
            <i class="fa fa-file files"></i>
            </Link>
            <span className="span-detail">React and Open Source.pdf</span>
            <br />
            <Link to='/teacher-new-course'>
            <i className="fa fa-file files"></i>
            </Link>
            <span>Just Javascript.pdf</span>
          </div>
          <div className="image-computer1">
            <img src={Comp1} alt="comp1" />
          </div>
        </div>
        <div className="course-filled-content-card">
          <div className="course-filled-content-card-left">
            <span className="span">Lesson #2 : Create React App </span>
            <Link to='/teacher-new-course'>
            <i className="fa fa-pencil "></i>
            </Link>
            <span className="span-paragraph">
            Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
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
