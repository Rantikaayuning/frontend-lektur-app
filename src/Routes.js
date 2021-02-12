import Home from "./pages/Home";
import Login from "./pages/Login";

export const publicRoutes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    exact: true,
  },
];
