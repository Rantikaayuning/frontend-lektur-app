import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PopUpMaterial = (props) => {
    const { firstLesson, secondLesson, firstMaterial, secondMaterial, title } = props;
    return (
      <> 
          <Modal.Header className='pop-up-material-header' closeButton>
            <Modal.Title id="modal-course">
              {title}: Study Material
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-course'>
              <div className="pop-up-course-material">
                <p>Lesson #1 : {firstLesson}?</p>
                <li>
                  <label>Read course material: <Link to='/material'><span>{firstMaterial}.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>{secondMaterial}.pdf</span></Link></label>
                </li>
                <br/>
                <p>Lesson #2 : {secondLesson}?</p>
                <li>
                  <label>Read course material: <Link to='/material'><span>{firstMaterial}.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>{secondMaterial}.pdf</span></Link></label>
                </li>
              </div>
          </Modal.Body>
      </>
    );
  }