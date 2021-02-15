import React from 'react';
import { Link } from 'react-router-dom';
import StudentProfile from '../Profile';
import { studentCourses } from "../../../assets/JSONFile/dummyData";

const StudentBoardAssessment = () => {
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
                {studentCourses.map((item, index) => (
                    <div className='student-course-list'>
                        {item.isCompleted === true ? (
                        <div className='student-assess-detail'>
                            <div className='assessment-detail'>
                                <h4>{item.title}</h4>
                                <p className='lecture'>{item.writer}</p>
                                <p className='complete'>Completed at: {item.completeDate}</p>
                            </div>
                            <div className='assessment-precentage'>
                                <div>
                                    <h4>{Math.trunc(item.rightAnswer/item.totalQuestion*100)}%</h4>
                                    <p>{item.rightAnswer}/{item.totalQuestion} Question Correct</p>
                                </div>
                            </div>
                        </div>
                        ) : item.isActive === true ? (
                        <div className='student-assess-detail'>
                            <div className='assessment-detail'>
                                <h4>{item.title}</h4>
                                <p className='lecture'>{item.writer}</p>
                                <p className='complete'>Completed at: -</p>
                            </div>
                            <div className='assessment-precentage'>
                                <div>
                                    <p><i>No result yet</i></p>
                                    <Link to='/assessment'>
                                        <button>Take Test</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ) : (
                            ''
                        )}
                       
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default StudentBoardAssessment;