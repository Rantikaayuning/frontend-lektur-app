import React from 'react'
import { Link } from "react-router-dom"

function CourseCard(props) {
    const { image, title, numOfVideos, numOfLesson, enrolledStudents } = props
    return (
        <>
            <div className="course-dashboard-info">
                <img src={image} />
                <div className="course-info">
                    <div><b>{title}</b></div>
                    <small className="text-muted">{numOfVideos} | {numOfLesson}</small>
                    <div><small className="text-muted">{enrolledStudents}</small></div>
                </div>
                <div className="invite-edit-btn">
                    <button className="btn-invite">Invite</button> {/*Invite will be in modal*/}
                    <button className="btn-edit"><Link>Edit</Link></button>
                </div>

            </div>
            <hr />
        </>

    )
}

export default CourseCard
