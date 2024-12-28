import { createServer } from 'miragejs';
import models from './models';
import seeds from './seeds';
import routes from './routes';

export function makeServer() {
  return createServer({
    models,
    seeds,
    routes,
  });
}
