import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {getCourseDetail} from '../../../redux/actions/CoursesAction'

const TeacherCourseUpdate = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {courseDetail} = useSelector(state => state.courses)

    const [isAdd, setAdd] = useState(false)
    const [title, setTitle] = useState ("")

    const handleAdd = () => {
        setAdd(true)
    }
    
    useEffect(() => {
         dispatch(getCourseDetail(id));
    }, [dispatch, id])

    // console.log(courseDetail)

    return (
        <>
        {courseDetail !== null ? (
            <div className='teacher-assessment'>
                <div className='teacher-dashboard-list'>
                    <p className='open'>Course</p>
                    <Link to={`/course-teacher/assessments/${id}`}>
                        <p>Assessment</p>
                    </Link>
                    <Link to={`/course-teacher/students/${id}`}>
                        <p>Students</p>
                    </Link>
                </div>
                <div className='teacher-create-course-box'>
                    {courseDetail.course.title === null ? (
                        <div className='teacher-create-course-title'>
                            <p><input type="text" placeholder="Title"/><hr type="solid"/></p>
                        </div>
                    ) : (
                        <div className='teacher-create-course-title'>
                            <p><input type="text" placeholder="Title" value={courseDetail.course.title} /><hr type="solid"/></p>
                        </div>
                    )}
                    {courseDetail.course.overview === null ? (
                        <div className='teacher-create-course-overview'>
                            <p><textarea type="text" placeholder="Overview*" cols='45' rows='5'/><hr type="solid"/></p>
                        </div>
                    ) : (
                        <div className='teacher-create-course-overview'>
                            <p><textarea type="text" placeholder="Overview*" value={courseDetail.course.overview} cols='45' rows='5'/><hr type="solid"/></p>
                        </div>
                    )}
                    {courseDetail.course.categoryId === null ? (
                        <div className='teacher-create-course-title'>
                            <p><input type="text" placeholder="Category"/><hr type="solid"/></p>
                        </div>
                    ) : (
                        <div className='teacher-create-course-title'>
                            <p><input type="text" placeholder="Category" value={courseDetail.course.categoryId} /><hr type="solid"/></p>
                        </div>
                    )}
            
                    <div className='teacher-add-header-image'>
                        <p><button>Add header image</button></p> 
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                    <div className='teacher-save-new-course'>
                        <p>
                        <Link to={`/course-teacher/lessons/${id}`}>
                            <button>save</button>
                        </Link>
                        </p>
                    </div>
                    <div>
                        <p><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-new-lesson-content'>
                        <h4>Content*</h4>
                    </div>
                    {courseDetail.content === null || courseDetail === undefined || courseDetail === [] ? (
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
                                <p className='save'>
                                    <button>save</button>
                                </p>
                            </div>
                        </div> 
                    ) : (
                        <div className='add-new-lesson-box'>
                            {/* {courseDetail.content.map((item, index) => { */}
                                <>
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
                                    <p className='save'>
                                        <button>save</button>
                                    </p>
                                </div>
                                </>
                            {/* })} */}
                        </div> 
                    ) }
                    <div className='teacher-add-new-lesson-button'>
                        <p onClick={handleAdd}>Add new lesson</p>
                    </div>
                    <div className='publish-and-delete-course'>
                        <Link to={`/course-teacher/edit/${id}`}>
                            <p><button>Publish Course</button></p>
                        </Link>
                        <p className='delete'>Delete Course</p>
                    </div>
                </div>
            </div>
        ) : (
            <div id='loader'></div>
        )}
        </>
    )
}

export default TeacherCourseUpdate;