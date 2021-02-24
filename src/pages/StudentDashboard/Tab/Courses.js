import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
// import { studentCourses } from "../../../assets/JSONFile/dummyData";
import {Progress} from 'reactstrap'
import { Modal } from 'react-bootstrap';
import { PopUpCourse } from '../../../components/PopUp/PopUpCourse';
import { PopUpMaterial } from '../../../components/PopUp/PopUpMaterial';
import { useDispatch, useSelector } from "react-redux";
import { getStudentCourses } from "../../../redux/actions/CoursesAction";
import defaultImg from "../../../assets/RectangleSquare.png";

const StudentBoardCourses = () => {
    const [popUpCourse, setPopUpCourse] = useState(false);
    const [popUpMaterial, setPopUpMaterial] = useState(false);

    const dispatch = useDispatch();

    const studentCourses = useSelector(state => state.courses.studentCourses);

    useEffect(() => {
        dispatch(getStudentCourses());
    }, [dispatch]);

    console.log(studentCourses)
    return (
        <>
        {studentCourses.course === null || studentCourses.course === undefined ? (
            <div id='loader'></div>
        ) : (

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
                
                {studentCourses.course.map((item, index) => (
                <div className='student-course-list'>
                    {item.status === 2 ? (
                    <div className='student-course-detail' key={index}>
                        <img src={defaultImg} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.courseId.title}</b></p>
                            <p className='title'>By {item.courseId.teacherId.fullname}</p>
                            <p className='title' onClick={() => setPopUpMaterial(true)}><u>See course materials</u></p>
                        </div>
                        <div className='course-detail-second'>
                            <p><Progress color="warning" value={1/100*100} /></p>
                            <p className='title'>0 Course Complete</p>
                            <p><button onClick={() => setPopUpCourse(true)}>Lesson #1</button></p>
                        </div>
                    </div> 
                    ) : item.status === 1 ? (
                    <div className='student-course-detail' key={index}>
                        <img src={defaultImg} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.courseId.title}</b></p>
                            <p className='title'>By {item.courseId.teacherId.fullname}</p>
                            <p className='title' onClick={() => setPopUpMaterial(true)}><u>See course materials</u></p>
                        </div>
                        <div className='course-detail-second'>
                            <p><Progress color="warning" value={1/100*100} /></p>
                            <p className='title'>0 Course Complete</p>
                            <p><button onClick={() => setPopUpCourse(true)}>Lesson #1</button></p>
                        </div>
                    </div> 
                    ) : (
                    <div className='student-course-detail' key={index}>
                        <img src={defaultImg} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.courseId.title}</b></p>
                            <p className='title'>By {item.courseId.teacherId.fullname}</p>
                        </div>
                        <div className='course-detail-second'>
                            <p className='title'>Waiting Approval</p>
                        </div>
                    </div>  

                    ) }                  
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
        )}
        </>
    )
}

export default StudentBoardCourses;