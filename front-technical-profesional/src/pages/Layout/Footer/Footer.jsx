import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <i className="bx bx-home footer-icon"></i>
        <span className="footer-text">Home</span>
      </div>
      <div className="footer-item">
        <i className="bx bx-phone footer-icon"></i>
        <span className="footer-text">Contacto</span>
      </div>
      <div className="footer-item">
        <i className="bx bx-user-plus footer-icon"></i>
        <span className="footer-text">Nuevo usuario</span>
      </div>
      <div className="footer-item">
        <i className="bx bx-help-circle footer-icon"></i>
        <span className="footer-text">Ayuda</span>
      </div>
    </footer>
  );
};

export default Footer;
