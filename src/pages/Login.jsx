import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  async function loginForm(e) {
    try {
      e.preventDefault();
      const response = await fetch("http://127.0.0.4:4000/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status == 200) {
        alert("Login succesfully");
        navigate("/");
      } else {
        alert("Login Failed!!!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <section className="login">
        <div className="login-login">
          <h2 className="title">Login</h2>
          <form action="" onSubmit={loginForm}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button className="btn login-btn">Login</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
