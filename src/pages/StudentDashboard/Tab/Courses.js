import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import { staticImage } from "../../../assets/JSONFile/dummyData";
import {Progress} from 'reactstrap'
import { Modal } from 'react-bootstrap';
import { PopUpCourse } from '../../../components/PopUp/PopUpCourse';

const StudentBoardCourses = () => {
    const [popUpCourse, setPopUpCourse] = useState(false);

    return (
        <>
            <div className="student-board">
            <div>
                <StudentProfile />
            </div>
            <div className='student-lesson'>
                <div className='student-course-assessment'>
                    <p><b>Courses</b></p>
                    <Link to='/student-assessment'>
                        <p>Assesment</p>
                    </Link>
                </div>
                {staticImage.map((item, index) => (
                <div className='student-course-list'>
                    <div className='student-course-detail' key={index < 2}>
                            <img src={item.image} alt='courses'/>
                            <div className='course-detail-first'>
                                <p>{item.title}</p>
                                <p>{item.lecture}</p>
                            </div>
                            <div className='course-detail-second'>
                                <p><Progress color="warning" value={20} /></p>
                                <p>1/5 Course Complete</p>
                                <p><button onClick={() => setPopUpCourse(true)}>Lesson #9 Lorem Ipsum</button></p>
                                
                            </div>
                        </div>
                    </div>
                ))}
                <Modal
                show={popUpCourse}
                size='lg'
                onHide={() => setPopUpCourse(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpCourse/>
                </Modal>
                </div>
            </div>
        </>
    )
}

export default StudentBoardCourses;