import { Navigate } from "react-router-dom";
import LoginUser from "../pages/User/Login/LoginUser";
import Pages from "../pages"; 
import AuthGuard from "../components/auth/AuthGuard";

const userRoutes = [
  {
    path: "/", // Ruta base con redirección a /login
    element: <Pages />, // Usamos Pages como layout global
    children: [
      { path: "/", element: <Navigate to="/login" replace /> }, // Redirección
      { path: "login", element: <LoginUser />, hideFooter: true }, // Ocultar Footer en /login
      { path: "dashboard", element: <AuthGuard><h1>Company Dashboard</h1></AuthGuard> },
    ],
  },
];

export default userRoutes;
