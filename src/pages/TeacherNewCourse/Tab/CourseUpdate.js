import React, {useEffect} from 'react';
import { Link,useHistory,useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

import {getCourses, getCourseDetail} from "../../../redux/actions/CoursesAction"


function CourseUpdate() {
    const dispatch = useDispatch();

    const {id} = useParams();

    const {courseDetail} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(getCourseDetail(id))
    }, [dispatch, id])

    console.log(courseDetail);

    return (
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
                    {/* <span>{courseDetail[1].title}</span> */}
                    <Link to='/teacher-new-course'>
                        <i class="fa fa-pencil "></i>
                    </Link>
                    <p>
                        {/* {courseDetail.course.overview} */}
                        {/* React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. The create react app package can help you to set up your basic environment to start a new single page application. It makes using third party libraries, live-editing CSS and JSS in development and scaling to many files and components easier for you, by combining React, React-Dom with many other dependencies. */}
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
        </div>
    )
}


  
  export default CourseUpdate;
