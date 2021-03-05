import React, { useEffect } from 'react';
import checklist from '../../assets/Vector2.png';
import { useDispatch, useSelector } from "react-redux"
import { getQuestions, getInputAnswer } from '../../redux/actions/AssessmentAction'
import { useParams } from 'react-router-dom';
import { getCourseDetail } from '../../redux/actions/CoursesAction';

const StudentAssessmentResult = () => {

    const dispatch = useDispatch();
    const {id} = useParams()

    const {assessment, finalScore, inputAnswer} = useSelector(state => state.assessment)
    const {courseDetail} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(getQuestions(id))
        dispatch(getCourseDetail(id))
      }, [dispatch, id]);

    console.log('inputanswer', inputAnswer)
    console.log(finalScore)

    return (
        <>
        {assessment === null || finalScore === null ? (
            <div id='loader'></div>
        ) : (
            <div className='student-assessment'>
                <div className="assessment-title">
                    {courseDetail === null ? (
                    <div>
                        <span className="bread-crumb">Final Assessment</span> / {' '}
                        <span className="link">Result</span>
                    </div>
                    ) : (
                    <div>
                        <span className="bread-crumb">{courseDetail.course.title}</span> /  {" "}
                        <span className="bread-crumb">Final Assessment</span> / {' '}
                        <span className="link">Result</span>
                    </div>
                    )}
                    <div className="final-assessment-title">
                        <p>Final Assessment Result</p>
                        <div className='result'>
                            <p className='total'>{finalScore.score}%</p>
                            <p>Questions correct</p>
                        </div>
                    </div>
                </div>
                <div className='student-assessment-box'>
                    {assessment.length === null ? (
                        <>
                        <h4>{' '}</h4>
                        <hr class="solid"></hr>
                        </>
                    ) : (
                        <>
                        <h4>{assessment.length} Questions</h4>
                        <hr class="solid"></hr>
                        </>
                    )}
                    
                    {assessment.map((item, index) => (
                        <div className='assessment-questions-result'>
                            <div className='questions-answer-box'>
                            <p>{item.number}. {item.question}</p>
                            <>
                            {item.options.map((item, id) => (
                                <>
                                    {item.value === assessment[index].answer ? (
                                    <label class="container" key={id}>
                                        <span>
                                            <img src={checklist} alt='answer'/> {' '}
                                        </span>
                                        <span>{item.text}</span>
                                    </label>
                                    ) : (
                                    <label class="container">
                                        <span>
                                            <input type="radio" name="radio" value={item.value} disabled/> {' '}
                                        </span>
                                        <span>{item.text}</span>
                                    </label>
                                    )}
                                </>
                            ))}
                            </>
                            <br/><br/>
                            </div>
                            <div className='assessment-correct'>
                                {item.answer === 3 ? (
                                    <p className='correct'>Correct</p>
                                ) : (
                                    <p className='wrong'>Wrong</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        )}
        </>
    )
}

export default StudentAssessmentResult;