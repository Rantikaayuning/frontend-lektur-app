import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import {getTeacherProfile} from "../../../redux/actions/TeacherAction"
import {Tooltip} from "reactstrap"

// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
 
    const {id} = useParams();
    const history = useHistory();

    const dispatch = useDispatch();

    // const [isAdd, setAdd] = useState(false)

    // const handleAdd = () => {
    //     setAdd(true)
    // }
    // const courses = useSelector(state => state.courses.courses)
    // const {getCourses} = useSelector(state => state.teachers)

    // const courseDetail = useSelector((state) => state.teachers.courseDetail)
    const [title, setTitle] = useState ("")
    const [overview, setOverview] = useState ("")
    const [category, setCategory] = useState("")

  

   useEffect(() => {
       dispatch(getTeacherProfile())
        // dispatch(getCourseDetail(id));
    //    dispatch(getCourses(id))
   }, [dispatch])

    // console.log(getCourses[getCourses.length-1]);

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
                    <div className='teacher-new-course-title'>
                    <p><input type="text" placeholder="Category"  onChange={(e) => setCategory (e.target.value)} value={category}/><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-header-image'>
                        <p><button>Add header image</button></p> 
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                   
                    <div className='teacher-save-new-course'>
                        <p><button  >Save</button></p>
                    </div>
                   
                    <div>
                        <p><hr type="solid"/></p>
                    </div>
                    <div className='teacher-add-new-lesson-content'>
                        <h4>Content*</h4>
                    </div>
                    {/* {isAdd === true ? (
                    <div className='add-new-lesson-box'> */}
                        {/* <div className='add-new-lesson-input'>
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
                        </div> */}
                        
                        <Tooltip placement="top" isOpen={tooltipOpen} autohide={true} target="DisabledAutoHideExample" toggle={toggle}>
                            You have to save first! 
                        </Tooltip>
                    {/* </div>
                    ) : (
                        <div></div>
                    ) } */}
                    <div className='teacher-add-new-lesson-button'>
                        <p onClick={toggle}>
                            <span href="#" id="DisabledAutoHideExample">Add new lesson </span>
                        </p>
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
