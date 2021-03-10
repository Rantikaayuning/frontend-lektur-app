import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

import imgStudent from "../../../assets/studentpicture.png";
import defaultPhoto from "../../../assets/user.png"
import successLogo from "../../../assets/upload2.png"

import {
  getUserProfile,
  updateUserProfile,
  updateProfileImage,
} from "../../../redux/actions/UserAction";

const StudentProfile = () => {
  const [isEdit, setEdit] = useState(true);

  const { userProfile, token, message, profileImage } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [imageProfile, setImageProfile] = useState("");
  const [PopUpProfileImage, setPopUpProfileImage] = useState(false);

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

  const updateProfile = () => {
    dispatch(updateProfileImage(imageProfile)) 
    setPopUpProfileImage(true)
  }

  const popUp = () => {
    setPopUpProfileImage(false)
    window.location.reload()
  }

  return (
    <>
      {isEdit ? (
        <>
          {userProfile ? (
            <div>
              <div className="student-profile">
                <div className="student-profile-image">
                {userProfile.image === null ? (
                  <img src={defaultPhoto} alt="student" />
                ) : (
                  <img src={userProfile.image} alt="student" />
                )}                </div>
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
        <div>
          <div className="student-profile-edit">
            <div className="student-profile-image">
            {userProfile.image === null ? (
              <img src={defaultPhoto} alt="student" />
            ) : (
              <img src={userProfile.image} alt="student" />
            )}
            </div>
            <input
                className="input-profile-student" 
                type="file"
                onChange={(e) => setImageProfile(e.target.files[0])}
            />
            <button className="upload-image" onClick={updateProfile}>Upload Image</button>
           
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
                <button className="save-edit">Save Changes</button>
              </form>
            </div>
          </div>
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
                   <img src={successLogo} alt="logo"/>
                   <p>{message}</p>
                   <button className="upload-image-popup" onClick={popUp}>Done</button>
                   </div>
                 )}
               </div>
             </Modal.Header>
          </Modal> 
    </>
  );
};

export default StudentProfile;
