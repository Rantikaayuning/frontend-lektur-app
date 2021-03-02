import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/actions/AssessmentAction";
import { getCourseDetail } from "../../redux/actions/CoursesAction";

const StudentAssessment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selected, setSelected] = useState(null);

  const { assessment } = useSelector((state) => state.assessment);
  const { courseDetail } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getQuestions(id));
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  const correctAnswer = assessment.filter((item) => item.answer);
  console.log(correctAnswer);

  const onValueChange = (e) => {
    setSelected(e.target.value);
    // console.log(selected);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // then post something
    console.log(selected);
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
            {assessment.map((item, index) => (
              <div className="assessment-questions" key={index}>
                <p>
                  {item.number}. {item.question}
                </p>
                <p>Answer</p>
                <>
                  {item.options.map((item_, index) => (
                    <label class="container">
                      <input
                        type="radio"
                        name={`${index + 1}`}
                        value={item_.value}
                        checked={selected === item_.value}
                        onChange={onValueChange}
                      />
                      <span> {item_.text}</span>
                    </label>
                  ))}
                  <div>
                    Selected option is : {selected}{" "}
                    {/* <span>
                      {item.answer === selected ? " correct" : " wrong"}
                    </span> */}
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="submit-assessment">
            <Link to={`/assessment/result/${assessment[0].courseId}`}>
              <p>
                <button onClick={onFormSubmit}>Submit Assessment</button>
                {/* after submit, get the score, then post the score */}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div id="loader"></div>
      )}
    </>
  );
};

export default StudentAssessment;
