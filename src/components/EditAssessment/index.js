import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { produce } from "immer";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";

import {
  updateQuestion,
  getQuestions,
  deleteQuestion,
} from "../../redux/actions/AssessmentAction";
import trashCan from "../../assets/trash.png";

function EditAssessment({
  className,
  numberAll,
  questionAll,
  optionsAll,
  remarksAll,
  queId,
}) {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [buttonText, setButtonText] = useState("Update Question");

  const [number, setNumber] = useState(numberAll);
  const [question, setQuestion] = useState(questionAll);
  const [remarks, setRemarks] = useState(remarksAll);
  const [questionId, setQuestionId] = useState(queId);

  const [options, setOptions] = useState(
    optionsAll !== null
      ? optionsAll.map((item, index) => ({
          value: index + 1,
          text: item.text,
        }))
      : [
          { value: 1, text: "" },
          { value: 2, text: "" },
          { value: 8, text: "" },
          { value: 4, text: "" },
          { value: 5, text: "" },
        ]
  );

  const [answer, setAnswer] = useState(null);

  // const handleChange = (e) => {
  //   setQuestion({
  //     ...question,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      number: number,
      question: question,
      remarks: remarks,
      answer: answer,
      options: options,
    };
    dispatch(updateQuestion(body, id, questionId))
      .then(() => dispatch(getQuestions(id)))
      .then(() => setButtonText("Updated"));
    // .then(() => history.push(`/new-created-questions/${id}`));
    // console.log(body);
  };

  const deleteCreatedQuestion = async () => {
    dispatch(deleteQuestion(id, questionId))
      .then(() => dispatch(getQuestions(id)))
      .then(() => history.push(`/new-created-questions/${id}`));
  };

  // console.log(JSON.stringify(options, null, 2));

  return (
    <>
      <div className="teacher-assessment">
        <>
          <div className="teacher-new-question">
            <div className="teacher-option-title">
              <h4 className="question-answer-tag">
                <>
                  #{" "}
                  <input
                    className="number-input-tag"
                    type="text"
                    name="number"
                    placeholder="1"
                    required
                    value={number}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </>
                <>
                  <input
                    className="question-input-tag"
                    type="text"
                    placeholder="Question"
                    name="question"
                    required
                    value={question}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </>
              </h4>
            </div>
            <br />
            <div className="teacher-option-box">
              <div className="teacher-answer-option">
                <h5 className="answer-title"> Answer</h5>
                <br />
                {options.map((p, index) => {
                  return (
                    <div key={p.value}>
                      <label class="container-assessment">
                        <input
                          className="radio-option"
                          type="radio"
                          name="value"
                          required
                          onChange={(e) => {
                            const value = e.target.value;
                            setOptions((currentOption) =>
                              produce(currentOption, (v) => {
                                v[index].value = Number(value);
                              })
                            );
                            console.log(value);
                            // e.target.value
                            setAnswer(value);
                          }}
                          value={p.value}
                        />

                        <input
                          className="options-table"
                          required
                          onChange={(e) => {
                            const text = e.target.value;
                            setOptions((currentOption) =>
                              produce(currentOption, (v) => {
                                v[index].text = text;
                              })
                            );
                            // e.target.value
                          }}
                          value={p.text}
                          placeholder="Option"
                        />

                        {/* a button bellow is for option deletion */}
                        <button
                          className="option-deletion-btn"
                          onClick={() =>
                            setOptions((currentOption) =>
                              currentOption.filter((x) => x.value !== p.value)
                            )
                          }
                        >
                          x
                        </button>
                      </label>
                    </div>
                  );
                })}

                {/* <pre>{JSON.stringify(options, null, 2)}</pre> */}
              </div>
              <div className="teacher-answer-remark">
                <h5>Remark</h5>
                <br />
                <>
                  <textarea
                    type="text"
                    name="remarks"
                    placeholder="Explain here..."
                    cols="61"
                    rows="5"
                    value={remarks}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </>
              </div>
            </div>
            <br />

            <div className="more-option-save">
              <div className="teacher-add-more">
                <button
                  onClick={() =>
                    setOptions((currentOption) => [
                      ...currentOption,
                      {
                        value: options.length + 1,
                        text: "",
                      },
                    ])
                  }
                >
                  Add More Options
                </button>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={trashCan} onClick={toggle} className="trash-pic" />
                <p
                  type="submit"
                  className="save-per-question"
                  onClick={(e) =>
                    !number
                      ? alert("Please fill in the number")
                      : !question
                      ? alert("Please fill in the question")
                      : !answer
                      ? alert("Please select the correct answer")
                      : // : !remarks
                        // ? alert("Please fill in the remarks")
                        setButtonText("CLICK to update!")
                  }
                >
                  <button
                    type="submit"
                    onClick={(e) =>
                      buttonText === "CLICK to update!" ? handleSubmit(e) : null
                    }
                  >
                    {buttonText}
                  </button>
                </p>
              </div>
            </div>
            <div>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                  Are you sure you want to delete this question?
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    onClick={() => deleteCreatedQuestion().then(() => toggle())}
                  >
                    Delete
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default EditAssessment;
