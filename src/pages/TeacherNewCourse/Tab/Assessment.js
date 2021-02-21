import React, { useState } from "react";
import { Link } from "react-router-dom";
import { studentAssessment as assessment } from "../../../assets/JSONFile/dummyData";
import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";

const TeacherAssessmentTab = () => {
  const [isSave, setSave] = useState(false);
  const [isPicked, setPicked] = useState({
    data: [...assessment],
  });
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
          <>
            <div className="teacher-question-title">
              <h4>Questions</h4>
            </div>
            <div className="teacher-new-question">
              <div className="teacher-option-title">
                <h4>
                  #1{" "}
                  <span>
                    <input type="text" placeholder="Question" />
                    <hr type="solid" />
                  </span>
                </h4>
              </div>
              <br />
              <div className="teacher-option-box">
                <div className="teacher-answer-option">
                  <h5>Answer</h5>
                  <br />
                  <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input type="text" placeholder="Option" />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input type="text" placeholder="Option" />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input type="text" placeholder="Option" />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p>
                  <p>
                    <label class="container">
                      <input type="radio" name="radio" />{" "}
                      <span>
                        <input type="text" placeholder="Option" />
                        <hr type="solid" />
                      </span>
                    </label>
                  </p>
                </div>
                <div className="teacher-answer-remark">
                  <h5>Remark</h5>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Explain here..."
                    cols="45"
                    rows="5"
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
            </div>
            <div className="save-exam-question">
              <button onClick={handleSave}>Save Exam</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TeacherAssessmentTab;
