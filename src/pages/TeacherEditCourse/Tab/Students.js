import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
  Spinner,
} from "reactstrap";
import searchIcon from "../../../assets/search.png";
import checklistOne from "../../../assets/checklist1.png";
import checklistTwo from "../../../assets/checklist2.png";
import checklistThree from "../../../assets/checklist3.png";
import { PopUpInvite } from "../../../components/PopUp/PopUpInvite";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../../redux/actions/CoursesAction";
import {
  studentAcceptance,
  putStudentApprove,
} from "../../../redux/actions/TeacherAction";

const TeacherStudentsUpdate = () => {
  const [dropdownFilterOpen, setDropdownFilterOpen] = useState(false);
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const toggleSort = () => setDropdownSortOpen((before) => !before);
  const toggleFilter = () => setDropdownFilterOpen((prevState) => !prevState);
  const handlePopUp = () => setPopUpOpen(!isPopUpOpen);

  const { id } = useParams();
  const { studentsAccStatus, studentApprove } = useSelector(
    (state) => state.teachers
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(studentAcceptance(id));
  }, [dispatch, id]);
  function handleAccept(studentId) {
    dispatch(putStudentApprove(id, studentId));
  }
  console.log(`studentsAccStatus`, studentsAccStatus);
  console.log(`studentApprove`, studentApprove);
  return (
    <>
      <div className="teacher-assessment">
        <div className="teacher-dashboard-list">
          <Link to={`/course-teacher/course/${id}`}>
            <p>Course</p>
          </Link>
          <Link to={`/created-questions/${id}`}>
            <p>Assessment</p>
          </Link>
          <p className="open">Students</p>
        </div>
        <div className="teacher-students-menu-box">
          <div className="student-sort-box">
            <p>
              <input type="text" placeholder="Search" />
              <span>
                <img src={searchIcon} alt="icon" />
              </span>
              <hr type="solid" />
            </p>
            <div className="filter-sort-container">
              <div>
                <b>Filter</b>
              </div>
              <div>
                <Dropdown
                  isOpen={dropdownFilterOpen}
                  toggle={toggleFilter}
                  size="md"
                >
                  <DropdownToggle className="dropdown-menu-filter" color="none">
                    <div className="sidebar-dropdown-choose">
                      <p>Choose one</p>
                      <p>
                        <i className="fa fa-caret-down fa-lg dropbtn"></i>
                      </p>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="sidebar-dropdown-item">
                    <DropdownItem>Completed</DropdownItem>
                    <DropdownItem>Active</DropdownItem>
                    <DropdownItem>Pending</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/* <br/><br/> */}
            <div className="filter-sort-container">
              <div>
                <b>Sort</b>
              </div>
              <div>
                <Dropdown
                  isOpen={dropdownSortOpen}
                  toggle={toggleSort}
                  size="md"
                >
                  <DropdownToggle className="dropdown-menu-filter" color="none">
                    <div className="sidebar-dropdown-choose">
                      <p>Choose one</p>
                      <p>
                        <i className="fa fa-caret-down fa-lg dropbtn"></i>
                      </p>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="sidebar-dropdown-item">
                    <DropdownItem>Date</DropdownItem>
                    <DropdownItem>Name</DropdownItem>
                    <DropdownItem>Score</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="student-list-box">
            <div className="student-list-header">
              {studentsAccStatus.length === 0 ? (
                <h5>
                  <b>{studentsAccStatus.length} Students</b>
                </h5>
              ) : (
                <h5>
                  <b>Students</b>
                </h5>
              )}

              <p>
                <button onClick={handlePopUp}>Invite</button>
              </p>
              <PopUpInvite
                show={isPopUpOpen}
                onHide={() => setPopUpOpen(false)}
                togglePopUp={handlePopUp}
                setPopUpOpen={setPopUpOpen}
              />
            </div>
            {studentsAccStatus.length !== 0 ? (
              studentsAccStatus.map((item) => (
                <div className="student-list-name">
                  <div>
                    <p>
                      <b>{item.studentId.fullname}</b>
                    </p>
                    {item.status === 1 ? (
                      <p>
                        <img src={checklistTwo} alt="active" /> Active
                      </p>
                    ) : item.status === 2 ? (
                      <p>
                        <img src={checklistThree} alt="completed" /> Completed
                      </p>
                    ) : (
                      <p>
                        <img src={checklistOne} alt="pending" /> Pending
                      </p>
                    )}
                  </div>
                  <div className="course-status">
                    {item.status === 1 ? (
                      <div className="course-active">
                        <p>
                          <Progress
                            color="warning"
                            value={
                              (item.totalSeenCourses / item.totalCourse) * 100
                            }
                          />
                        </p>
                        <p>
                          {`${item.totalSeenCourses}/${item.totalCourse} Course Complete`}
                        </p>
                      </div>
                    ) : item.status === 2 ? (
                      <div className="course-completed">
                        <h3>{item.score}%</h3>
                        <p>Assessment Score</p>
                      </div>
                    ) : (
                      <div className="course-pending">
                        <p>
                          <button
                            onClick={() => handleAccept(item.studentId._id)}
                          >
                            Accept
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Spinner
                style={{
                  width: "6rem",
                  height: "6rem",
                  position: "fixed",
                  top: "50%",
                  left: "53%",
                }}
                color="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherStudentsUpdate;
