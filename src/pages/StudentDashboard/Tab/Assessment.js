import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import { staticImage } from "../../../assets/JSONFile/dummyData";
import { Modal } from 'react-bootstrap';
import { PopUpMaterial } from '../../../components/PopUp/PopUpMaterial';

const StudentBoardAssessment = () => {
    const [popUpMaterial, setPopUpMaterial] = useState(false);
    const [isCompleted, setCompleted] = useState(true)

    return (
        <>
            <div className="student-board">
            <div>
                <StudentProfile />
            </div>
            <div className='student-lesson'>
                <div className='student-course-assessment'>
                    <Link to='/student-courses'>
                        <p>Courses</p>
                    </Link>
                    <p><b>Assesment</b></p>
                </div>
                {staticImage.map((item, index) => (
                    <div className='student-course-list'>
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
                    </div>
                ))}
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

export default StudentBoardAssessment;