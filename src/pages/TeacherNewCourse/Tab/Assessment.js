import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { studentAssessment as assessment } from "../../../assets/JSONFile/dummyData";
import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";
import { postAssessment } from "../../../redux/actions/AssessmentAction";

import { useDispatch } from "react-redux";

// const options = {
//   value: null,
//   text: "",
// };

const TeacherAssessmentTab = () => {
  const history = useHistory();

  const [isSave, setSave] = useState(false);
  const [isPicked, setPicked] = useState({
    data: [...assessment],
  });
  // add assesemnt
  const [question, setQuestion] = useState({
    number: 1,
    question: "",
    answer: null,
    options: [{ value: 0, text: "" }],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      number: question.number,
      question: question.question,
      answer: question.answer,
      value: question.options.length + 1,
      // text: question.options.text,
      options: options,
    };
    dispatch(postAssessment(body));
    console.log(question);
  };

  const dispatch = useDispatch();

  function handleDropDown(index) {
    isPicked.data[index].isChosen
      ? (isPicked.data[index].isChosen = false)
      : (isPicked.data[index].isChosen = true);
    setPicked({ ...isPicked });
  }
  function handleDropDownActive(index) {
    if (isPicked.data[index].isChosen) {
      return true;
    } else {
      return false;
    }
  }

  const handleSave = () => {
    setSave(!isSave);
  };

  const handleOption = (value, text) => {
    let temp = options;
    temp[value - 1].text = text;
    console.log(temp);
    setOptions(temp);
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
        {isSave ? (
          <div className="teacher-save-question-box">
            <div className="teacher-question-title">
              <h4>Questions</h4>
            </div>
            <div className="teacher-new-question-save">
              <div className="teacher-option-save">
                <h4>
                  {assessment.length} Questions{" "}
                  <span>
                    <img src={imgEdit} alt="edit" onClick={handleSave} />
                  </span>
                </h4>
                <br />
              </div>
              <div className="save-question-box">
                {assessment.map((item, index) => (
                  <div className="questions-answer-box-save">
                    <div className="question-dropdown">
                      <p>
                        {item.noQuestion}. {item.question}
                      </p>
                      <p>
                        <img
                          src={imgDropdown}
                          alt="symbol"
                          onClick={() => {
                            handleDropDown(index);
                          }}
                        />
                      </p>
                    </div>
                    {handleDropDownActive(index) && (
                      <>
                        <label class="container">
                          <p className="answer">Answer</p>
                          <input type="radio" name="radio" />{" "}
                          <span>{item.choiceOne}</span>
                        </label>
                        <label class="container">
                          <input type="radio" name="radio" />{" "}
                          <span>{item.choiceTwo}</span>
                        </label>
                        <label class="container">
                          <input type="radio" name="radio" />{" "}
                          <span>{item.choiceThree}</span>
                        </label>
                        <label class="container">
                          <input type="radio" name="radio" />{" "}
                          <span>{item.choiceFour}</span>
                        </label>
                        <label class="container">
                          <input type="radio" name="radio" />{" "}
                          <span>{item.choiceFive}</span>
                        </label>
                      </>
                    )}
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // <form onSubmit={handleSubmit}>
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
                    onChange={(e) => handleChange(e)}
                  />
                  <span>
                    <input
                      type="text"
                      placeholder="Question"
                      name="question"
                      onChange={(e) => handleChange(e)}
                    />
                    <hr type="solid" />
                  </span>
                </h4>
              </div>
              <br />
              <div className="teacher-option-box">
                <div className="teacher-answer-option">
                  <h5>Answer</h5>
                  <br />
                  {/* <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input
                          type="text"
                          placeholder="Option"
                          name="text"
                          onChange={(e) => handleChange(e)}
                        />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p> */}
                  {/* <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input
                          type="text"
                          placeholder="Option"
                          name="text"
                          onChange={(e) => handleChange(e)}
                        />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p> */}
                  {/* <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input
                          type="text"
                          placeholder="Option"
                          name="text"
                          onChange={(e) => handleChange(e)}
                        />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p> */}
                  {/* <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input
                          type="text"
                          placeholder="Option"
                          name="text"
                          onChange={(e) => handleChange(e)}
                        />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p> */}
                  {/* <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input
                          type="text"
                          placeholder="Option"
                          name="text"
                          onChange={(e) => handleChange(e)}
                        />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p> */}
                  <table>
                    <tr>
                      {/* <th>Radio</th>
                      <th>Options</th> */}
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={1}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) => handleOption(1, e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={2}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) =>
                            setOptions([
                              ...options,
                              { value: 2, text: e.target.value },
                            ])
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={3}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) =>
                            setOptions([
                              ...options,
                              { value: 3, text: e.target.value },
                            ])
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={4}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) =>
                            setOptions([
                              ...options,
                              { value: 4, text: e.target.value },
                            ])
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="answer"
                          value={5}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="options"
                          placeholder="Option"
                          onChange={(e) =>
                            setOptions([
                              ...options,
                              { value: 5, text: e.target.value },
                            ])
                          }
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="teacher-answer-remark">
                  <h5>Remark</h5>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Explain here..."
                    cols="45"
                    rows="5"
                    name="remarks"
                    onChange={(e) => handleChange(e)}
                  />
                  <span>
                    <hr type="solid" />
                  </span>
                  {/* <label>
                    Correct Answer:
                    <br />
                    <input
                      type="text"
                      placeholder="Correct Answer"
                      name="answer"
                      onChange={(e) => handleChange(e)}
                    />
                  </label> */}
                </div>
              </div>
              <br />
              <div className="teacher-add-more">
                <button>Add More Options</button>
              </div>
            </div>
            <div className="add-new-question">
              <p>Add New Question</p>
            </div>
            <div className="save-exam-question">
              <button type="submit" onClick={handleSubmit}>
                Save Exam
              </button>
              {/* <button onClick={handleSave}>Save Exam</button> */}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default TeacherAssessmentTab;
