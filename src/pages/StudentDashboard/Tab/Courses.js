import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
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
    const {studentCourses } = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(getStudentCourses());
    }, []);
    
    // const handlePopupCourse = (id) => {
    //     dispatch(getCourseDetail(id));
    //     setPopUpCourse(true)
    // }

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
                
                {/* {studentCourses.course === null ? (
                    <div id='laoder'></div>
                ) : ( */}
                    <Modal
                    show={popUpCourse}
                    size='lg'
                    onHide={() => setPopUpCourse(false)}
                    className='pop-up-course-box'
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    >
                    <PopUpCourse
                    title={studentCourses.course[1].courseId.title}
                    firstLesson='What is React?'
                    nextLesson={2}
                    lessonLocked='Intro to React'
                    />
                    </Modal>
                {/* )} */}
                <Modal
                show={popUpMaterial}
                size='lg'
                onHide={() => setPopUpMaterial(false)}
                dialogClassName="modal-90w"
                className='pop-up-material-box'
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpMaterial
                title={studentCourses.course[1].courseId.title}
                firstLesson="what is React"
                secondLesson="Intro to React"
                firstMaterial={studentCourses.course[1].courseId.title}
                secondMaterial={studentCourses.course[1].courseId.title}
                />
                </Modal>
                </div>
            </div>
        )}
        </>
    )
}

export default StudentBoardCourses;