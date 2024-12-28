// import { useState } from "react";
// // import Footer from "../layout/Footer";
// import userData from "../../data/user";

const LoginUser = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Validar credenciales contra los datos de usuario
  //   const user = userData.find((user) => user.email === email && user.password === password);
  //   if (user) {
  //     console.log("Acceso concedido");
  //     // Aquí puedes redirigir a /dashboard o manejar el login
  //   } else {
  //     setError("Credenciales inválidas");
  //   }
  // };

  return (
    <div className="login-user">
      <h1>¡Hola! soy el login User</h1>
      {/* <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">Acceder</button>
      </form> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LoginUser;
