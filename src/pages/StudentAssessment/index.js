import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/actions/AssessmentAction";

const StudentAssessment = () => {
  // const [userAnswer, setUserAnswer] = useState()

  // const {id} = useParams();
  const dispatch = useDispatch();

  const assessment = useSelector((state) => state.assessment.assessment);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  // console.log(assessment)

  return (
    <>
      <div className="student-assessment">
        {assessment !== null ? (
          <>
            <div className="assessment-title">
              <div>
                <span className="bread-crumb">
                  Create Cinematic Music Video
                </span>{" "}
                / <span className="link">Final Assessment</span>
              </div>
              <div className="final-assessment-title">Final Assessment</div>
            </div>
            <div className="student-assessment-box">
              <h4>{assessment.length} Questions</h4>
              <hr class="solid"></hr>
              <form onSubmit={""}>
                {assessment.map((item, index) => (
                  <div className="assessment-questions" key={index}>
                    <p>
                      {item.number}. {item.question}
                    </p>
                    <p>Answer</p>
                    <>
                      {item.options.map((opt, index) => (
                        <label class="container">
                          <input
                            type="radio"
                            name={index}
                            id={opt._id}
                            value={opt.value}
                            checked={item.answer === opt.value} // correct value
                            onChange={""}
                          />{" "}
                          <span>{opt.text}</span>
                        </label>
                      ))}
                    </>
                  </div>
                ))}
              </form>
            </div>
          </>
        ) : (
          <div id="loader"></div>
        )}

        <div className="submit-assessment">
          <Link to="/assessment-result">
            <p>
              <button>Submit Assessment</button>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentAssessment;
