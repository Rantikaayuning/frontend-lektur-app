import React from 'react';
import { Link } from 'react-router-dom';
// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherStudentsTab = () => {

    return (
        <>
            <div className='teacher-assessment'>
                <div className='teacher-dashboard-list'>
                    <Link to='/teacher-new-course'>
                       <p>Course</p> 
                    </Link>
                    <Link to='/teacher-new-assessment'>
                        <p>Assessment</p>
                    </Link>
                    <p className='open'>Students</p>
                </div>
                <div className='teacher-question-title'>
                    <h4>Students</h4>
                </div>
            </div>
        </>
    )
}

export default TeacherStudentsTab;