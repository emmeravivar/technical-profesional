
import { Outlet} from "react-router-dom";
import Footer from "./layout/Footer/Footer.jsx";
import "./index.scss";
// import routes from "../routes/routes.config.jsx";

const Pages = () => {
  // const location = useLocation();

  // // Filtrar las rutas que tienen `hideFooter: true`
  // const noFooterRoutes = routes
  //   .filter((route) => route.hideFooter)
  //   .map((route) => route.path);

  return (
    <div className="index-container">

  
        {/* Renderizar dinámicamente las vistas */}
        <Outlet />
        
        <Footer />


      {/* Footer global */}
      {/* {!noFooterRoutes.includes(location.pathname) && <Footer />} */}
    </div>
  );
};

export default Pages;
