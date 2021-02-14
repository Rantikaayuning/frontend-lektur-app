import React from 'react';
import { Link } from 'react-router-dom';
// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = () => {

    return (
        <>
            <div className='teacher-assessment'>
                <div className='teacher-dashboard-list'>
                    <p className='open'>Course</p>
                    <Link to='/teacher-new-assessment'>
                        <p>Assessment</p>
                    </Link>
                    <Link to='/teacher-new-students'>
                        <p>Students</p>
                    </Link>
                </div>
                <div className='teacher-new-course-box'>
                    <div className='teacher-new-course-title'>
                        <p><input type="text" placeholder="Question"/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-new-course-overview'>
                        <p><textarea type="text" placeholder="Overview*" cols='45' rows='5'/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-header-image'>
                        <p><button>Add header image</button></p> 
                        {/* <p><button><input type='file'/></button></p> */}
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                    <div className='teacher-save-new-course'>
                        <p><button>Save</button></p>
                    </div>
                    <div>
                        <p><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-new-lesson-link'>
                        <h4>Content*</h4>
                        <p>Add new lesson</p>
                    </div>
                    <div className='publish-and-delete-course'>
                        <p><button>Publish Course</button></p>
                        <p className='delete'>Delete Course</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherCourseTab;