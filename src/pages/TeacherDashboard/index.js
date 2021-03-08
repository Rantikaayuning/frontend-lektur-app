import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";

import { teacherProfile } from "../../assets/JSONFile/dummyData";
import CourseCard from "./CourseCard";

import {
  getUserProfile,
  updateUserProfile,
} from "../../redux/actions/UserAction";
import { getTeacherCourses } from "../../redux/actions/CoursesAction";
import defaultImg from "../../assets/defaultLektur.png";

function TeacherDashboard() {
  const dispatch = useDispatch();

  const [isEdit, setEdit] = useState(true);
  const [forgetAlert, setForgetAlert] = useState("");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const userProfile = useSelector((state) => state.users.userProfile);
  const teacherCourses = useSelector((state) => state.courses.teacherCourses);
  const token = useSelector((state) => state.users.token);

  const handleEdit = async () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    token ? dispatch(getUserProfile(token)) : dispatch(getUserProfile());
    token ? dispatch(getTeacherCourses(token)) : dispatch(getTeacherCourses());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(dispatch(updateUserProfile(fullname, email)))
      .then(() =>
        alert(`Hi ${fullname} Please do login back to get your changes`)
      )
      .then(() => Cookies.remove("token"))
      .then(() => window.open("/login", "_self"));
  };

  return (
    <div className="teacher-dashboard-container">
      {isEdit ? (
        <div>
          {userProfile ? (
            <div className="teacher-profile">
              <img src={teacherProfile.image} alt="teacher profile" />
              <div className="name-email">
                <div>
                  <b>{userProfile.fullname}</b>
                </div>
                <div>{userProfile.email}</div>
              </div>
              <span className="edit-teacher-profile">
                <u onClick={handleEdit}> Edit Profile </u>
              </span>
            </div>
          ) : (
            <div id="regular-loader"></div>
          )}
        </div>
      ) : (
        <div className="teacher-profile">
          <div className="teacher-profile-edit">
            <img src={teacherProfile.image} alt="student" />
            <form
              onSubmit={(e) =>
                fullname && email
                  ? handleSubmit(e)
                  : // : setForgetAlert("*fill in the form correctly")
                    alert("Please fill in the form correctly")
              }
            >
              <p>
                Name<span>*</span>
              </p>
              <input
                type="text"
                placeholder={userProfile.fullname}
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
                placeholder={userProfile.email}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              {/* <p>{forgetAlert}</p> */}
              <button>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {teacherCourses !== 0 ? (
        <div className="courses-container">
          <div className="courses-header">
            <h5>
              <b>Courses</b>
            </h5>
            <Link to="/teacher-create-course">
              <button>New Course</button>
            </Link>
          </div>
          <div className="card-teacher-container overflow-auto">
            <hr />
            {teacherCourses.map((item, index) => (
              <CourseCard
                key={index}
                image={item.image === null ? defaultImg : item.image}
                title={item.title}
                numOfVideos={item.totalVideo}
                numOfLesson={item.totalMaterial}
                enrolledStudents={item.totalEnrolled}
                edit={`/course-teacher/edit/${item._id}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div id="loader"></div>
      )}
    </div>
  );
}

export default TeacherDashboard;
