import userRoutes from "./userRoutes.jsx";
import companyRoutes from "./companyRoutes.jsx";
import resourceRoutes from "./resourceRoutes.jsx";

const routesConfig = [
  ...userRoutes,
  ...companyRoutes,
  ...resourceRoutes,
];

export default routesConfig;
