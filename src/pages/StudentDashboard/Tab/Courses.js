import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import {Progress} from 'reactstrap'
import { Modal } from 'react-bootstrap';
import { PopUpCourse } from '../../../components/PopUp/PopUpCourse';
import { PopUpMaterial } from '../../../components/PopUp/PopUpMaterial';
import { useDispatch, useSelector } from "react-redux";
import { getStudentCourses, getPopUpContent, getPopUpMaterial, getCourseDetail } from "../../../redux/actions/CoursesAction";
import defaultImg from "../../../assets/RectangleSquare.png";
import logo from '../../../assets/checklist2.png';
import logo2 from '../../../assets/Vector4.png';

const StudentBoardCourses = () => {
    const [contentModal, setContentModal] = useState(false);
    const [materialModal, setMaterialModal] = useState(false);

    const dispatch = useDispatch();
    const {studentCourses, popUpContent, popUpMaterial, courseDetail } = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(getStudentCourses());
    }, [dispatch]);

    const handlePopUpContent = (id) => {
        dispatch(getPopUpContent(id))
        dispatch(getCourseDetail(id))
        setContentModal(true)
    }

    const handlePopUpMaterial = (id) => {
        dispatch(getPopUpMaterial(id))
        setMaterialModal(true)
    }

    // console.log("content", popUpContent)
    // console.log("material", popUpMaterial)
    // console.log(studentCourses)
    console.log('detail', courseDetail)
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
                
                {studentCourses === null ? (
                <>
                <div className='student-course-list'>
                    <div className='student-course-detail'>
                        <div className='course-detail-first'>
                            <p>Enroll now</p>
                        </div>
                        <div className='course-detail-second'>
                            <p>Enroll Now</p>
                        </div>
                    </div> 
                </div>  
                </>
                ) : (
                <>
                {studentCourses.course.map((item, index) => (
                <div className='student-course-list'>
                    {item.status === 2 ? (
                    <div className='student-course-detail' key={index}>
                        <img src={defaultImg} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.courseId.title}</b></p>
                            <p className='title'>By {item.courseId.teacherId.fullname}</p>
                            <p className='title' onClick={() => handlePopUpMaterial(item.courseId._id)}><u>See course materials</u></p>
                        </div>
                        <div className='course-detail-second'>
                            <p><Progress color="warning" value={100} /></p>
                            <p className='title'>Course Complete</p>
                            <p><button onClick={() => handlePopUpContent(item.courseId._id)}>Review</button></p>
                        </div>
                    </div> 
                    ) : item.status === 1 ? (
                    <div className='student-course-detail' key={index}>
                        <img src={defaultImg} alt='courses'/>
                        <div className='course-detail-first'>
                            <p><b>{item.courseId.title}</b></p>
                            <p className='title'>By {item.courseId.teacherId.fullname}</p>
                            <p className='title' onClick={() => handlePopUpMaterial(item.courseId._id)}><u>See course materials</u></p>
                        </div>
                        <div className='course-detail-second'>
                            <p><Progress color="warning" value={1/100*100} /></p>
                            <p className='title'>0 Course Complete</p>
                            <p><button onClick={() => handlePopUpContent(item.courseId._id)}>Lesson #1</button></p>
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
                </>
                )}

                {/* content popup */}
                {popUpContent.length > 1 && courseDetail !== null ? (
                <Modal
                show={contentModal}
                size='lg'
                onHide={() => setContentModal(false)}
                className='pop-up-course-box'
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpCourse
                title={<div>Content</div>}
                lessonContent= 
                {popUpContent.map((item, id) => (
                    <div className="lock-content" key={id}>
                        <Link to={`/course-content/${courseDetail.course._id}/${item._id}`}><p className={item.number === 1 ? 'unlocked' : 'locked'}><img src={item.number === 1 ? logo : logo2} alt='logo'/>Lesson #{item.number} {item.title}</p></Link>
                    </div>
                ))}
                />
                </Modal>
                ) : (
                <Modal
                show={contentModal}
                size='lg'
                onHide={() => setContentModal(false)}
                className='pop-up-course-box'
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpCourse
                title={<div>Content</div>}
                lessonContent={<p className='pop-up-course-nothing'>No Content yet</p>}
                />
                </Modal>
                )}

                {/* material popup */}
                {popUpMaterial.length !== null || studentCourses === null || studentCourses === undefined ? (
                <Modal
                show={materialModal}
                size='lg'
                onHide={() => setMaterialModal(false)}
                dialogClassName="modal-90w"
                className='pop-up-material-box'
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpMaterial
                title={<div>Material</div>}
                materialContent=
                {<div className="pop-up-course-material">
                    {popUpMaterial.map((item, id) => (
                    <>
                    <p>Lesson #{id + 1} : {item.contentId.title}?</p>
                    <li key={item.contentId.title}>
                        <label>Read course material : <a href={item.material} target='_blank' rel='noreferrer'>{item.contentId.title}</a></label>
                    </li>
                    </>
                    ))}
                    </div>}
                />
                </Modal>
                ) : (
                <Modal
                show={materialModal}
                size='lg'
                onHide={() => setMaterialModal(false)}
                dialogClassName="modal-90w"
                className='pop-up-material-box'
                aria-labelledby="example-custom-modal-styling-title"
                >
                <PopUpMaterial
                title={<div>Material</div>}
                materialContent={<p className='pop-up-course-nothing'>No Material yet</p>}
                />
                </Modal>
                )}
                </div>
            </div>
        )}
        </>
    )
}

export default StudentBoardCourses;