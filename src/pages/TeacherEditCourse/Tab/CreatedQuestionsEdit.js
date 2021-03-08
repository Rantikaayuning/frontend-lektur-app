import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

import { studentAssessment as assessment } from "../../../assets/JSONFile/dummyData";
import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";
import {
  getQuestions,
  deleteQuestion,
} from "../../../redux/actions/AssessmentAction";

function CreatedQuestions() {
  // const [isPicked, setPicked] = useState({
  //   data: [...assessment],
  // });

  const history = useHistory();

  const { id } = useParams();

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.assessment.assessment);

  useEffect(() => {
    dispatch(getQuestions(id));
  }, [dispatch]);

  function handleDropDown(index) {
    // isPicked.data[index].isChosen
    //   ? (isPicked.data[index].isChosen = false)
    //   : (isPicked.data[index].isChosen = true);
    // setPicked({ ...isPicked });
  }
  function handleDropDownActive(index) {
    // if (isPicked.data[index].isChosen) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  console.log("allQuestions: ", allQuestions);

  const deleteCreatedQuestion = (courseId, questionId) => {
    dispatch(deleteQuestion(courseId, questionId))
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
        <div className="teacher-question-title">
          <h4>Questions</h4>
        </div>
        {allQuestions !== null ? (
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
                    <p>
                      <button
                        onClick={() => deleteCreatedQuestion(id, item._id)}
                        className="option-deletion-btn"
                        style={{
                          marginRight: "10px",
                          paddingTop: "4px",
                          paddingBottom: "2px",
                          fontWeight: "bolder",
                        }}
                      >
                        Delete
                      </button>
                      <Link
                        style={{
                          paddingRight: "20px",
                          fontWeight: "bolder",
                        }}
                        to={`/course-teacher/assessments/${id}/${item._id}`}
                      >
                        Edit
                      </Link>
                      <img
                        src={imgDropdown}
                        alt="symbol"
                        onClick={() => {
                          handleDropDown(index);
                        }}
                      />
                    </p>
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
        ) : (
          <div>Loading... </div>
        )}
      </div>
    </div>
  );
}

export default CreatedQuestions;
