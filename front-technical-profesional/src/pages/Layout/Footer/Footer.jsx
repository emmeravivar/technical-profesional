import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    { path: "/", label: "Home", icon: "bx-home" },
    { path: "/contact", label: "Contacto", icon: "bx-phone" },
    { path: "/new-user", label: "Nuevo usuario", icon: "bx-user-plus" },
    { path: "/help", label: "Ayuda", icon: "bx-help-circle" },
  ];

  return (
    <footer className="footer">
      <nav className="footer-nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="footer-link"
            activeClassName="active"
          >
            <i className={`bx ${link.icon}`} aria-hidden="true"></i>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
