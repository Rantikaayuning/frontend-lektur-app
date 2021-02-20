import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = () => {
    const [isAdd, setAdd] = useState(false)

    const handleAdd = () => {
        setAdd(true)
    }
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
                        <p><input type="text" placeholder="Title"/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-new-course-overview'>
                        <p><textarea type="text" placeholder="Overview*" cols='45' rows='5'/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-header-image'>
                        <p><button>Add header image</button></p> 
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                    <div className='teacher-save-new-course'>
                        <p><button>Save</button></p>
                    </div>
                    <div>
                        <p><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-new-lesson-content'>
                        <h4>Content*</h4>
                    </div>
                    {isAdd === true ? (
                    <div className='add-new-lesson-box'>
                        <div className='add-new-lesson-input'>
                            <h4><b>Lesson #1</b></h4>
                            <div className='add-new-lesson-title'>
                                <p><input type="text" placeholder="     Title*"/></p>
                                <p><hr type="solid"/></p>
                            </div>
                            <div className='add-new-lesson-description'>
                                <p><textarea type="text" placeholder="      Description*" /></p>
                                <p><hr type="solid"/></p>
                            </div>
                        </div>
                        <div className='upload-new-lesson'>
                            <p><button className='video-lesson'>Upload Video</button></p>
                            <p>Required. Max. size 200 MB. Supported format .mp4</p>
                            <p><button className='material-lesson'>Add Lesson Material</button></p>
                            <p>Max. size 20MB. Supported format .pdf</p>
                            <p className='save'><button>save</button></p>
                        </div>
                    </div>
                    ) : (
                        <div></div>
                    ) }
                    <div className='teacher-add-new-lesson-button'>
                        <p onClick={handleAdd}>Add new lesson</p>
                    </div>
                    <div className='publish-and-delete-course'>
                        <Link to='/course-filled-teacher'>
                            <p><button>Publish Course</button></p>
                        </Link>
                        <p className='delete'>Delete Course</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherCourseTab;