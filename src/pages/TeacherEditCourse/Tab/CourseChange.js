import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import {getCourseDetail, uploadImage, updateCourse, deleteCourse} from '../../../redux/actions/CoursesAction'

const TeacherCourseUpdate = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const {courseDetail, image, detailTitle, detailOverview} = useSelector(state => state.courses)

    const [isAdd, setAdd] = useState(false)
    const [title, setTitle] = useState (`${detailTitle}`)
    const [overview, setOverview] = useState(`${detailOverview}`)
    const [imageData, setImageData] = useState("")
    const [buttonImage, setButtonImage] = useState("Add header image")
    const [buttonSave, setButtonSave] = useState('Save')
    const handleAdd = () => {
        setAdd(true)
    }
    
    useEffect(() => {
         dispatch(getCourseDetail(id));
    }, [dispatch, id])

     const submitImage = () => {
        const data = new FormData();
        data.append('file', imageData);
        dispatch(uploadImage(id, data));
    }

    const submitUpdate = () => {
        dispatch(updateCourse(id, title, overview))
    }

    const deleteCourseTeacher = () => {
        dispatch(deleteCourse(id))
        history.push("/teacher-dashboard")
      }

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
                        <div className='teacher-new-course-title'>
                            <p><input type="text" placeholder="Title" onChange={(e) => setTitle (e.target.value)} /><hr type="solid"/></p>
                        </div>
                    ) : (
                        <div className='teacher-new-course-title'>
                            <p><input  onChange={(e) => setTitle (e.target.value)} type="text" placeholder="Title" name="title" value={title}/><hr type="solid"/></p>
                        </div>
                     )}
                    {courseDetail.course.overview === null ? (
                        <div className='teacher-new-course-overview'>
                            <p><textarea onChange={(e) => setOverview (e.target.value)} type="text" placeholder="Overview*" cols='45' rows='5'/><hr type="solid"/></p>
                        </div>
                    ) : (
                        <div className='teacher-new-course-overview'>
                            <p><textarea  onChange={(e) => setOverview (e.target.value)} type="text" placeholder="Overview*" value={overview} cols='45' rows='5'/><hr type="solid"/></p>
                        </div>
                    )}
                    <div className='teacher-add-header-image'>
                            <p>
                                <input 
                                    type="file" 
                                    placeholder="Image" 
                                    id='upload'
                                    onChange={(e) => {
                                        setImageData(e.target.files[0])
                                        }
                                    }
                                /> 
                            </p>
                            <p onClick = {() => setButtonImage("Image Saved")}>
                                <button onClick={submitImage}>
                                   {buttonImage}
                                </button>
                                
                            </p> 
                            
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                        <hr type="solid" />
                    </div>
                    <div className='teacher-save-new-course'>
                        <p onClick = {() => setButtonSave("Saved")}>
                        {/* <Link to={`/course-teacher/lessons/${id}`}> */}
                            <button onClick={submitUpdate}>{buttonSave}</button>
                   
                        </p>
                    </div>
                        <p><hr type="solid"/></p>
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
                        <p className='delete' onClick={deleteCourseTeacher}>Delete Course</p>
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