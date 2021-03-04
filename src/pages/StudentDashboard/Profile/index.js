import React, { useState, useEffect } from "react";
import imgStudent from "../../../assets/studentpicture.png";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

const StudentProfile = () => {
  const [isEdit, setEdit] = useState(true);

  const {fullname, email, userProfile} = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [newFullname, setFullname] = useState(fullname);
  const [newEmail, setEmail] = useState(email);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fullname, email);
    handleEdit(dispatch(updateUserProfile(fullname, email)))
  }

  return (
    <>
      {isEdit ? (
        <>
          {userProfile ? (
            <div className="student-profile-box">
              <div className="student-profile">
                <div className="student-profile-image">
                  <img src={imgStudent} alt="student" />
                </div>
                <h5>{userProfile.fullname}</h5>
                <p>{userProfile.email}</p>
                <br />
                <span>
                  <u onClick={handleEdit}> Edit Profile </u>
                </span>
              </div>
            </div>
          ) : (
            <div id="regular-loader"></div>
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
                  placeholder={userProfile.fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  value={newFullname}
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
                  value={newEmail}
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

export default StudentProfile
