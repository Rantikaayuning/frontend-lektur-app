import React, { useState, useEffect } from "react";
import imgStudent from "../../../assets/studentpicture.png";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../redux/actions/UserAction";
import { connect } from "react-redux";

const StudentProfile = (props) => {
  const [isEdit, setEdit] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    props.getUserProfile();
  }, []);

  console.log(props.userProfile);

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
    <>
      {isEdit ? (
        <>
          {props.userProfile ? (
            <div className="student-profile-box">
              <div className="student-profile">
                <div className="student-profile-image">
                  <img src={imgStudent} alt="student" />
                </div>
                <h5>{props.userProfile.fullname}</h5>
                <p>{props.userProfile.email}</p>
                <br />
                <span>
                  <u onClick={handleEdit}> Edit Profile </u>
                </span>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      ) : (
        <div className="student-profile-box">
          <div className="student-profile-edit">
            <div className="student-profile-image">
              <img src={imgStudent} alt="student" />
            </div>
            <div className="student-profile-form">
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
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.users.userProfile,
    updateUser: state.users.updateUser,
  };
};

export default connect(mapStateToProps, { getUserProfile, updateUserProfile })(
  StudentProfile
);
