import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StudentAssessment from "./pages/StudentAssessment";
import StudentAssessmentResult from "./pages/StudentAssessment/Result";
import StudentBoardAssessment from "./pages/StudentDashboard/Tab/Assessment";
import StudentBoardCourses from "./pages/StudentDashboard/Tab/Courses";
import StudentMaterial from "./pages/StudentMaterial";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherAssessmentTab from "./pages/TeacherNewCourse/Tab/Assessment";
import TeacherCourseTab from "./pages/TeacherNewCourse/Tab/Course";
import CourseFilled from "./pages/TeacherNewCourse/Tab/CourseFilled";
import TeacherStudentsTab from "./pages/TeacherNewCourse/Tab/Students";

export const publicRoutes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: SignUp,
    path: "/register",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: StudentBoardCourses,
    path: "/student-courses",
    exact: true,
  },
  {
    component: StudentBoardAssessment,
    path: "/student-assessment",
    exact: true,
  },
  {
    component: StudentMaterial,
    path: "/material",
    exact: true,
  },
  {
    component: StudentAssessment,
    path: "/assessment",
    exact: true,
  },
  {
    component: StudentAssessmentResult,
    path: "/assessment-result",
    exact: true,
  },
  {
    component: TeacherDashboard,
    path: "/teacher-dashboard",
    exact: true,
  },
  {
    component: TeacherCourseTab,
    path: "/teacher-new-course",
    exact: true,
  },
  {
    component: TeacherAssessmentTab,
    path: "/teacher-new-assessment",
    exact: true,
  },
  {
    component: TeacherStudentsTab,
    path: "/teacher-new-students",
    exact: true,
  },
  {
    component: CourseDetail,
    path: "/course-detail",
    exact: true,
  },
  {
    component: CourseFilled,
    path: "/course-filled-teacher",
    exact: true,
  },
];
