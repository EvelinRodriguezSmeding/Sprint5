import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import Logo from "../components/Navbar/components/Logo";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (!validatePassword(event.target.value)) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() !== "" && !errorPassword) {
      alert("Datos ingresados correctamente");
    } else {
      alert("Las credenciales no son correctas");
    }
  };
  return (
    <>
      <div className="modal-login">
        <form className="form-login-container" onSubmit={handleSubmit}>
          <Link to={"/"}><span className="close">&times;</span></Link>
          <Logo/>
          <h2>Sign in</h2>
          <label htmlFor="email">Email</label>
          <input
            className={"input-login"}
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleChangeEmail}
          />
          {errorEmail && (
            <p style={{ color: "red" }}>Este campo es obligatorio</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            className={"input-login"}
            type="password"
            required
            value={password}
            onChange={handleChangePassword}
          />
          {errorPassword && (
            <p style={{ color: "red" }}>
              La contraseña debe tener 8 caracteres mínimo
            </p>
          )}
          <p>Create account</p>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
