import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from '../../redux/actions/AssessmentAction'
import { getCourseDetail } from '../../redux/actions/CoursesAction';

const StudentAssessment = () => {
    const {id} = useParams()
    
    const dispatch = useDispatch();
    const {assessment} = useSelector(state => state.assessment)
    const {courseDetail} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(getQuestions(id));
        dispatch(getCourseDetail(id))
      }, [dispatch, id]);

    console.log(assessment)

    return (
        <>
        {courseDetail !== null && assessment !== null ? (
            <div className='student-assessment'>
                <div className="assessment-title">
                    {courseDetail === null ? (
                    <div>
                        <span className="link">Final Assessment</span>
                    </div>
                    ) : (
                    <div>
                        <span className="bread-crumb">{courseDetail.course.title}</span>/{" "}
                        <span className="link">Final Assessment</span>
                    </div>
                    )}
                    <div className="final-assessment-title">Final Assessment</div>
                </div>
                <div className='student-assessment-box'>
                    <h4>{assessment.length} Questions</h4>
                    <hr class="solid"></hr>
                    {assessment.map((item, index) => (
                    <div className='assessment-questions' key={index}>
                        <p>{item.number}. {item.question}</p>
                        <p>Answer</p>
                        <>
                        {item.options.map((item, id) => (
                            <label class="container">
                                <input type='radio' value={item.value}/>{' '}
                                <span>{item.text}</span>
                            </label>
                        ))}
                        </>
                    </div>
                        ))}
                </div>
                <div className='submit-assessment'>
                    <Link to={`/assessment/result/${assessment[0].courseId}`}>
                        <p><button>Submit Assessment</button></p>
                    </Link>
                </div>
            </div>
        ) : (
            <div id="loader"></div>
        )}
    </>
    )
}

export default StudentAssessment;