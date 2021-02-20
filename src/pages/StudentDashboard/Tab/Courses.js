import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import { studentCourses } from "../../../assets/JSONFile/dummyData";
import {Progress} from 'reactstrap'
import { Modal } from 'react-bootstrap';
import { PopUpCourse } from '../../../components/PopUp/PopUpCourse';
import { PopUpMaterial } from '../../../components/PopUp/PopUpMaterial';

const StudentBoardCourses = () => {
    const [popUpCourse, setPopUpCourse] = useState(false);
    const [popUpMaterial, setPopUpMaterial] = useState(false);

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
                {studentCourses.map((item, index) => (
                <div className='student-course-list'>
                    {item.isActive === true ? (
                    <div className='student-course-detail' key={index}>
                        <img src={item.image} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.title}</b></p>
                            <p className='title'>By {item.writer}</p>
                            <p className='title' onClick={() => setPopUpMaterial(true)}><u>See course materials</u></p>
                        </div>
                        <div className='course-detail-second'>
                            <p><Progress color="warning" value={item.courseDone/item.totalCourse*100} /></p>
                            <p className='title'>{item.courseDone}/{item.totalCourse} Course Complete</p>
                            <p><button onClick={() => setPopUpCourse(true)}>Lesson #{item.courseDone + 1} {item.lesson[3]}</button></p>
                        </div>
                    </div>          
                    ) : item.isPending === true ? (
                    <div className='student-course-detail' key={index}>
                        <img src={item.image} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.title}</b></p>
                            <p className='title'>By {item.writer}</p>
                        </div>
                        <div className='course-detail-second'>
                            <p className='title'>Waiting Approval</p>
                        </div>
                    </div>  
                    ) : ''}
                    </div>
                ))}
                <Modal
                show={popUpCourse}
                size='lg'
                onHide={() => setPopUpCourse(false)}
                className='pop-up-course-box'
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpCourse/>
                </Modal>
                <Modal
                show={popUpMaterial}
                size='lg'
                onHide={() => setPopUpMaterial(false)}
                dialogClassName="modal-90w"
                className='pop-up-material-box'
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpMaterial/>
                </Modal>
                </div>
            </div>
        </>
    )
}

export default StudentBoardCourses;