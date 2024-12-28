import { Outlet } from "react-router-dom"; // Outlet para renderizar las páginas hijas
import "./Layout.css"; // Archivo de estilos para el layout

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
        <h1>Mi Aplicación</h1>
      </header>

      {/* Contenedor principal */}
      <div className="layout-main">
        {/* Sidebar */}
        <aside className="layout-sidebar">
          <nav>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/profile">Perfil</a></li>
              <li><a href="/settings">Configuración</a></li>
            </ul>
          </nav>
        </aside>

        {/* Contenido dinámico */}
        <main className="layout-content">
          <Outlet /> {/* Renderiza las páginas hijas */}
        </main>
      </div>

      {/* Footer */}
      <footer className="layout-footer">
        <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
