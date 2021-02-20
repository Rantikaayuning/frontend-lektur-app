import React from 'react'
import { Row, Col} from "reactstrap";
import { Link } from 'react-router-dom'
import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial, studentCourses } from "../../assets/JSONFile/dummyData";
import image2 from "../../assets/Vector1.png"
import image3 from "../../assets/Vector2.png"
import image4 from "../../assets/radio-button.png"
import ContentMaterial from "./content/index"

export default function StudentMaterial() {
    return (
        <>
        
            <div className="content-material">
                    <div className="text">
                        <div>
                        <span className="bread-crumb">{studentCourses[0].title} /</span>  {" "}
                        <span className="link">Lesson #3 : {studentCourses[0].lesson[3]}</span>
                        </div>
                        <div className="text-title">Lesson #3 : {studentCourses[0].lesson[3]}</div>
                    </div>
                <div className="content-header">
                    <div className="image-content">
                        <div className="inframe">
                        <iframe src = "https://www.youtube.com/embed/0Rnj4w30Yvo?mute=1" title = "glints" className="image"/>
                        </div>
                        <div className="description-text">
                            <div className="title-des">Description</div>
                            <p>{studentCourses[0].description}</p> 
                        </div>  
                    </div>
                    <div className="content-lock">
                        <div className="content-lock-material">
                            <ContentMaterial/>
                        </div>
                        <div className="next">
                            <div className="title-next">What's Next</div>
                            <p><img src={image4} alt='cinematic course'/>{" "}{studentCourses[0].title}: <span>{studentCourses[0].title}.pdf</span></p>
                            <p><img src={image3} alt='cinematic course'/>{" "}{studentCourses[0].title}l: <span>{studentCourses[0].title}.pdf</span></p>
                            <Link to='/assessment'><button><img src={image2} alt='next lesson'/>{" "}Next lesson: What is vidio?</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-text-course">Related Course</div>
                    <Row className="content-card-container">
                        {cardMaterial.map((item, index) => (
                        <Col xs="12" sm="6" md="4" lg="3" key={index} className="card-container">
                        <ContentCards
                            image={item.image}
                            text={item.text}
                            title={item.title}
                            lecture={item.lecture}
                            video_numbers={item.video_numbers}
                            material_numbers={item.material_numbers}
                            footer={item.footer}
                        />
                        </Col>
                    ))}
                    </Row>
                </div>
                <div className="empty"></div>
            </div>
       
        </>
    )
}
