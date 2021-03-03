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
import CourseUpdate from "./pages/TeacherNewCourse/Tab/CourseUpdate";
import TeacherStudentsTab from "./pages/TeacherNewCourse/Tab/Students";
import CourseChange from "./pages/TeacherEditCourse/Tab/CourseChange";
import CourseNextChange from "./pages/TeacherEditCourse/Tab/CourseNextChange";
import CourseFilledEdit from "./pages/TeacherEditCourse/Tab/CourseFilled";
import TeacherAssessmentUpdate from "./pages/TeacherEditCourse/Tab/Assessment";
import TeacherStudentsUpdate from "./pages/TeacherEditCourse/Tab/Students";
import CreatedQuestions from "./pages/TeacherNewCourse/Tab/CreatedQuestions";
import TeacherCourseUpdate from "./pages/TeacherEditCourse/Tab/CourseChange";

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
    path: "/course-content/:id/:content",
    exact: true,
  },
  {
    component: StudentAssessment,
    path: "/assessment/:id",
    exact: true,
  },
  {
    component: StudentAssessmentResult,
    path: "/assessment/result/:id",
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
    path: "/teacher-new-assessment", // should be /teacher-new-assessment/:id
    exact: true,
  },
  {
    component: TeacherStudentsTab,
    path: "/teacher-new-students", // should be /teacher-new-students/:id
    exact: true,
  },
  {
    component: CourseDetail,
    path: "/course-detail/:id",
    exact: true,
  },
  {
    component: CourseFilled,
    path: "/course-filled-teacher/:id",
    exact: true,
  },
  {
    component: CourseUpdate,
    path: "/course-update-teacher/:id",
    exact: true,
  },
  {
    component: CourseChange,
    path: "/course-teacher/course/:id",
    exact: true,
  },
  {
    component: CourseNextChange,
    path: "/course-teacher/lessons/:id",
    exact: true,
  },
  {
    component: CourseFilledEdit,
    path: "/course-teacher/edit/:id",
    exact: true,
  },
  {
    component: TeacherStudentsUpdate,
    path: "/course-teacher/students/:id",
    exact: true,
  },
  {
    component: TeacherAssessmentUpdate,
    path: "/course-teacher/assessments/:id",
    exact: true,
  },
  {
    component: TeacherCourseUpdate,
    path: "/course-change-teacher/:id",
    exact: true,
  },
  {
    component: CreatedQuestions,
    path: "/created-questions", // nanti tambah id jadi /created-questions/:id
    exact: true,
  },
];
