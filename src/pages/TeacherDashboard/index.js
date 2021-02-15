import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import Avatar from "react-avatar-edit";
import axios from "axios";

import {
  courseCardJson,
  teacherProfile,
} from "../../assets/JSONFile/dummyData";
import CourseCard from "./CourseCard";
// import { getUserData } from "../../redux/actions/UserAction";

function TeacherDashboard() {
  const [isEdit, setEdit] = useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(` https://lekturapp.herokuapp.com/api/users/profile`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <div className="teacher-dashboard-container">
      {isEdit ? (
        <>
          {data ? (
            <div className="teacher-profile">
              <img src={teacherProfile.image} alt="teacher profile" />
              <div className="name-email">
                <div>
                  <b>{data.username}</b>
                </div>
                <div>{data.email}</div>
              </div>
              <span className="edit-teacher-profile">
                <u onClick={handleEdit}> Edit Profile </u>
              </span>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      ) : (
        <div className="teacher-profile">
          <div className="teacher-profile-edit">
            <img src={teacherProfile.image} alt="student" />
            <form>
              <p>
                Name<span>*</span>
              </p>
              <input type="text" placeholder="John Doe" />
              <br />
              <br />
              <p>
                Email<span>*</span>
              </p>
              <input type="email" placeholder="john@gmail.com" />
              <br />
              <br />
              <button onClick={handleEdit}>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      <div className="courses-container">
        <div className="courses-header">
          <b>Courses</b>
          <button>
            <Link to="/teacher-new-course">New Course</Link>
          </button>
        </div>
        <hr />
        {courseCardJson ? (
          courseCardJson.map((item, index) => (
            <CourseCard
              key={index}
              image={item.image}
              title={item.title}
              numOfVideos={item.videoNums}
              numOfLesson={item.lessonNums}
              enrolledStudents={item.studentEnrolled}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.users.userData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserData: () => dispatch(getUserData()),
//   };
// };

export default TeacherDashboard;
