import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Vector.png';
import logo1 from '../../assets/Vector3.png';
import logo2 from '../../assets/Vector4.png';

export const PopUpCourse = () => {
    return (
      <>  
          <Modal.Header closeButton>
            <Modal.Title id="modal-course">
              Create Cinematic Music Video: Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="lock-content">
                    <Link to='/material'><p className="unlock"><img src={logo} alt='logo'/>Lesson #1 : What is Cinematic?</p></Link>
                    <Link to='/material'><p className="unlocked"><img src={logo1} alt='logo'/>Lesson #2 : What is Cinematic?</p></Link>
                    <Link to='/material'><p className="unlocked"><img src={logo1} alt='logo'/>Lesson #3 : What is Cinematic?</p></Link>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #4 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #5 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #6 : Lorem Ipsum</p>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #7 : Lorem Ipsum</p> 
            </div>
          </Modal.Body>
      </>
    );
  }