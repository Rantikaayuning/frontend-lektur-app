import React, { useState } from 'react';
// import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {postContent, uploadMaterial, uploadVideo} from "../../redux/actions/CoursesAction";


export default function CreateContent() {
    const dispatch = useDispatch();

    const {id, idContent, videoMaterial, courseId} = useSelector(state => state.courses)

    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");
    const [titleContent, setTitleContent] = useState("");
    const [material, setMaterial] = useState("")
    const [video, setVideo] = useState("");
    const [buttonText, setButtonText] = useState("Save")
    const [buttonVideo, setButtonVideo] = useState("Upload Video")
    const [buttonMaterial, setButtonMaterial] = useState("Add Lesson Material")

    const submitContent = (e) => {
        e.preventDefault()
        id === null ? (
            dispatch(postContent(courseId, titleContent, description, number  ))
        ) : (
            dispatch(postContent(id, titleContent, description, number ))
        );
    }

//-----------------------MATERIAL------------------------//

    const submitMaterial = () => {
        const data = new FormData();
        data.append('file', material);
        dispatch(uploadMaterial(idContent, data))
    }

//----------------------VIDIO----------------------------//

    const submitVideo = () => {
        const data = new FormData();
        data.append('video', video);
        dispatch(uploadVideo(idContent, data))
    }
    return (
        <div className='add-new-lesson-box'>
            <div className='add-new-lesson-input'>
                    <h4>
                        <b>Lesson # 
                            <input className="input-number" 
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
                    <button onClick={submitContent}  >{buttonText}</button>
                </p>
            </div>
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
        <p onClick={(e) => {setButtonVideo("Video Saved")}}>
            <button className='video-lesson' onClick={submitVideo}>{buttonVideo}</button>
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
        <p onClick={(e) => setButtonMaterial("Material Saved")}>
            <button className='material-lesson' onClick={submitMaterial} >{buttonMaterial}</button></p>
        <p>Max. size 20MB. Supported format .pdf</p>
    </div>
</div>
    )
}
