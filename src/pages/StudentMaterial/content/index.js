import React from 'react'
import logo from "../../../assets/Vector.png"
import logo1 from "../../../assets/Vector3.png"
import logo2 from "../../../assets/Vector4.png"

export default function ContentMaterial() {
    return (
        <div className="material-lock">
            <p className="lock-text">Content</p>
            <div className="lock-content">
                    <div className="unlock"><img src={logo}/>Lesson #1 : What is Cinematic?</div>
                    <div className="unlocked"><img src={logo1}/>Lesson #2 : What is Cinematic?</div>
                    <div className="unlocked"><img src={logo1}/>Lesson #3 : What is Cinematic?</div>
                    <div className="locked"><img src={logo2} />Lesson #4 : Lorem Ipsum</div>
                    <div className="locked"><img src={logo2} />Lesson #5 : Lorem Ipsum</div>
                    <div className="locked"><img src={logo2} />Lesson #6 : Lorem Ipsum</div>
                    <div className="locked"><img src={logo2} />Lesson #7 : Lorem Ipsum</div> 
            </div>
        </div>
    )
}
