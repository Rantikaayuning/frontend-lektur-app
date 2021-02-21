import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PopUpMaterial = () => {
    return (
      <> 
          <Modal.Header className='pop-up-material-header' closeButton>
            <Modal.Title id="modal-course">
              Create Cinematic Music Video: Study Material
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-course'>
              <div className="pop-up-course-material">
                <p>Lesson #1 : What is Cinematic?</p>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
                <br/>
                <p>Lesson #2 : What is Cinematic?</p>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
                <li>
                  <label>Read course material: <Link to='/material'><span>Cinematic and Open Source.pdf</span></Link></label>
                </li>
              </div>
          </Modal.Body>
      </>
    );
  }