import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Registration = lazy(() => import("../../views/auth/Registration"));

const publickRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
];

export default publickRoutes;
