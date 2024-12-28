import AuthGuard from "../components/auth/AuthGuard";

const companyRoutes = [
  { path: "/dashboard", element: <AuthGuard><h1>Company Dashboard</h1></AuthGuard> },
];

export default companyRoutes;
