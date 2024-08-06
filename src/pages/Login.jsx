import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4001/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) setRedirect(true);
    else alert("Wrong credentials");
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="login-section">
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="login-login">
          <form action="" onSubmit={loginUser}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
