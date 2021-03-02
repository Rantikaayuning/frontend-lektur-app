import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  inputStudentScore,
} from "../../redux/actions/AssessmentAction";
import { getCourseDetail } from "../../redux/actions/CoursesAction";

const StudentAssessment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(55); // still manually input the score to test the action

  const { assessment } = useSelector((state) => state.assessment);
  const { courseDetail } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getQuestions(id));
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    // console.log(selected);
  };

  // console.log(assessment);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(inputStudentScore(score, id)).then(() =>
      history.push(`/assessment/result/${assessment[0].courseId}`)
    );
    console.log(`your score is ${score}`);
  };

  return (
    <>
      {courseDetail !== null && assessment !== null ? (
        <div className="student-assessment">
          <div className="assessment-title">
            {courseDetail === null ? (
              <div>
                <span className="link">Final Assessment</span>
              </div>
            ) : (
              <div>
                <span className="bread-crumb">{courseDetail.course.title}</span>{" "}
                / <span className="link">Final Assessment</span>
              </div>
            )}
            <div className="final-assessment-title">Final Assessment</div>
          </div>
          <div className="student-assessment-box">
            <h4>{assessment.length} Questions</h4>
            <hr class="solid"></hr>
            <form onSubmit={handleSubmit}>
              {assessment.map((item, index) => (
                <div className="assessment-questions" key={index}>
                  <p>
                    {item.number}. {item.question}
                  </p>
                  <p>Answer</p>
                  <>
                    {item.options.map((item_, index) => (
                      <>
                        <label class="container">
                          <input
                            type="radio"
                            name={`${index + 1}`}
                            value={item_.value}
                            // checked={selected === item_.value}
                            checked={selected === item_.value}
                            onChange={handleChange}
                          />
                          <span> {item_.text}</span>
                        </label>
                      </>
                    ))}
                    <div>
                      <b>Correct answer:</b>
                      {item.options.map((item_, index) => (
                        <>
                          {item.answer === item_.value && (
                            <div>
                              {item_.text} <b>({item_.value})</b>
                            </div>
                          )}
                        </>
                      ))}
                      <br />
                      Selected option is : {selected}{" "}
                      {/* <span>
                      {item.answer === selected ? setSelected(selected++) : null}
                    </span> */}
                    </div>
                  </>
                </div>
              ))}
              <div className="submit-assessment">
                <p>
                  <button>Submit Assessment</button>
                  {/* after submiting, get the score, then post/update the score */}
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div id="loader"></div>
      )}
    </>
  );
};

export default StudentAssessment;
