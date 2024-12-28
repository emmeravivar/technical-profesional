export default function userRoutes() {
    // Ruta para login
    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ email });
  
      if (user && user.password === password) {
        return {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            token: "fake-jwt-token", // Token simulado
          },
        };
      } else {
        return new Response(401, {}, { message: "Credenciales incorrectas" });
      }
    });
  }
  