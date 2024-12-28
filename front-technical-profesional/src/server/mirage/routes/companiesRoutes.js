export default function companyRoutes() {
  // Obtener todas las compañías
  this.get('/companies', (schema) => schema.companies.all());

  // Obtener una compañía por ID
  this.get('/companies/:id', (schema, request) => {
    const id = request.params.id;
    return schema.companies.find(id);
  });

  // Crear una nueva compañía
  this.post('/companies', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.companies.create(attrs);
  });

  // Actualizar una compañía existente
  this.put('/companies/:id', (schema, request) => {
    const id = request.params.id;
    const attrs = JSON.parse(request.requestBody);
    return schema.companies.find(id).update(attrs);
  });

  // Eliminar una compañía
  this.delete('/companies/:id', (schema, request) => {
    const id = request.params.id;
    return schema.companies.find(id).destroy();
  });
}
