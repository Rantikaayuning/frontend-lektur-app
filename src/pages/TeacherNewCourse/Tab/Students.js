<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
} from "reactstrap";
import searchIcon from "../../../assets/search.png";
import { studentEnroll } from "../../../assets/JSONFile/dummyData";
import checklistOne from "../../../assets/checklist1.png";
import checklistTwo from "../../../assets/checklist2.png";
import checklistThree from "../../../assets/checklist3.png";

const TeacherStudentsTab = () => {
  const [dropdownFilterOpen, setDropdownFilterOpen] = useState(false);
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);

  const toggleSort = () => setDropdownSortOpen(before => !before);
  const toggleFilter = () => setDropdownFilterOpen(prevState => !prevState);
=======
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import searchIcon from '../../../assets/search.png';
import {studentEnroll} from '../../../assets/JSONFile/dummyData';
import checklistOne from '../../../assets/checklist1.png'
import checklistTwo from '../../../assets/checklist2.png'
import checklistThree from '../../../assets/checklist3.png'
import { PopUpInvite } from '../../../components/PopUp/PopUpInvite'

const TeacherStudentsTab = () => {
    const [dropdownFilterOpen, setDropdownFilterOpen] = useState(false);
    const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
    const [isPopUpOpen, setPopUpOpen] = useState(false)

    const toggleSort = () => setDropdownSortOpen(before => !before);
    const toggleFilter = () => setDropdownFilterOpen(prevState => !prevState);
    const handlePopUp = () => setPopUpOpen(!isPopUpOpen)
>>>>>>> 42fcbcc66009abe377af60986d8b1e4adb0b84c3

  return (
    <>
      <div className="teacher-assessment">
        <div className="teacher-dashboard-list">
          <Link to="/teacher-new-course">
            <p>Course</p>
          </Link>
          <Link to="/teacher-new-assessment">
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
            <p>
              <b>Filter</b>
            </p>
            <p>
              <Dropdown
                isOpen={dropdownFilterOpen}
                toggle={toggleFilter}
                size="md"
              >
                <DropdownToggle className="dropdown-menu" color="none">
                  <div className="sidebar-dropdown-choose">
                    <p>Choose one</p>
                    <p>
                      <i className="fa fa-caret-down fa-lg dropbtn"></i>
                    </p>
                  </div>
                </DropdownToggle>
                <DropdownMenu className="sidebar-dropdown-item">
                  <DropdownItem>1.</DropdownItem>
                  <DropdownItem>2.</DropdownItem>
                  <DropdownItem>3.</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </p>
            <br />
            <br />
            <p>
              <b>Sort</b>
            </p>
            <p>
              <Dropdown isOpen={dropdownSortOpen} toggle={toggleSort} size="md">
                <DropdownToggle className="dropdown-menu" color="none">
                  <div className="sidebar-dropdown-choose">
                    <p>Choose one</p>
                    <p>
                      <i className="fa fa-caret-down fa-lg dropbtn"></i>
                    </p>
                  </div>
                </DropdownToggle>
                <DropdownMenu className="sidebar-dropdown-item">
                  <DropdownItem>1.</DropdownItem>
                  <DropdownItem>2.</DropdownItem>
                  <DropdownItem>3.</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </p>
          </div>
          <div className="student-list-box">
            <div className="student-list-header">
              <h5>
                <b>Students</b>
              </h5>
              <p>
                <button>Invite</button>
              </p>
            </div>
            {studentEnroll.map(item => (
              <div className="student-list-name">
                <div>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  {item.isActive === true ? (
                    <p>
                      <img src={checklistTwo} alt="active" /> Active
                    </p>
                  ) : item.isCompleted === true ? (
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
                  {item.isActive === true && item.isPending === false ? (
                    <div className="course-active">
                      <p>
                        <Progress
                          color="warning"
                          value={(item.noQuestion / item.totalQuestion) * 100}
                        />
                      </p>
                      <p>
                        {item.noQuestion}/{item.totalQuestion} Course Complete
                      </p>
                    </div>
                  ) : item.isCompleted === true ? (
                    <div className="course-completed">
                      <h3>{item.score}%</h3>
                      <p>Assessment Score</p>
                    </div>
<<<<<<< HEAD
                  ) : (
                    <div className="course-pending">
                      <p>
                        <button>Accept</button>
                      </p>
=======
                    <div className='student-list-box'>
                        <div className='student-list-header'>
                            <h5><b>Students</b></h5>
                            <p><button onClick={handlePopUp}>Invite</button></p>
                            <PopUpInvite show={isPopUpOpen} onHide={() => setPopUpOpen(false)} togglePopUp={handlePopUp}/>
                        </div>
                        {studentEnroll.map((item) => (
                        <div className='student-list-name'>
                            <div>
                                <p><b>{item.name}</b></p>
                                {item.isActive === true ? (
                                    <p><img src={checklistTwo} alt='active'/>{' '}Active</p>
                                ) : item.isCompleted === true ? (
                                    <p><img src={checklistThree} alt='completed'/>{' '}Completed</p>
                                ) : (
                                    <p><img src={checklistOne} alt='pending'/>{' '}Pending</p>
                                )}
                            </div>
                            <div className='course-status'>
                                {item.isActive === true && item.isPending === false ? (
                                    <div className='course-active'>
                                        <p><Progress color="warning" value={(item.noQuestion/item.totalQuestion)*100}/></p>
                                        <p>{item.noQuestion}/{item.totalQuestion} Course Complete</p>
                                    </div>
                                ) : item.isCompleted === true ? (
                                    <div className='course-completed'>
                                        <h3>{item.score}%</h3>
                                        <p>Assessment Score</p>
                                    </div>
                                ) : (
                                    <div className='course-pending'>
                                        <p><button>Accept</button></p>
                                    </div>
                                )}
                            </div>
                        </div>
                        ))}
>>>>>>> 42fcbcc66009abe377af60986d8b1e4adb0b84c3
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherStudentsTab;
