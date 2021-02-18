import React, { useState } from "react";
import { Link } from "react-router-dom";
import { studentAssessment as assessment } from "../../../../assets/JSONFile/dummyData";
import imgDropdown from "../../../../assets/dropdownsymbol.png";

function CourseAssesment() {
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

  return (
    <div>
      <div className="teacher-dashboard-list">
        <Link to="/teacher-new-course">
          <p>Course</p>
        </Link>
        <Link to="/teacher-new-assessment">
          <p>Assessment</p>
        </Link>
        <p className="open">Students</p>
      </div>
      <div className="save-question-box">
        {assessment.map((item, index) => (
          <div className="questions-answer-box-save" key={index}>
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
              <div>
                <label className="container">
                  <p className="answer">Answer</p>
                  <input type="radio" name="radio" />
                  <span>{item.choiceOne}</span>
                </label>
                <label className="container">
                  <input type="radio" name="radio" />
                  <span>{item.choiceTwo}</span>
                </label>
                <label className="container">
                  <input type="radio" name="radio" />
                  <span>{item.choiceThree}</span>
                </label>
                <label className="container">
                  <input type="radio" name="radio" />
                  <span>{item.choiceFour}</span>
                </label>
                <label className="container">
                  <input type="radio" name="radio" />
                  <span>{item.choiceFive}</span>
                </label>
              </div>
            )}
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseAssesment;
