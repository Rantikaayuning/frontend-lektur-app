import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CreateContent from "../../../components/CreateContent"

import {postCourse,  deleteCourse} from "../../../redux/actions/CoursesAction";
import {Tooltip} from "reactstrap"

// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
 
    const history = useHistory();

    const dispatch = useDispatch();

    const [isAdd1, setAdd1] = useState(false)

    const handleAdd1 = () => {
        setAdd1(true);
    }

    const {id, getTitle, getOverview, idContent} = useSelector(state => state.courses)

    const [title, setTitle] = useState ("")
    const [overview, setOverview] = useState ("")
    const [imageData, setImageData] = useState("")
    // const [category, setCategory] = useState("")


    const submitCourse = () => {
        dispatch(postCourse(title, overview, imageData))
    }

//---------------CONTENT/LESSON--------------------------------------------//

    const [contentList, setContentList] = useState([])

    const addCOntent = () => {
        setContentList(contentList.concat(<CreateContent key={contentList.length} />));
      };

//-----------------------DELETE-COURSE--------------------------------//

    const deleteCourseTeacher = () => {
        dispatch(deleteCourse(id))
        history.push("/teacher-dashboard")
      }

    console.log(idContent);

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
                <div className='teacher-create-course-box'>
                    {id === null ? (
                    <>
                    <div className='teacher-create-course-title'>
                        <p>
                            <input 
                                type="text" 
                                placeholder="Title"  
                                onChange={(e) => 
                                setTitle (e.target.value)} 
                                value={title}/><hr type="solid"
                            />
                        </p>
                    </div>
                    <div className='teacher-create-course-overview'>
                        <p>
                            <textarea 
                                type="text" 
                                placeholder="Overview*" 
                                cols='45' rows='5'
                                onChange={(e) => 
                                setOverview (e.target.value)} 
                                value={overview}
                            />
                            <hr type="solid"/>
                        </p>
                    </div>
                    {/* <div className='teacher-create-course-title'>
                        <p>
                            <input 
                                type="text" 
                                placeholder="Category"  
                                onChange={(e) => 
                                setCategory (e.target.value)} 
                                value={category}
                            />
                            <hr type="solid"/>
                        </p>
                    </div> */}
                    <div className='teacher-add-header-image'>
                        {isAdd1 === true ? (
                            <p>
                                <input 
                                    type="file" 
                                    placeholder="Image" 
                                    id='upload'
                                    onChange={(e) => 
                                        setImageData(e.target.files[0])
                                    }
                                />
                               <hr type="solid" />
                            </p>
                          ) : ( 
                            <p>
                                <button 
                                   onClick = {handleAdd1}
                                   
                                >
                                   Add header image
                                </button>
                            </p> 
                        )}  
                        <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
                    </div>
                    <div className='teacher-save-new-course'>
                         <p>
                             <button 
                                 onClick = {submitCourse}
                             >
                               Save
                             </button>
                         </p>
                     </div>
                   
                    </>
                     ) : (
                    <>
                    {id === null ? (
                        <div id='loader'></div>
                    ) : (
                        <>
                        <div className="course-detail-update">
                               {getTitle}
                            <Link to='/teacher-create-course'>
                                <i class="fa fa-pencil "></i>
                            </Link>
                            <p>
                                {getOverview}
                            </p>
                        </div>
                       
                     </>
                        )}
                    </>
                    )} 
                  
                    {id === null ? (
                        <div></div>
                    ) : (
                        <>
                            <div>
                                <p><hr type="solid"/></p>
                            </div>
                            <div className='teacher-update-content'>
                                <h4>Content*</h4>
                            </div>
                            <CreateContent/>
                            <div className='teacher-add-new-lesson-button'>
                                {contentList}
                                <p onClick={addCOntent}>Add new lesson</p>
                            </div>
                            <div className='publish-and-delete-course'>
                                <Link to={`/course-filled-teacher/${id}`}>
                                    <p><button>Publish Course</button></p>
                                </Link>
                                <p className='delete' onClick={deleteCourseTeacher}>Delete Course</p>
                            </div>
                        </>
                     )} 
                </div>
            </div>
   
        </>
    )
}

export default TeacherCourseTab;

