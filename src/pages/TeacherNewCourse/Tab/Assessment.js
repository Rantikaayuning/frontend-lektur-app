import React from 'react';
import { Link } from 'react-router-dom';
// import { teacherAssessment as assessment } from '../../assets/JSONFile/dummyData'

const TeacherAssessmentTab = () => {

    return (
        <>
            <div className='teacher-assessment'>
                <div className='teacher-dashboard-list'>
                    <Link to='/teacher-new-course'>
                        <p>Course</p>
                    </Link>
                        <p className='open'>Assessment</p>
                    <Link to='/teacher-new-students'>
                        <p>Students</p>
                    </Link>
                </div>
                <div className='teacher-question-title'>
                    <h4>Questions</h4>
                </div>
                <div className='teacher-new-question'>
                    <div className='teacher-option-title'>
                        <h4>#1 {' '} <span><input type="text" placeholder="Question"/><hr type="solid"/></span></h4>
                    </div>
                    <br/>
                    <div className='teacher-option-box'>
                        <div className='teacher-answer-option'>
                            <h5>Answer</h5><br/>
                            <p>
                            <label class="container">
                                <input type="radio" name="radio" /> {' '}
                                <span><input type="text" placeholder="Option"/><hr type="solid"/></span>
                            </label>
                            </p>
                            <p>
                            <label class="container">
                                <input type="radio" name="radio" /> {' '}
                                <span><input type="text" placeholder="Option"/><hr type="solid"/></span>
                            </label>
                            </p>
                            <p>
                            <label class="container">
                                <input type="radio" name="radio" /> {' '}
                                <span><input type="text" placeholder="Option"/><hr type="solid"/></span>
                            </label>
                            </p>
                            <p>
                            <label class="container">
                                <input type="radio" name="radio" /> {' '}
                                <span><input type="text" placeholder="Option"/><hr type="solid"/></span>
                            </label>
                            </p>
                        </div>
                        <div className='teacher-answer-remark'>
                            <h5>Remark</h5><br/>
                            <textarea type="text" placeholder="Explain here..." cols='45' rows='5'/>
                            <span><hr type="solid"/></span>
                        </div>
                    </div>
                    <br/>
                    <div className='teacher-add-more'>
                        <button>Add More Option</button>
                    </div>
                </div>
                <div className='add-new-question'>
                    <p>Add New Question</p>
                </div>
                <div className='save-exam-question'>
                    <button>Save Exam</button>
                </div>
            </div>
        </>
    )
}

export default TeacherAssessmentTab;