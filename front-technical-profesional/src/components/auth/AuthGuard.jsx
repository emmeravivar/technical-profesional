import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AuthGuard = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.authUser?.isLoggedIn);// Obtén el estado de autenticación desde el slice 'user'
    console.log("Estado de isLoggedIn:", isLoggedIn);
    // Si el usuario no está autenticado, redirige a /login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, renderiza el contenido protegido
    return children;
};
// Validación de props
AuthGuard.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo React y es requerido
  };
export default AuthGuard;
