import React, { useEffect } from 'react'
import { Row, Col} from "reactstrap";
import { Link, useParams } from 'react-router-dom'
import ContentCards from "../../components/ContentCard/Cards";
import image2 from "../../assets/Vector1.png"
// import image3 from "../../assets/Vector2.png"
import image4 from "../../assets/radio-button.png"
import ContentMaterial from "./content/index"
import logo from "../../assets/Vector.png"
// import logo1 from "../../assets/Vector3.png"
import logo2 from "../../assets/Vector4.png"
import { getCourseDetail, getContentDetail, getCourses } from "../../redux/actions/CoursesAction";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import defaultImg from "../../assets/RectangleSquare.png";

export default function StudentMaterial() {
    const { id, content } = useParams()
    const dispatch = useDispatch()
    const { courseDetail, contentDetail, courses } = useSelector(state => state.courses)
    
    useEffect(() => {
        dispatch(getCourseDetail(id))
        dispatch(getContentDetail(content))
        dispatch(getCourses());
    }, [dispatch, id, content])

    // console.log("detail", courseDetail)
    // console.log("content", contentDetail)
    return (
        <>
            {courseDetail === null || contentDetail.content === undefined ? (
            <div id='loader'></div>
            ) : (
            <div className="content-material">
                <div className="text">
                    <div>
                    <span className="bread-crumb">{courseDetail.course.title}</span> /  {" "}
                    <span className="link">Lesson : {contentDetail.content.title}</span>
                    </div>
                    <div className="text-title">Lesson : {contentDetail.content.title}</div>
                </div>
                <div className="content-header">
                    <div className="image-content">
                        <div className="inframe">
                        <ReactPlayer 
                        controls url={contentDetail.content.video} 
                        className='video' 
                        width='100%' 
                        height='100%'
                        />
                        </div>
                        <div className="content-lock-material">
                            <ContentMaterial
                            lessonList=
                            {contentDetail.listContent.map((item, index) => (
                                <Link to={`/course-content/${id}/${item._id}`}>
                                <div className={'unlocked'}>
                                    <img src={index === 0 ? logo : logo2} alt='logo'/>Lesson #{index + 1} : {item.title}
                                </div>
                                </Link>
                            ))}
                            />
                        </div>
                    </div>
                    <div className="content-lock">
                        <div className="description-text">
                            <div className="title-des">Description</div>
                            <p>{contentDetail.content.description}</p> 
                        </div>  
                        <div className="next">
                            <div className="title-next">What's Next</div>
                            {contentDetail.material.map((item, index) => (
                                <p>
                                    <img src={image4} alt='cinematic course'/>{" "}{contentDetail.content.title} :{' '}
                                    <a href={item.material} target='_blank' rel='noreferrer'><span>{item._id}.pdf</span></a>
                                </p>
                            ))}
                            <Link to={`/course-content/${id}/${contentDetail.listContent[1]._id}`}>
                                <button>
                                    <img src={image2} alt='next lesson'/>{" "}{contentDetail.listContent[1].title}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-text-course">Related Course</div>
                    <Row className="content-card-container">
                    {courses.map((item, index) => ( index < 4 &&
                    <Col xl="3" md="6" sm="12" key={index} className="card-container">
                    <Link
                        to={`/course-detail/${item._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <ContentCards
                        image={item.image === null ? defaultImg : item.image}
                        text={item.overview}
                        title={item.title}
                        lecture={item.teacherId.fullname}
                        video_numbers={item.totalVideo}
                        material_numbers={item.totalMaterial}
                        footer="Business"
                        />
                    </Link>
                    </Col>
                    ))}
                    </Row>
                </div>
                <div className="empty"></div>
            </div>
            )}
       
        </>
    )
}
