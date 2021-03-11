import React from "react";
import { Link } from "react-router-dom";
function CourseAssesment() {
  return (
    <div>
      <div className="teacher-dashboard-list">
        <Link to="/teacher-new-course">
          <p>Course</p>
        </Link>
        <Link to="/teacher-new-assessment">
          <p>Assessment</p>
        </Link>
        <p className="open">Students</p>
      </div>
    </div>
  );
}

export default CourseAssesment;
