import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { studentAssessment as assessment } from "../../../assets/JSONFile/dummyData";
import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";
import {
  getQuestions,
  deleteQuestion,
} from "../../../redux/actions/AssessmentAction";

function CreatedQuestions(props) {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.assessment.assessment);

  useEffect(() => {
    dispatch(getQuestions(id));
  }, [dispatch]);

  console.log("allQuestions: ", allQuestions);

  const deleteCreatedQuestion = async (id, questionId) => {
    dispatch(deleteQuestion(id, questionId))
      .then(() => dispatch(getQuestions(id)))
      .then(() => history.push(`/created-questions/${id}`));
  };

  return (
    <div className="teacher-assessment">
      <div className="teacher-dashboard-list">
        <Link to={`/course-teacher/course/${id}`}>
          <p>Course</p>
        </Link>
        <p className="open">Assessment</p>
        <Link to={`/course-teacher/students/${id}`}>
          <p>Students</p>
        </Link>
      </div>
      <div className="teacher-save-question-box">
        {allQuestions.length !== 0 ? (
          <>
            <div className="teacher-question-title">
              <h4>Questions</h4>
            </div>
            <div className="teacher-new-question-save">
              <div className="teacher-option-save">
                <h4>{allQuestions.length} Questions </h4>
                <br />
              </div>
              <div className="save-question-box">
                {allQuestions.map((item, index) => (
                  <div className="questions-answer-box-save">
                    <div className="question-dropdown">
                      <p>
                        {item.number}. {item.question}
                      </p>

                      <div className="delete-edit-btn">
                        <div>
                          <button
                            onClick={toggle}
                            className="option-deletion-btn"
                            style={{
                              marginRight: "10px",
                              paddingTop: "0px",
                              paddingBottom: "2px",
                              fontWeight: "bolder",
                            }}
                          >
                            Delete
                          </button>
                          <Modal
                            isOpen={modal}
                            toggle={toggle}
                            className={className}
                          >
                            <ModalBody>
                              Are you sure you want to delete this question?
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="primary"
                                onClick={() =>
                                  deleteCreatedQuestion(id, item._id).then(() =>
                                    toggle()
                                  )
                                }
                              >
                                Delete
                                {/* {deleteCreatedQuestion(id, item._id)} */}
                              </Button>{" "}
                              <Button color="secondary" onClick={toggle}>
                                Cancel
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                        <Link
                          style={{
                            paddingRight: "20px",
                            fontWeight: "bolder",
                          }}
                          to={`/course-teacher/assessments/${id}/${item._id}`}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                    <p className="answer">Answer</p>
                    {item.options.map((option) => (
                      <label class="container">
                        <input
                          type="checkbox"
                          // name={index}
                          value={option.value}
                          checked={item.answer === option.value}
                        />
                        <span> {option.text}</span>
                        <span className="checkmark"></span>
                      </label>
                    ))}

                    <br />
                    <br />
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    textDecoration: "underline",
                  }}
                >
                  <Link to={`/teacher-new-assessment/${id}`}>
                    Add New Question
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div id="loader"></div>
        )}
      </div>
    </div>
  );
}

export default CreatedQuestions;
