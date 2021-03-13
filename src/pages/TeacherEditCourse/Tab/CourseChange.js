import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  getCourseDetail,
  uploadImage,
  updateCourse,
  deleteCourse,
} from "../../../redux/actions/CoursesAction";
import CreateContent from "../../../components/CreateContent";

const TeacherCourseUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { courseDetail, detailTitle, detailOverview, isLoading } = useSelector(
    (state) => state.courses
  );

  // const [isAdd, setAdd] = useState(false);
  const [title, setTitle] = useState(`${detailTitle}`);
  const [overview, setOverview] = useState(`${detailOverview}`);
  const [imageData, setImageData] = useState("");
  const [buttonImage, setButtonImage] = useState("Add header image");
  const [buttonSave, setButtonSave] = useState("Save");
  const [contentList, setContentList] = useState([]);

  const addCOntent = () => {
    setContentList(
      contentList.concat(<CreateContent key={contentList.length} />)
    );
  };

  // const handleAdd = () => {
  //   setAdd(true);
  // };

  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  const submitImage = () => {
    const data = new FormData();
    data.append("file", imageData);
    dispatch(uploadImage(id, data));
  };

  const submitUpdate = () => {
    dispatch(updateCourse(id, title, overview));
  };

  const deleteCourseTeacher = () => {
    dispatch(deleteCourse(id));
    history.push("/teacher-dashboard");
  };

  console.log(courseDetail, 'loading', isLoading)

  return (
    <>
      {courseDetail === null || isLoading ? (
        <div id="loader"></div>
      ) : (
        <div className="teacher-assessment">
          <div className="teacher-dashboard-list">
            <p className="open">Course</p>
            <Link to={`/created-questions/${id}`}>
              <p>Assessment</p>
            </Link>
            <Link to={`/course-teacher/students/${id}`}>
              <p>Students</p>
            </Link>
          </div>
          <div className="teacher-create-course-box">
            {courseDetail.course.title === null ? (
              <div className="teacher-new-course-title">
                <p>
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <hr type="solid" />
                </p>
              </div>
            ) : (
              <div className="teacher-new-course-title">
                <p>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                  />
                  <hr type="solid" />
                </p>
              </div>
            )}
            {courseDetail.course.overview === null ? (
              <div className="teacher-new-course-overview">
                <p>
                  <textarea
                    onChange={(e) => setOverview(e.target.value)}
                    type="text"
                    placeholder="Overview*"
                    cols="45"
                    rows="5"
                  />
                  <hr type="solid" />
                </p>
              </div>
            ) : (
              <div className="teacher-new-course-overview">
                <p>
                  <textarea
                    onChange={(e) => setOverview(e.target.value)}
                    type="text"
                    placeholder="Overview*"
                    value={overview}
                    cols="45"
                    rows="5"
                  />
                  <hr type="solid" />
                </p>
              </div>
            )}
            <div className="teacher-add-header-image">
              <p>
                <input
                  type="file"
                  placeholder="Image"
                  id="upload"
                  onChange={(e) => {
                    setImageData(e.target.files[0]);
                  }}
                />
              </p>
              <p onClick={() => setButtonImage("Image Saved")}>
                <button onClick={submitImage}>{buttonImage}</button>
              </p>

              <p>Max. size 5 MB. Supported format .png/jpg/jpeg</p>
              <hr type="solid" />
            </div>
            <div className="teacher-save-new-course">
              <p onClick={() => setButtonSave("Saved")}>
                {/* <Link to={`/course-teacher/lessons/${id}`}> */}
                <button onClick={submitUpdate}>{buttonSave}</button>
              </p>
            </div>
            <p>
              <hr type="solid" />
            </p>
            <div className="teacher-add-new-lesson-content">
              <h4>Add Content*</h4>
            </div>
            <CreateContent />
            <div className="teacher-add-new-lesson-button">
              {contentList}
              <p onClick={addCOntent}>Add new lesson</p>
            </div>
            <div className="publish-and-delete-course">
              <Link to={`/course-teacher/edit/${id}`}>
                <p>
                  <button>Publish Course</button>
                </p>
              </Link>
              <p className="delete" onClick={deleteCourseTeacher}>
                Delete Course
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherCourseUpdate;
