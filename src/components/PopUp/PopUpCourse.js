import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/checklist2.png';
import logo1 from '../../assets/Vector3.png';
import logo2 from '../../assets/Vector4.png';
import {studentCourses} from '../../assets/JSONFile/dummyData'

export const PopUpCourse = () => {
    return (
      <>  
          <Modal.Header closeButton>
            <Modal.Title id="modal-course">
              {studentCourses[0].title}: Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="lock-content">
                    <Link to='/material'><p className="unlocked"><img src={logo} alt='logo'/>Lesson #1 : {studentCourses[0].lesson[1]}</p></Link>
                    <Link to='/material'><p className="unlocked"><img src={logo} alt='logo'/>Lesson #2 : {studentCourses[0].lesson[2]}</p></Link>
                    <Link to='/material'><p className="unlocked"><img src={logo1} alt='logo'/>Lesson #3 : {studentCourses[0].lesson[3]}</p></Link>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #4 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #5 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #6 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #7 : Lorem Ipsum</p> 
            </div>
          </Modal.Body>
      </>
    );
  }