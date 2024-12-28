import userRoutes from './routes/userRoutes';
import resourceRoutes from './routes/resourcesRoutes';
import companyRoutes from './routes/companiesRoutes';

export default function routes() {
  this.namespace = '/api'; // Prefijo para todas las rutas

  // Permitir solicitudes no gestionadas por Mirage
  this.passthrough();

  // Registrar rutas de cada módulo
  userRoutes.call(this);
  resourceRoutes.call(this);
  companyRoutes.call(this);
}
