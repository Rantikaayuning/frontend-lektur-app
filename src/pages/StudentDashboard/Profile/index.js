import React, { useState } from 'react';
import imgStudent from '../../../assets/studentpicture.png'

const StudentProfile = () => {
    const [isEdit, setEdit] = useState(true)

    const handleEdit = () => {
        setEdit(!isEdit)
    }

    return (
        <>
        { isEdit ? (
            <div className='student-profile-box'>
            <div className='student-profile'>
                <div className='student-profile-image'>
                    <img src={imgStudent} alt='student'/>
                </div>
                <h5>John Doe</h5>
                <p>john.doe@gmail.com</p>
                <br/>
                <span><u onClick={handleEdit}> Edit Profile </u></span>
            </div>
            </div>
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

export default StudentProfile;