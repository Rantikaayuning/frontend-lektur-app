import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getQuestions, putFinalScore } from '../../redux/actions/AssessmentAction'
import { getCourseDetail } from '../../redux/actions/CoursesAction';
import { Modal, Button } from 'react-bootstrap'

const StudentAssessment = () => {
    const {id} = useParams()
    
    const dispatch = useDispatch();
    const {assessment, finalScore, inputAnswer} = useSelector(state => state.assessment)
    const {courseDetail} = useSelector(state => state.courses)

    const [selected, setSelected] = useState([])
    const [score, setScore] = useState(inputAnswer)
    // const [answer, setAnswer] = useState([])
    
    const handleChange = (e) => {
        const allSelected = selected.concat(e.target.value)
        setSelected(allSelected)
        // setSelected(selected + Number(e.target.value))
    }
    
    const handleChecked = () => {
        // handleShow(setScore(score + Number(selected)))
        handleShow(setScore(selected))
    }

    const handleSubmit = () => {
        const calculateScore = score.reduce((a, b) => Number(a) + Number(b))
        const submitScore = assessment.length !== null && (calculateScore/assessment.length)*100
        dispatch(putFinalScore(submitScore, id))
        handleClose()
    }

    useEffect(() => {
        dispatch(getQuestions(id));
        dispatch(getCourseDetail(id))
      }, [dispatch, id]);

    // modal confirm submit
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(assessment)
    console.log('selected', selected)
    console.log('score', score)
    console.log('finalScore', finalScore)

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
                        <Link to={`/course-detail/${id}`}>
                        <span className="bread-crumb">{courseDetail.course.title}</span>
                        </Link>{" "}/
                        <span className="link"> Final Assessment</span>
                    </div>
                    )}
                    <div className="final-assessment-title">Final Assessment</div>
                </div>
                <div className='student-assessment-box' >
                    <h4>{assessment.length} Questions</h4>
                    <hr class="solid"></hr>
                    {assessment.map((question, index) => (
                    <form key={assessment.number} >                            
                        <div className='assessment-questions' key={index} onChange={(e) => handleChange(e)}>
                        <p>{question.number}. {question.question}</p>
                        <p>Answer</p>
                        <p>
                            {question.options.map((option, id) => (
                                <label for={id} className='container'>
                                <input 
                                id={id} 
                                type='radio' 
                                name={assessment[index].question}
                                value={option.value === assessment[index].answer ? 1 : 0 }
                                />
                                {option.text}
                                </label>
                            ))}
                        </p>
                    </div>
                    </form>
                        ))}
                </div>
                <div className='submit-assessment'>
                    <p><button onClick={(e) => handleChecked(e)} className='button'>Submit Assessment</button></p>
                </div>
            </div>
        ) : (
            <div id="loader"></div>
        )}

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='submit-confirmation'>Are you sure you want to submit ?</div>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Link to={`/assessment/result/${id}`}>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default StudentAssessment;