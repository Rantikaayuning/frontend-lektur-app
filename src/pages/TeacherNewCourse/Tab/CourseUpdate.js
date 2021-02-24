import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

import {getCourseFilled} from "../../../redux/actions/CoursesAction";

function CourseUpdate() {
    const dispatch = useDispatch();

    const id = useSelector(state => state.teachers.id)

    useEffect(() => {
        dispatch(getCourseFilled(id));
    }, [])

    const {coursefilled, getTitle, getOverview} = useSelector(state => state.courses)

    console.log(id);

    return (
        <>
        {coursefilled === null ? (
        <div id='loader'></div>
        ) : (
        <div className='teacher-assessment'>
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
                   { getTitle}
                    <Link to='/teacher-new-course'>
                        <i class="fa fa-pencil "></i>
                    </Link>
                    <p>
                        {getOverview}
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
                        <Link to={`/course-filled-teacher/${id}`}>
                            <p><button>Publish Course</button></p>
                        </Link>
                        <p className='delete'>Delete Course</p>
                    </div>
            </div>  
        </div>
        )}
        </>
    )
}


  
  export default CourseUpdate;
