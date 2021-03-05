import React, { useEffect, useState } from "react";
// import { set } from "js-cookie";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/UserAction";
import { studentInvite } from "../../redux/actions/TeacherAction";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const PopUpInvite = props => {
  const { id } = useParams();
  const [inputText, setInputText] = useState("");
  const [studentList, setStudentList] = useState([]);
  const isLoading = true;
  // const [showInviteModal, set =ShowInviteModal] = useState(false);
  const dispatch = useDispatch();
  const msgSuccess = useSelector(state => state.teachers.studentInviteSuccess);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, studentList]);
  function handleAdd(e) {
    e.preventDefault();
    setStudentList([...studentList, inputText]);
    setInputText("");
  }
  function handleInput(e) {
    setInputText(e.target.value);
  }
  function handleDelete(id) {
    setStudentList(studentList.filter((student, index) => index !== id));
  }

  const handleInvite = () => {
    dispatch(studentInvite(id, studentList));
    // setShowInviteModal(false);
    props.setPopUpOpen(false);
    if (msgSuccess.length === 0){
        return isLoading
    } else {
      NotificationManager.success(msgSuccess, '');
    }
  }

  console.log('studentList =>', studentList);
  console.log('props =>', props);
  console.log('msgSuccess =>', msgSuccess);

  return (
    <>
      <Modal
        // show={props.show}
        setPopUpOpen={props.setPopUpOpen}
        show={props.show}
        size="lg"
        onHide={props.onHide}
        dialogClassName="modal-invite-student"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-course">Invite Students</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-invite">
          <div className="invite-add-search">
            <p>
              <form>
                <input
                  onChange={handleInput}
                  type="text"
                  placeholder="Type student email"
                  value={inputText}
                />
                <span>
                  <button onClick={handleAdd}>Add</button>
                </span>
                <hr />
              </form>
            </p>
          </div>
          <div className="invite-email-list">
            {studentList.map((student, index) => (
              <div className="student-email" key={index}>
                <p>
                  {student}
                  <span>
                    <hr />
                  </span>
                </p>
                <p
                  className="cancel-email"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  X
                </p>
              </div>
            ))}
          </div>
          <div className="invite-button-invite">
            <button onClick={handleInvite}>
              Invite
            </button>
          </div>
          {isLoading && <ReactLoading type="balls" color="#000000" height={'20%'} width={'20%'} />}
          <NotificationContainer/>
        </Modal.Body>
      </Modal>
    </>
  );
};
