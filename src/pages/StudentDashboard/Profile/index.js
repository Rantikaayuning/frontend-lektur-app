import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

import imgStudent from "../../../assets/studentpicture.png";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../redux/actions/UserAction";

const StudentProfile = () => {
  const [isEdit, setEdit] = useState(true);

  const { userProfile, token } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = async () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    token ? dispatch(getUserProfile(token)) : dispatch(getUserProfile());
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
                <button>Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProfile;
