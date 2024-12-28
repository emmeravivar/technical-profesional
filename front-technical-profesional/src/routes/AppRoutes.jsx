import { Routes, Route } from "react-router-dom";
import routesConfig from "./routes.config.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        >
          {route.children &&
            route.children.map((child, idx) => (
              <Route
                key={idx}
                path={child.path}
                element={child.element}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;
