import React from 'react';
import { studentAssessment as assessment } from '../../assets/JSONFile/dummyData';
import checklist from '../../assets/Vector2.png';

const StudentAssessmentResult = () => {

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
                            <p>{item.noQuestion}. {item.question}</p>
                            
                            <label class="container">
                                <p className='answer'>Answer</p>
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceOne}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceTwo}</span>
                            </label>
                            <label class="container">
                                <img src={checklist} alt='right answer'/>{' '}
                                <span>{item.choiceThree}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceFour}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceFive}</span>
                            <br/><br/>
                            {item.isCorrect === true ? '' : (
                            <p>
                                <p className='remark'>Remark</p>
                                <p>{item.remark}</p>
                            </p>
                            )}
                            </label>
                            </div>
                            <div className='assessment-correct'>
                                {item.isCorrect === true ? (
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