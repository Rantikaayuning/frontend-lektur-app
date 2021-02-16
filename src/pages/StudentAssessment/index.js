import React from 'react';
import { studentAssessment as assessment } from '../../assets/JSONFile/dummyData';
import { Link } from 'react-router-dom'

const StudentAssessment = () => {

    return (
        <>
            <div className='student-assessment'>
                <div className="assessment-title">
                    <div>
                        <span className="bread-crumb">Create Cinematic Music Video</span> /  {" "}
                        <span className="link">Final Assessment</span>
                    </div>
                    <div className="final-assessment-title">Final Assessment</div>
                </div>
                <div className='student-assessment-box'>
                    <h4>{assessment.length} Questions</h4>
                    <hr class="solid"></hr>
                    {assessment.map((item, index) => (
                        <div className='assessment-questions'>
                            <p>{item.noQuestion}. {item.question}</p>
                            <p>Answer</p>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceOne}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceTwo}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceThree}</span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio"/>{' '}
                                <span>{item.choiceFour}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className='submit-assessment'>
                    <Link to='/assessment-result'>
                        <p><button>Submit Assessment</button></p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default StudentAssessment;