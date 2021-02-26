import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/checklist2.png';
import logo2 from '../../assets/Vector4.png';

export const PopUpCourse = (props) => {
  const { lessonLocked, nextLesson, firstLesson, title } = props;
    return (
      <>  
          <Modal.Header className='pop-up-course-header' closeButton>
            <Modal.Title id="modal-course">
              {title}: Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="lock-content">
                    <Link to='/material'><p className="unlocked"><img src={logo} alt='logo'/>Lesson #1 : {firstLesson}</p></Link>
                    <p className="locked"><img src={logo2} alt='logo'/>Lesson #{nextLesson} : {lessonLocked}</p>
            </div>
          </Modal.Body>
      </>
    );
  }