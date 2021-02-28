import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAssessment } from "../../../redux/actions/AssessmentAction";
import { produce } from "immer";

import { useDispatch } from "react-redux";

const TeacherAssessmentTab = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState({
    number: 1,
    question: "",
    remarks: "",
  });

  const [options, setOptions] = useState([
    { value: 1, text: "" },
    { value: 2, text: "" },
    { value: 3, text: "" },
    { value: 4, text: "" },
  ]);

  const [answer, setAnswer] = useState(null);

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      number: question.number,
      question: question.question,
      remarks: question.remarks,
      answer: answer,
      options: options,
    };
    dispatch(postAssessment(body));
    // history.push("/teacher-new-assessment");
    console.log(body);
  };

  // console.log(JSON.stringify(options, null, 2));

  return (
    <>
      <div className="teacher-assessment">
        <div className="teacher-dashboard-list">
          <Link to="/teacher-create-course">
            <p>Course</p>
          </Link>
          <p className="open">Assessment</p>
          <Link to="/teacher-new-students">
            <p>Students</p>
          </Link>
        </div>
        <>
          <div className="teacher-question-title">
            <h4>Questions</h4>
          </div>
          <div className="teacher-new-question">
            <div className="teacher-option-title">
              <h4 className="question-answer-tag">
                #{" "}
                <input
                  className="number-input-tag"
                  type="text"
                  name="number"
                  placeholder="1"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="question-input-tag"
                  type="text"
                  placeholder="Question"
                  name="question"
                  onChange={(e) => handleChange(e)}
                />
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
                            console.log(value);
                            // e.target.value
                            setAnswer(value);
                          }}
                          value={p.value}
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
                <textarea
                  type="text"
                  name="remarks"
                  placeholder="Explain here..."
                  cols="61"
                  rows="5"
                  onChange={(e) => handleChange(e)}
                />
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
            </div>
          </div>
          <div className="add-new-question">
            <Link to="/teacher-new-assessment">Add New Question</Link>
            <div>
              <Link to="/created-questions">See All Questions</Link>
            </div>
          </div>
          <div className="save-exam-question">
            <button type="submit" onClick={handleSubmit}>
              Save Exam
            </button>
          </div>
        </>
      </div>
    </>
  );
};

export default TeacherAssessmentTab;
