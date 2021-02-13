import React from 'react'
import { Row, Col} from "reactstrap";
import ContentCards from "../../components/ContentCard/Cards";
import { cardMaterial } from "../../assets/JSONFile/dummyData";
import image2 from "../../assets/Vector1.png"
import image3 from "../../assets/Vector2.png"
import image4 from "../../assets/Ellipse 1.png"
import ContentMaterial from "./content/index"

export default function StudentMaterial() {
    return (
        <>
        <div>
            <div className="content-material">
                <div className="text">
                    <div>
                    <span className="bread-crumb">Create Cinematic Music Video /</span>  {" "}
                    <span className="link">Lesson #1 : What is Cinematic?</span>
                    </div>
                    <div className="text-title">Lesson #1 : What is Cinematic?</div>
                </div>
                <div className="image-content">
                    <div>
                    <iframe src = "https://www.youtube.com/embed/0Rnj4w30Yvo?mute=1" title = "glints" className="image"/>
                        {/* <img src={Rectangle5} className="image"/> */}
                    </div>
                    <div className="content-lock-material">
                        <ContentMaterial/>
                    </div>
                </div>
                <div className="description">
                    <div className="description-text">
                        <div className="title-des">Description</div>
                        <p>Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis, eget faucibus iaculis facilisi pellentesque eleifend mattis vel. Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci. Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.</p> 
                    </div>
                    <div className="next">
                        <div className="title-next">What's Next</div>
                        <p><img src={image4} alt='cinematic course'/>{" "}Cinematic course material: <span>Cinematic and Open Source.pdf</span></p>
                        <p><img src={image3} alt='cinematic course'/>{" "}Cinematic course material: <span>Cinematic and Open Source2.pdf</span></p>
                        <button><img src={image2} alt='next lesson'/>{" "}Next lesson: What is vidio?</button>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-text-course">Related Course</div>
                    <Row className="content-card-container">
                        {cardMaterial.map((item, index) => (
                        <Col xs="6" sm="6" md="3" key={index} className="card-container">
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
        </div>
        </>
    )
}
