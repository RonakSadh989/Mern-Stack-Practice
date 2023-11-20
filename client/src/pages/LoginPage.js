// LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css"; // Import the CSS file
import { useAppContext } from "../context/context";

const LoginPage = () => {
  const context = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let body = { username, password };
    const data = context
      .fetchApi("/users/login", "POST", body)
      .then((data) => {
        localStorage.setItem("_userID", data);
        navigate("/")
    })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
