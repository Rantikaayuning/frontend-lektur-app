import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

import imgEdit from "../../../assets/editicon.png";
import imgDropdown from "../../../assets/dropdownsymbol.png";
import { getQuestions } from "../../../redux/actions/AssessmentAction";

function CreatedQuestions() {
  // const [isPicked, setPicked] = useState({
  //   data: [...assessment],
  // });

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

  return (
    <div className="teacher-assessment">
      <div className="teacher-dashboard-list">
        <Link to={`/course-filled-teacher/${id}`}>
          <p>Course</p>
        </Link>
        <p className="open">Assessment</p>
        <Link to={`/teacher-new-students/${id}`}>
          <p>Students</p>
        </Link>
      </div>
      <div className="teacher-save-question-box">
        {allQuestions.length === 0 ? (
          <>
            <div
              className="teacher-new-question-save"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>{allQuestions.length} Questions</h4>
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                <Link to={`/teacher-new-assessment/${id}`}>
                  Add New Question
                </Link>
              </span>
            </div>
            <div id="loader"></div>
          </>
        ) : (
          <>
            <div className="teacher-question-title">
              <h4>Questions</h4>
            </div>
            <div className="teacher-new-question-save">
              <div className="teacher-option-save">
                <h4>
                  {allQuestions.length} Questions{" "}
                  <Link to={`/created-questions/${id}`}>
                    <img src={imgEdit} alt="edit"></img>
                  </Link>
                </h4>
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
                    {item.options.map((option, index) => (
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

                    {handleDropDownActive(index) && (
                      <>
                        {/* <p className="answer">Answer</p>
                      {item.options.map((option, index) => (
                        <label class="container">
                          <input
                            type="radio"
                            name={index}
                            value={option.value}
                            checked={item.answer === option.value}
                          />
                          <span> {option.text}</span>
                        </label>
                      ))} */}

                        {/* <label class="container"> */}
                        {/* <p className="answer">Answer</p> */}
                        {/* <input type="radio" name="radio" />{" "}
                        <span>{item.options.text}</span> */}
                        {/* </label> */}

                        {/* <label class="container">
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
                      </label> */}
                      </>
                    )}
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
        )}
      </div>
    </div>
  );
}

export default CreatedQuestions;
