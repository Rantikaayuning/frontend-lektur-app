import React, {useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

import {getCourseDetail} from "../../../redux/actions/CoursesAction"

function CourseNextChange() {
    const dispatch = useDispatch();

    const {id} = useParams();

    const {courseDetail} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(getCourseDetail(id))
    }, [dispatch, id])

    // console.log(courseDetail);

    return (
        <div className='teacher-assessment'>
            {courseDetail === null ? (
                <div id='loader'></div>
            ) : (
            <>
            <div className="teacher-dashboard-list">
                <p className='open'>Course</p>
                <Link to='/teacher-new-assessment'>
                    <p>Assessment</p>
                </Link>
                <Link to='/teacher-new-students'>
                    <p>Students</p>
                </Link>
            </div>
           
            <div className='teacher-update-box'>
         
            <div className="course-detail-update">
                    <span>{courseDetail.course.title}</span>
                    <Link to={`/course-teacher/course/${id}`}>
                        <i class="fa fa-pencil "></i>
                    </Link>
                    <p>
                        {courseDetail.course.overview}
                    </p>
                </div>
               
                <div>
                    <p><hr type="solid"/></p>
                </div>
                <div className='teacher-update-content'>
                    <h4>Content*</h4>
                </div>
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
                <div className='teacher-add-new-lesson-button'>
                        <p>Add new lesson</p>
                    </div>
                    <div className='publish-and-delete-course'>
                        <Link to='/course-filled-teacher'>
                            <p><button>Publish Course</button></p>
                        </Link>
                        <p className='delete'>Delete Course</p>
                    </div>
            </div>  
            </>
            )}
        </div>
    )
}


  
  export default CourseNextChange;