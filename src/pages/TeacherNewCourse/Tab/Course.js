import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {postCourse, postContent, uploadMaterial, uploadVideo, uploadImage, deleteCourse} from "../../../redux/actions/CoursesAction";
import {Tooltip} from "reactstrap"

// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherCourseTab = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
 
    const history = useHistory();

    const dispatch = useDispatch();

    const [isAdd1, setAdd1] = useState(false)
    const [isAdd3, setAdd3] = useState(false)

    const handleAdd1 = () => {
        setAdd1(true);
    }
    const handleAdd3 = () => {
        setAdd3(true);
    }

    const {id, getTitle, getOverview, idContent} = useSelector(state => state.courses)

    const [title, setTitle] = useState ("")
    const [overview, setOverview] = useState ("")
    // const [category, setCategory] = useState("")
    const [imageData, setImageData] = useState("")
    // const [imageURL, setImageURL] = useState("")

    const submitCourse = () => {
        const data = new FormData();
        data.append('file', imageData);
        dispatch(postCourse(title, overview, imageData))
    }
    console.log();

//---------------------------HEADER-IMAGE-----------------------------------//

    // const submitImage = () => {
    //     const data = new FormData();
    //     data.append('file', imageData);
    //     dispatch(uploadImage(id, data));
    // }

//---------------CONTENT/LESSON--------------------------------------------//

    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");
    const [titleContent, setTitleContent] = useState("");
    const [material, setMaterial] = useState("")
    const [video, setVideo] = useState("");
    const [buttonText, setButtonText] = useState("Save")
    const [buttonImage, setButtonImage] = useState("Add header image")

    console.log(material);

    const submitContent = (e) => {
        e.preventDefault()
        dispatch(postContent(id, titleContent, description, number ));
    }

//-----------------------MATERIAL------------------------//

    const submitMaterial = () => {
        const data = new FormData();
        data.append('file', material);
        dispatch(uploadMaterial(idContent, material))
    }

//----------------------VIDIO----------------------------//

    const submitVideo = (e) => {
        e.preventDefault(e)
        const data = new FormData();
        data.append('video', video);
        dispatch(uploadVideo(idContent, video))
    }

//-----------------------DELETE-COURSE--------------------------------//

    const deleteCourseTeacher = () => {
        dispatch(deleteCourse(id))
        history.push("/teacher-dashboard")
      }

    console.log();

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
                                    onChange={(e) => {
                                        setImageData(e.target.files[0])
                                        // setImageURL(URL.createObjectURL(e.target.files[0]))
                                        }
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
                        <div className='add-new-lesson-box'>
                            <div className='add-new-lesson-input'>
                                <h4>
                                    <b>Lesson # <input className="input-number" 
                                                    type="text" 
                                                    placeholder="no." 
                                                    onChange={(e) => setNumber (e.target.value)} 
                                                    value={number}
                                                />
                                    </b>
                                </h4>
                            <div className='add-new-lesson-title'>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Title*" 
                                        onChange={(e) => setTitleContent (e.target.value)} 
                                        value={titleContent}
                                    />
                                </p>
                                <p>
                                    <hr type="solid"/>
                                </p>
                            </div>
                            <div className='add-new-lesson-description'>
                                <p>
                                    <textarea 
                                        type="text" 
                                        placeholder="Description*"  
                                        onChange={(e) => setDescription (e.target.value)}
                                        value={description}
                                    />
                                </p>
                                <p>
                                    <hr type="solid"/>
                                </p>
                            </div>
                            <p className='save' onClick = {() => setButtonText("Saved")}>
                                <button onClick={submitContent}  disabled= {idContent}>{buttonText}</button>
                            </p>
                        </div>
                        {/* <Tooltip placement="top" isOpen={tooltipOpen} autohide={true} target="DisabledAutoHideExample" toggle={toggle}>
                                You have to save first! 
                        </Tooltip> */}
                        <div className='upload-new-lesson'>
                        
                            <p>
                                <input 
                                    type="file" 
                                    placeholder="Image" 
                                    id='upload' 
                                    onChange={(e) => { setVideo(e.target.files[0])}}
                                />
                                <hr type="solid" />
                            </p>
                            <p>
                                <button className='video-lesson' onClick={submitVideo}>Upload Video</button>
                            </p>
                            <p>Required. Max. size 200 MB. Supported format .mp4</p>
                            <p>
                                <input 
                                    type="file" 
                                    placeholder="Image" 
                                    id='upload' 
                                    onChange={(e) => setMaterial(e.target.files[0])}
                                />
                                <hr type="solid" />
                            </p>
                            <p><button className='material-lesson' onClick={submitMaterial} >Add Lesson Material</button></p>
                            <p>Max. size 20MB. Supported format .pdf</p>
                        </div>
                    </div>
                        {isAdd3 === true ? (
                    <div className='add-new-lesson-box'>
                        <div className='add-new-lesson-input'>
                            <h4>
                                <b>Lesson #1</b>
                            </h4>
                            <div className='add-new-lesson-title'>
                                <p>
                                    <input 
                                        type="text" 
                                        placeholder="Title*"/>
                                </p>
                                <p>
                                    <hr type="solid"/>
                                </p>
                            </div>
                            <div className='add-new-lesson-description'>
                                <p>
                                    <textarea 
                                        type="text" 
                                        placeholder="Description*" 
                                    />
                                </p>
                                <p>
                                    <hr type="solid"/>
                                </p>
                            </div>
                        </div>
                        <div className='upload-new-lesson'>
                            <p>
                                <button className='video-lesson'>Upload Video</button>
                            </p>
                            <p>Required. Max. size 200 MB. Supported format .mp4</p>
                            <p>
                                <button className='material-lesson'>Add Lesson Material</button>
                            </p>
                            <p>Max. size 20MB. Supported format .pdf</p>
                            <p className='save'>
                                <button>save</button>
                            </p>
                        </div>
                    </div>
                    ) : (
                        <div></div>
                    ) }
                    <div className='teacher-add-new-lesson-button'>
                        <p onClick={handleAdd3}>Add new lesson</p>
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

