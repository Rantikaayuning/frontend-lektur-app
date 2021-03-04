import React from 'react';
import { Modal } from 'react-bootstrap';

export const PopUpInvite = (props) => {
    return (
      <>  <Modal show={props.show}
            size='lg'
            onHide={props.onHide}
            dialogClassName="modal-invite-student"
            aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="modal-course">
              Invite Students
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-invite'>
                <div className="invite-add-search">
                    <p><input type="text" placeholder="Type student email"/><span><button>Add</button></span><hr type="solid"/></p>
                </div>
                <div className='invite-email-list'>
                    <div className='student-email'>
                        <p>justinjunaedi@gmail.com<span><hr type="solid"/></span></p>
                        <p className='cancel-email'>X</p>
                    </div>
                    <div className='student-email'>
                        <p>justinjunaedi@gmail.com<span><hr type="solid"/></span></p>
                        <p className='cancel-email'>X</p>
                    </div>
                    <div className='student-email'>
                        <p>justinjunaedi@gmail.com<span><hr type="solid"/></span></p>
                        <p className='cancel-email'>X</p>
                    </div>
                    <div className='student-email'>
                        <p>justinjunaedi@gmail.com<span><hr type="solid"/></span></p>
                        <p className='cancel-email'>X</p>
                    </div>
                </div>
                <div className='invite-button-invite'>
                    <button onClick={props.togglePopUp}>
                        Invite
                    </button>
                </div>
          </Modal.Body>
          </Modal>
      </>
    );
  }