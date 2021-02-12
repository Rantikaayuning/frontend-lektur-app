import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Avatar from "react-avatar-edit";

import { courseCardJson, teacherProfile } from "../../assets/JSONFile/dummyData";
import CourseCard from "./CourseCard";

function TeacherDashboard() {
    const [isEdit, setEdit] = useState(true)

    const handleEdit = () => {
        setEdit(!isEdit)
    }

    return (
        <div className="teacher-dashboard-container">
            {isEdit ? (
                <div className="teacher-profile">
                    <img src={teacherProfile.image} />
                    <div className="name-email">
                        <div><b>{teacherProfile.name}</b></div>
                        <div>{teacherProfile.email}</div>
                    </div>
                    <span className="edit-teacher-profile"><u onClick={handleEdit}> Edit Profile </u></span>
                </div>
            ) : (
                    <div className='teacher-profile'>
                        <div className='teacher-profile-edit'>
                            <img src={teacherProfile.image} alt='student' />
                            <form>
                                <p>Name<span>*</span></p>
                                <input type="text" placeholder="John Doe" />
                                <br />
                                <br />
                                <p>Email<span>*</span></p>
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
                    <button><Link to="#">New Course</Link></button>
                </div>
                <hr />
                {courseCardJson ? courseCardJson.map((item, index) => (
                    <CourseCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        numOfVideos={item.videoNums}
                        numOfLesson={item.lessonNums}
                        enrolledStudents={item.studentEnrolled}
                    />
                )) : <div>Loading...</div>}

            </div>
        </div>
    );
}

export default TeacherDashboard;
