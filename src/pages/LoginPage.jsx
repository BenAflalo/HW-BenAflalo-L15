import React, { useEffect, useState } from "react";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleAuth, loggedInUser } = useUser();

  useEffect(() => {
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAuth(username, password);
  };

  return (
    <section className="login-container">
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login">Login</button>
      </form>
      <div className="auth-switch">
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
