export default function resourceRoutes() {
    this.get('/resources', (schema) => schema.resources.all());
  
    this.get('/resources/:id', (schema, request) => {
      const id = request.params.id;
      return schema.resources.find(id);
    });
  
    this.post('/resources', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.resources.create(attrs);
    });
  
    this.put('/resources/:id', (schema, request) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody);
      return schema.resources.find(id).update(attrs);
    });
  
    this.delete('/resources/:id', (schema, request) => {
      const id = request.params.id;
      return schema.resources.find(id).destroy();
    });
  }
  