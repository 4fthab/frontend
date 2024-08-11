import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function Login() {
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
        <h1 className="mt-10">
          Not Registered ? .
          <Link className=" hover:text-blue-700" to="/register">
            Click here
          </Link>
        </h1>
      </section>
    </>
  );
}

export default Login;
