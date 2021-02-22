import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import {createCourse} from "../../../redux/actions/TeacherAction"
// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = (props) => {

    const dispatch = useDispatch();

    const [isAdd, setAdd] = useState(false)

    const handleAdd = () => {
        setAdd(true)
    }

    const [title, setTitle] = useState ("")
    const [overview, setOverview] = useState ("")
    const [category, setCategory] = useState("")

    const submitCourse = () => {
        dispatch(createCourse(title, overview, category))
        alert("hai")
    }

    console.log(props.createCourses);

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
                        <p><input type="text" placeholder="Title"  onChange={(e) => setTitle (e.target.value)} value={title}/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-new-course-overview'>
                        <p><textarea type="text" placeholder="Overview*" cols='45' rows='5'onChange={(e) => setOverview (e.target.value)} value={overview}/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-header-image'>
                        <p><button>Add header image</button></p> 
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                    <div className='teacher-save-new-course'>
                    {/* <p><input type="text" placeholder="Title"  onChange={(e) => setCategory (e.target.value)} value={category}/><hr type="solid"/></p> */}
                        <p><button onClick = {submitCourse} >Save</button></p>
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

const mapStateToProps = state => {
    return {
        createCourses: state.teachers.createCourses
    };
  };
  
  export default connect(mapStateToProps)(TeacherCourseTab);
