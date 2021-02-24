import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
  teacherProfile,
} from "../../assets/JSONFile/dummyData";
import CourseCard from "./CourseCard";

import {
  getUserProfile,
  updateUserProfile,
} from "../../redux/actions/UserAction";
import {getTeacherCourses} from "../../redux/actions/CoursesAction"
import defaultImg from "../../assets/RectangleSquare.png";

function TeacherDashboard(props) {
  const [isEdit, setEdit] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams()

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    props.getUserProfile();
    props.getTeacherCourses(id)
  }, []);

  // console.log(props.userProfile);
  console.log(props.teacherCourses)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, email);

    props.updateUserProfile(fullname, email);
    // props.getUserProfile();
    alert(
      `your new updates are email: ${email} and fullname: ${fullname}. Please do signout and login back to see changes`
    );
    // localStorage.removeItem("token");

    props.history.push("/");
  };

  return (
    <div className="teacher-dashboard-container">
      {isEdit ? (
        <div>
          {props.userProfile ? (
            <div className="teacher-profile">
              <img src={teacherProfile.image} alt="teacher profile" />
              <div className="name-email">
                <div>
                  <b>{props.userProfile.fullname}</b>
                </div>
                <div>{props.userProfile.email}</div>
              </div>
              <span className="edit-teacher-profile">
                <u onClick={handleEdit}> Edit Profile </u>
              </span>
            </div>
          ) : (
            <div id='regular-loader'></div>
          )}
        </div>
      ) : (
        <div className="teacher-profile">
          <div className="teacher-profile-edit">
            <img src={teacherProfile.image} alt="student" />
            <form onSubmit={handleSubmit}>
              <p>
                Name<span>*</span>
              </p>
              <input
                type="text"
                placeholder="John Doe"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
              <br />
              <br />
              <p>
                Email<span>*</span>
              </p>
              <input
                type="email"
                placeholder="john@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              <button>Save Changes</button>
            </form>
          </div>
        </div>
      )}

        {props.teacherCourses !== [] ? (
          props.teacherCourses.map((item, index) => (
        <div className="courses-container">
          <div className="courses-header">
            <h5>
              <b>Courses</b>
            </h5>
            <Link to="/teacher-new-course">
              <button>New Course</button>
            </Link>
          </div>
          <hr />
              <CourseCard
                key={index}
                image={defaultImg}
                title={item.title}
                numOfVideos={item.totalVideo}
                numOfLesson={item.totalMaterial}
                enrolledStudents={item.totalEnrolled}
                edit={`/course-filled-teacher/${item._id}`}
              />
        </div>
          ))
        ) : (
          <div id="loader"></div>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.users.userProfile,
    updateUser: state.users.updateUser,
    teacherCourses: state.courses.teacherCourses
  };
};

export default connect(mapStateToProps, { getUserProfile, updateUserProfile, getTeacherCourses })(
  TeacherDashboard
);
