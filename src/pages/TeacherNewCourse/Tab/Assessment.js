import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAssessment } from "../../../redux/actions/AssessmentAction";

import { useDispatch } from "react-redux";

const TeacherAssessmentTab = () => {
  const dispatch = useDispatch();

  // const [moreOptions, setMoreOptions] = useState(false)

  const [question, setQuestion] = useState({
    number: 1,
    question: "",
    remarks: "",
  });

  const [answer, setAnswer] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, text: "" },
    { value: 2, text: "" },
    { value: 3, text: "" },
    { value: 4, text: "" },
    { value: 5, text: "" },
  ]);

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleOption = (value, text) => {
    let temp = options;
    temp[value - 1].text = text;
    // console.log(temp);
    setOptions(temp);
  };

  const body = [];

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
    // console.log(body);
  };

  return (
    <>
      <div className="teacher-assessment">
        <div className="teacher-dashboard-list">
          <Link to="/teacher-new-course">
            <p>Course</p>
          </Link>
          <p className="open">Assessment</p>
          <Link to="/teacher-new-students">
            <p>Students</p>
          </Link>
        </div>
        <form>
          <div className="teacher-question-title">
            <h4>Questions</h4>
          </div>
          <div className="teacher-new-question">
            <div className="teacher-option-title">
              <h4>
                #{" "}
                <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  placeholder="Question"
                  name="question"
                  onChange={(e) => handleChange(e)}
                />
                <hr type="solid" />
              </h4>
            </div>
            <br />
            <div className="teacher-option-box">
              <div className="teacher-answer-option">
                <h5> Answer</h5>
                <br />
                <table>
                  <label class="container">
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={1}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td className="options-table">
                        <input
                          className="options-table"
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(1, e.target.value)}
                        />
                        <hr type="solid" />
                      </td>
                    </tr>
                  </label>

                  <label class="container">
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={2}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td className="options-table">
                        <input
                          className="options-table"
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(2, e.target.value)}
                        />
                        <hr type="solid" />
                      </td>
                    </tr>
                  </label>

                  <label class="container">
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={3}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td className="options-table">
                        <input
                          className="options-table"
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(3, e.target.value)}
                        />
                        <hr type="solid" />
                      </td>
                    </tr>
                  </label>

                  <label class="container">
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={4}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td className="options-table">
                        <input
                          className="options-table"
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(4, e.target.value)}
                        />
                        <hr type="solid" />
                      </td>
                    </tr>
                  </label>

                  <label class="container">
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={5}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td className="options-table">
                        <input
                          className="options-table"
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(5, e.target.value)}
                        />
                        <hr type="solid" />
                      </td>
                    </tr>
                  </label>
                </table>
              </div>
              <div className="teacher-answer-remark">
                <h5>Remark</h5>
                <br />
                <textarea
                  type="text"
                  name="remarks"
                  placeholder="Explain here..."
                  cols="45"
                  rows="5"
                  onChange={(e) => handleChange(e)}
                />
                <span>
                  <hr type="solid" />
                </span>
              </div>
            </div>
            <br />
            <div className="teacher-add-more">
              <button>Add More Options</button>
            </div>
          </div>
          <div className="add-new-question">
            <p>Add New Question</p>
            <div>
              <Link to="/created-questions">See All Questions</Link>
            </div>
          </div>
          <div className="save-exam-question">
            <button type="submit" onClick={handleSubmit}>
              Save Exam
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TeacherAssessmentTab;
