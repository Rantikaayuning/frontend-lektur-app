import React, { useEffect } from 'react';
import checklist from '../../assets/Vector2.png';
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from '../../redux/actions/AssessmentAction'

const StudentAssessmentResult = () => {

    const dispatch = useDispatch();

    const assessment = useSelector(state => state.assessment.assessment)

    useEffect(() => {
        dispatch(getQuestions());
      }, [dispatch]);

    // console.log(assessment[0].answer)

    return (
        <>
            <div className='student-assessment'>
                <div className="assessment-title">
                    <div>
                        <span className="bread-crumb">Create Cinematic Music Video</span> /  {" "}
                        <span className="bread-crumb">Final Assessment</span> / {' '}
                        <span className="link">Result</span>
                    </div>
                    <div className="final-assessment-title">
                        <p>Final Assessment Result</p>
                        <div className='result'>
                            <p className='total'>{3/4*100}%</p>
                            <p>3/4 Questions correct</p>
                        </div>
                    </div>
                </div>
                <div className='student-assessment-box'>
                    <h4>{assessment.length} Questions</h4>
                    <hr class="solid"></hr>
                    
                    {assessment.map((item, index) => (
                        <div className='assessment-questions-result'>
                            <div className='questions-answer-box'>
                            <p>{item.number}. {item.question}</p>
                            <>
                            {item.options.map((item, id) => (
                                <>
                                    {item.value === assessment.answer ? (
                                    <label class="container">
                                        <span>
                                            <img src={checklist} alt='answer'/> {' '}
                                        </span>
                                        <span>{item.text}</span>
                                    </label>
                                    ) : (
                                    <label class="container">
                                        <span>
                                            <input type="radio" name="radio" value={item.value} /> {' '}
                                        </span>
                                        <span>{item.text}</span>
                                    </label>
                                    )}
                                </>
                            ))}
                            </>
                            <br/><br/>
                            {/* {item.isCorrect === true ? '' : (
                            <p>
                                <p className='remark'>Remark</p>
                                <p>{item.remark}</p>
                            </p>
                            )} */}
                            {/* </label> */}
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
        </>
    )
}

export default StudentAssessmentResult;