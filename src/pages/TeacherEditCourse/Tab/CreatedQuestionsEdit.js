import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import imgDropdown from "../../../assets/dropdownsymbol.png";
import { getQuestions } from "../../../redux/actions/AssessmentAction";

function CreatedQuestions() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.assessment.assessment);

  useEffect(() => {
    dispatch(getQuestions(id));
  }, [dispatch]);

  console.log("allQuestions: ", allQuestions);

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
                {allQuestions.map((item) => (
                  <div className="questions-answer-box-save" key={item._id}>
                    <div className="question-dropdown">
                      <p>
                        {item.number}. {item.question}
                      </p>

                      <div className="delete-edit-btn">
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
