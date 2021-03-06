import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import { getStudentCourses } from "../../../redux/actions/CoursesAction";
import { useDispatch, useSelector } from "react-redux";

const StudentBoardAssessment = () => {
    const dispatch = useDispatch()
    const {studentCourses} = useSelector(state => state.courses);

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
                    <Link to='/student-courses'>
                        <p>Courses</p>
                    </Link>
                    <p><b>Assesment</b></p>
                </div>
                <div className='student-course-list'>
                {studentCourses.course.map((item, index) => (
                    <div>
                        {item.status === 1 && (item.totalSeenCourses === item.totalCourse) ? ( // status still not fixed
                        <div className='student-assess-detail'>
                            <div className='assessment-detail'>
                                <h4>{item.courseId.title}</h4>
                                <p className='lecture'>{item.courseId.teacherId.fullname}</p>
                                <p className='complete'>Completed at: -</p>
                            </div>
                            <div className='assessment-precentage'>
                                <div>
                                    <p><i>No result yet</i></p>
                                    <Link to={`/assessment/${item.courseId._id}`}>
                                        <button>Take Test</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ) : item.status === 1 && (item.totalSeenCourses !== item.totalCourse) ? (
                        <div className='student-assess-detail'>
                            <div className='assessment-detail'>
                                <h4>{item.courseId.title}</h4>
                                <p className='lecture'>{item.courseId.teacherId.fullname}</p>
                                <p className='complete'>Completed at: -</p>
                            </div>
                            <div className='assessment-precentage'>
                                <div>
                                    <p><i>No result yet</i></p>
                                </div>
                            </div>
                        </div>
                        ) : item.status === 2 ? (
                        <div className='student-assess-detail'>
                            <div className='assessment-detail'>
                                <h4>{item.courseId.title}</h4>
                                <p className='lecture'>{item.courseId.teacherId.fullname}</p>
                                <p className='complete'>Completed at: </p>
                            </div>
                            <div className='assessment-precentage'>
                                <div>
                                    <h4>{item.score}%</h4>
                                    <p>Question Correct</p>
                                </div>
                            </div>
                        </div>
                        ) : (
                            <div className='student-assess-detail'></div>
                        )}
                    </div>
                ))}
                </div>
                </div>
            </div>
        )}
        </>
    )
}

export default StudentBoardAssessment;