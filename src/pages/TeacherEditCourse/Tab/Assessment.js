import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { produce } from "immer";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import trashCan from "../../../assets/trash.png";
import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../../redux/actions/CoursesAction";
import {
  updateQuestion,
  getQuestions,
  getOneQuestion,
  deleteQuestion,
} from "../../../redux/actions/AssessmentAction";

const TeacherAssessmentUpdate = (props) => {
  const history = useHistory();
  const { id, queId } = useParams();
  const dispatch = useDispatch();

  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // console.log(`queId:`, queId);

  const { assessment } = useSelector((state) => state.assessment);
  const {
    questionById,
    questionText,
    questionNumber,
    questionRemarks,
    questionOptions,
  } = useSelector((state) => state.assessment);

  useEffect(() => {
    dispatch(getQuestions(id));
    dispatch(getOneQuestion(queId));
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  console.log(assessment);
  console.log("questionById: ", questionById);
  console.log("questionText:", questionText);
  console.log("questionNumber:", questionNumber);
  console.log("questionRemarks", questionRemarks);
  console.log("questionOptions:", questionOptions);

  const [number, setNumber] = useState(questionNumber);
  const [question, setQuestion] = useState(questionText);
  const [remarks, setRemarks] = useState(questionRemarks);

  // const [question, setQuestion] = useState({
  //   number: questionNumber,
  //   question: questionText,
  //   remarks: questionRemarks,
  // });

  const [options, setOptions] = useState(
    questionOptions !== null
      ? questionOptions.map((item, index) => ({
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

  console.log(options);

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
    dispatch(updateQuestion(body, id, queId))
      .then(() => dispatch(getQuestions(id)))
      .then(() => history.push(`/created-questions/${id}`));
    // console.log(body);
  };

  // console.log(JSON.stringify(options, null, 2));

  const deleteCreatedQuestion = async () => {
    dispatch(deleteQuestion(id, queId))
      .then(() => dispatch(getQuestions(id)))
      .then(() => history.push(`/created-questions/${id}`));
  };

  return (
    <>
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
        <>
          {/* {questionById !== null ? ( */}
          <>
            <div className="teacher-question-title">
              <h4>Questions</h4>
            </div>
            <div className="teacher-new-question">
              <div className="teacher-option-title">
                <h4 className="question-answer-tag">
                  {questionNumber === null ? (
                    <>
                      <div>Loading..</div>#{" "}
                      {/* <input
                        className="number-input-tag"
                        type="text"
                        name="number"
                        placeholder="1"
                        // onChange={(e) => handleChange(e)}
                      /> */}
                    </>
                  ) : (
                    <>
                      #{" "}
                      <input
                        className="number-input-tag"
                        type="text"
                        name="number"
                        placeholder="1"
                        value={number}
                        // onChange={(e) => handleChange(e)}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </>
                  )}

                  {questionText === null ? (
                    <>
                      <div>Loading..</div>
                      {/* <input
                        className="question-input-tag"
                        type="text"
                        placeholder="Question"
                        name="question"
                        // onChange={(e) => handleChange(e)}
                      /> */}
                    </>
                  ) : (
                    <>
                      <input
                        className="question-input-tag"
                        type="text"
                        placeholder="Question"
                        name="question"
                        value={question}
                        // onChange={(e) => handleChange(e)}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </>
                  )}
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
                            onChange={(e) => {
                              const value = e.target.value;
                              setOptions((currentOption) =>
                                produce(currentOption, (v) => {
                                  v[index].value = Number(value);
                                })
                              );
                              setAnswer(value);
                              console.log(value);
                            }}
                            value={p.value}
                            // checked={answer ? true : false}
                          />

                          <input
                            className="options-table"
                            onChange={(e) => {
                              const text = e.target.value;
                              setOptions((currentOption) =>
                                produce(currentOption, (v) => {
                                  v[index].text = text;
                                })
                              );
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
                  {questionRemarks === null ? (
                    <>
                      <div>Loading..</div>
                      {/* <textarea
                        type="text"
                        name="remarks"
                        placeholder="Explain here..."
                        cols="61"
                        rows="5"
                        // onChange={(e) => handleChange(e)}
                      /> */}
                    </>
                  ) : (
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
                  )}
                  <br />
                </div>
              </div>
              <br />
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
                <img src={trashCan} onClick={toggle} className="trash-pic" />
              </div>
            </div>
          </>
          {/* ) : (
            <div id="loader"></div>
          )} */}

          <div className="add-new-question">
            <Link to={`/created-questions/${id}`}>See All Questions</Link>
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
            {/* </div> */}
          </div>
          <div className="save-exam-question">
            <button
              type="submit"
              onClick={
                (e) =>
                  !question.number
                    ? alert("Please fill in the number")
                    : !question.question
                    ? alert("Please fill in the question")
                    : !answer
                    ? alert("Please select the correct answer")
                    : !question.remarks
                    ? alert("Please fill in the remarks")
                    : !options.map((item) => item.text) // bugs
                    ? alert("Please fill in the options")
                    : handleSubmit(e)
                // : alert("Please fill in the question correctly")
              }
            >
              Save Exam
            </button>
          </div>
        </>
      </div>
    </>
  );
};

export default TeacherAssessmentUpdate;
