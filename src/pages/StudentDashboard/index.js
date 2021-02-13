import React, { useState } from 'react';
import StudentProfile from './Profile';
import { staticImage } from "../../assets/JSONFile/dummyData";
import {Progress} from 'reactstrap'
import { Modal } from 'react-bootstrap';
import { PopUpCourse } from '../../components/PopUp/PopUpCourse';
import { PopUpMaterial } from '../../components/PopUp/PopUpMaterial';

const StudentBoard = () => {
    const [popUpCourse, setPopUpCourse] = useState(false);
    const [popUpMaterial, setPopUpMaterial] = useState(false);
    const [isCourse, setCourse] = useState(true)
    const [isCompleted, setCompleted] = useState(true)

    const toggle = () => {
        setCourse(!isCourse)
    }

    return (
        <>
            <div className="student-board">
            <div>
                <StudentProfile />
            </div>
            <div className='student-lesson'>
                    <div className='student-course-assessment'>
                        <p onClick={toggle}>Courses</p>
                        <p onClick={toggle}>Assesment</p>
                    </div>
                    {staticImage.map((item, index) => (
                    <div className='student-course-list'>
                            {isCourse ? (
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
                                ) : (
                                    <div className='student-assess-detail'>
                                        <div className='assessment-detail'>
                                            <h4 onClick={() => setPopUpMaterial(true)}>{item.title}</h4>
                                            <p className='lecture'>{staticImage[0].lecture}</p>
                                            <p>Completed at: </p>
                                        </div>
                                        { isCompleted ? (
                                        <div className='assessment-precentage'>
                                            <div>
                                                <h4>73%</h4>
                                                <p>11/15 Question Correct</p>
                                            </div>
                                        </div>
                                        ) : (
                                        <div>
                                            <div>
                                                <button>Take Test</button>
                                                <p>No result yet</p>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                )}
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
                    <Modal
                    show={popUpMaterial}
                    size='lg'
                    onHide={() => setPopUpMaterial(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    >
                    <PopUpMaterial/>
                    </Modal>
                    </div>
            </div>
        </>
    )
}

export default StudentBoard;