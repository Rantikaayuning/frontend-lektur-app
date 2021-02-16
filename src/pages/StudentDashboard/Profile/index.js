import React, { useState, useEffect } from 'react';
import imgStudent from '../../../assets/studentpicture.png';
import { getUserProfile } from "../../../redux/actions/UserAction";
import { connect } from "react-redux";

const StudentProfile = (props) => {
    const [isEdit, setEdit] = useState(true)

    const handleEdit = () => {
        setEdit(!isEdit)
    }

    useEffect(() => {
        props.getUserProfile();
    }, []);
    

    return (
        <>
        { isEdit ? (
            <>
            {props.userProfile ? (
              <div className='student-profile-box'>
              <div className='student-profile'>
                  <div className='student-profile-image'>
                      <img src={imgStudent} alt='student'/>
                  </div>
                  <h5>{props.userProfile.fullname}</h5>
                  <p>{props.userProfile.email}</p>
                  <br/>
                  <span><u onClick={handleEdit}> Edit Profile </u></span>
              </div>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </>
        ) : (
            <div className='student-profile-box'>
            <div className='student-profile-edit'>
                <div className='student-profile-image'>
                    <img src={imgStudent} alt='student'/>
                </div>
                <div className='student-profile-form'>
                    <form>
                    <p>Name<span>*</span></p>
                    <input type="text" placeholder="John Doe"/>
                    <br/>
                    <br/>
                    <p>Email<span>*</span></p>
                    <input type="email" placeholder="john@gmail.com"/>
                    <br />
                    <br />
                    <button onClick={handleEdit}>Save Changes</button>
                    </form>
                </div>
            </div>
            </div>
        )
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      userProfile: state.users.userProfile,
    };
  };

export default connect(mapStateToProps, { getUserProfile })(StudentProfile);