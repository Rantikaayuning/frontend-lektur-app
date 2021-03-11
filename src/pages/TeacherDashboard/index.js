import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Spinner } from "reactstrap";

import CourseCard from "./CourseCard";

import {
  getUserProfile,
  updateUserProfile,
  updateProfileImage,
} from "../../redux/actions/UserAction";
import { getTeacherCourses } from "../../redux/actions/CoursesAction";
import defaultPhoto from "../../assets/user.png";
import successLogo from "../../assets/upload2.png";
import defaultImg from "../../assets/defaultLektur.png";

function TeacherDashboard() {
  const dispatch = useDispatch();

  const [isEdit, setEdit] = useState(true);
  const [PopUpProfileImage, setPopUpProfileImage] = useState(false);
  const [imageProfile, setImageProfile] = useState("");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const { userProfile, profileImage, message } = useSelector(
    (state) => state.users
  );
  const teacherCourses = useSelector((state) => state.courses.teacherCourses);
  const token = useSelector((state) => state.users.token);

  const handleEdit = async () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    token ? dispatch(getUserProfile(token)) : dispatch(getUserProfile()); // why was this commented?
    token ? dispatch(getTeacherCourses(token)) : dispatch(getTeacherCourses());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(dispatch(updateUserProfile(fullname, email)));
  };

  const updateProfile = () => {
    dispatch(updateProfileImage(imageProfile));
    setPopUpProfileImage(true);
  };

  const popUp = () => {
    setPopUpProfileImage(false);
    window.location.reload();
  };

  console.log(userProfile);
  return (
    <div className="teacher-dashboard-container">
      {isEdit ? (
        <div>
          {userProfile ? (
            <div className="teacher-profile">
              {userProfile.image === null ? (
                <img src={defaultPhoto} alt="student" />
              ) : (
                <img src={userProfile.image} alt="student" />
              )}
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
            <div></div>
          )}
        </div>
      ) : (
        <div className="teacher-profile">
          <div className="teacher-profile-edit">
            {userProfile.image === null ? (
              <img src={defaultPhoto} alt="student" />
            ) : (
              <img src={userProfile.image} alt="student" />
            )}
            <input
              className="input-profile"
              type="file"
              onChange={(e) => setImageProfile(e.target.files[0])}
            />
            <button className="upload-image" onClick={updateProfile}>
              Upload Image
            </button>
            <form onSubmit={handleSubmit}>
              <p>
                Name<span>*</span>
              </p>
              <input
                type="text"
                placeholder={userProfile.fullname}
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                required
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
                required
              />
              <br />
              <br />
              <button className="save-edit">Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {teacherCourses.length !== 0 ? (
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
                invite={`/course-teacher/students/${item._id}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="courses-container">
          <div className="courses-header">
            <h5>
              <b>{teacherCourses.length} Courses</b>
            </h5>
            <Link to="/teacher-create-course">
              <button>New Course</button>
            </Link>
          </div>
          <Spinner
            style={{
              width: "6rem",
              height: "6rem",
              position: "fixed",
              top: "50%",
              left: "53%",
            }}
            color="secondary"
          />
        </div>
      )}
      <Modal
        show={PopUpProfileImage}
        size="md"
        onHide={() => setPopUpProfileImage(false)}
        className="popup-upload"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <div className="teacher-profile-popup">
            {!profileImage ? (
              <div className="popUp-loading">
                <div id="popUp-loader"></div>
                <p>Currently Uploading</p>
              </div>
            ) : (
              <div className="upload-success">
                <img src={successLogo} alt="logo" />
                <p>{message}</p>
                <button className="upload-image-popup" onClick={popUp}>
                  Done
                </button>
              </div>
            )}
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default TeacherDashboard;
