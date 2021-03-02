import React, { useEffect, useState } from "react";
import checklist from "../../assets/Vector2.png";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/actions/AssessmentAction";
import { useParams, Link } from "react-router-dom";
import { getCourseDetail } from "../../redux/actions/CoursesAction";

const StudentAssessmentResult = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [userChoice, setUserChoice] = useState(2);

  const { assessment } = useSelector((state) => state.assessment);
  const { courseDetail } = useSelector((state) => state.courses);
  const { studentScore } = useSelector((state) => state.assessment);

  useEffect(() => {
    dispatch(getQuestions(id));
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  console.log(assessment);
  console.log(studentScore);

  return (
    <>
      {assessment === null ? (
        <div id="loader"></div>
      ) : (
        <div className="student-assessment">
          <div className="assessment-title">
            {courseDetail === null ? (
              <div>
                <span className="bread-crumb">Final Assessment</span> /{" "}
                <span className="link">Result</span>
              </div>
            ) : (
              <div>
                <span className="bread-crumb">{courseDetail.course.title}</span>{" "}
                /{" "}
                <Link
                  className="bread-crumb"
                  to={`/assessment/${assessment[0].courseId}`}
                >
                  Final Assessment
                </Link>{" "}
                / <span className="link">Result</span>
              </div>
            )}
            <div className="final-assessment-title">
              <p>Final Assessment Result</p>
              <div className="result">
                <p className="total">
                  {/* {Math.trunc((2 / assessment.length) * 100)}% */}
                  {studentScore !== null ? (
                    <div>{studentScore.score}%</div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </p>
                {/* 2 is dummyData */}
                <p>
                  {/* {assessment.filter((item) => item.answer).length}  */}2 /
                  {assessment.length} Questions correct
                </p>
              </div>
            </div>
          </div>
          <div className="student-assessment-box">
            {assessment.length === null ? (
              <>
                <h4> </h4>
                <hr class="solid"></hr>
              </>
            ) : (
              <>
                <h4>{assessment.length} Questions</h4>
                <hr class="solid"></hr>
              </>
            )}

            {assessment.map((item, index) => (
              <div className="assessment-questions-result">
                <div className="questions-answer-box">
                  <p>
                    {item.number}. {item.question}
                  </p>
                  <>
                    {item.options.map((item_, id) => (
                      <>
                        {item_.value === item.answer ? (
                          <label class="container" key={id}>
                            <span>
                              <img src={checklist} alt="answer" />{" "}
                            </span>
                            <span>{item_.text}</span>
                          </label>
                        ) : (
                          <label class="container">
                            <span>
                              <input
                                type="radio"
                                name="radio"
                                value={item.value}
                                checked={item_.value === item.answer} // in result page, no radio button can be selected
                              />{" "}
                            </span>
                            <span>{item_.text}</span>
                          </label>
                        )}
                      </>
                    ))}
                  </>
                  <br />
                  <br />
                  {/* {item.isCorrect === true ? '' : (
                            <p>
                                <p className='remark'>Remark</p>
                                <p>{item.remark}</p>
                            </p>
                            )} */}
                  {/* </label> */}
                </div>
                <div className="assessment-correct">
                  {item.answer === userChoice ? (
                    <p className="correct">Correct</p>
                  ) : (
                    <p className="wrong">Wrong</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StudentAssessmentResult;
