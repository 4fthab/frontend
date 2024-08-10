import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { isUser, setIsUser } = useState(false);

  useEffect(() => {
    try {
      fetch("http://localhost:4001/user/getuser", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setUser(data));

      if (user) console.log("trueeee");
      else console.log("falsee");
    } catch (error) {}
  }, []);

  function logout() {
    setUser(null);
    fetch("http://localhost:4001/user/logout", {
      credentials: "include",
    });
    setUser(null);
    setIsUser(false);
  }

  return (
    <>
      <nav>
        <h1 className="logo text-2xl">
          <Link to="/"> </Link>
        </h1>
        {user ? (
          <div className="flex">
            <h1 className="text-3xl mx-3 text-white hover:text-red-600">
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </h1>
            <h1 className="text-3xl mx-3 text-white hover:text-blue-600">
              <Link to="#">{user.username}</Link>
            </h1>
          </div>
      .  ) : (
          <div className="auth flex">
            <h1 className="text-3xl mx-3 text-white hover:text-green-500">
              <Link to="/login">Login</Link>
            </h1>
            <h1 className="text-3xl text-white hover:text-green-500">
              <Link to="/register">Register</Link>
            </h1>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
