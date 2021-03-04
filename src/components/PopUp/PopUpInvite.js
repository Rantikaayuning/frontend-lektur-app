import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/actions/UserAction";
import { studentInvite } from "../../redux/actions/TeacherAction";
import { useParams } from "react-router-dom";

export const PopUpInvite = props => {
  const { id } = useParams();
  const [inputText, setInputText] = useState("");
  const [studentList, setStudentList] = useState([]);
  const dispatch = useDispatch();
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

  return (
    <>
      {" "}
      <Modal
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
                <hr type="solid" />
              </form>
            </p>
          </div>
          <div className="invite-email-list">
            {studentList.map((student, index) => (
              <div className="student-email" key={index}>
                <p>
                  {student}
                  <span>
                    <hr type="solid" />
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
            <button onClick={dispatch(studentInvite(id, studentList))}>
              Invite
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
