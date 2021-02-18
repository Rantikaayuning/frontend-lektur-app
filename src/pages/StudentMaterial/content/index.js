import React from 'react'
import logo from "../../../assets/Vector.png"
import logo1 from "../../../assets/Vector3.png"
import logo2 from "../../../assets/Vector4.png"
import {studentCourses} from "../../../assets/JSONFile/dummyData"

export default function ContentMaterial() {
    return (
        <div className="material-lock">
            <p className="lock-text">Content</p>
            <div className="lock-content">
                    <div className="unlock"><img src={logo} alt='logo'/>Lesson #1 : {studentCourses[0].lesson[1]}</div>
                    <div className="unlocked"><img src={logo1} alt='logo'/>Lesson #2 : {studentCourses[0].lesson[2]}</div>
                    <div className="unlocked"><img src={logo1}alt='logo'/>Lesson #3 : {studentCourses[0].lesson[3]}</div>
                    <div className="locked"><img src={logo2} alt='logo'/>Lesson #4 : {studentCourses[0].lesson[4]}</div>
                    <div className="locked"><img src={logo2} alt='logo'/>Lesson #5 : {studentCourses[0].lesson[5]}</div>
                    <div className="locked"><img src={logo2} alt='logo'/>Lesson #6 : {studentCourses[0].lesson[6]}</div>
                    <div className="locked"><img src={logo2} alt='logo'/>Lesson #7 : {studentCourses[0].lesson[7]}</div> 
            </div>
        </div>
    )
}
