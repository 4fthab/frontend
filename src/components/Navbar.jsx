import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState("");
  // useEffect(() => {
  //   const userSigned = async () => {
  //     await fetch("http://127.0.0.4:4000/user/getuser", {
  //       credentials: "include",
  //     })
  //       .then((resolve) =>
  //         resolve.json().then((data) => {
  //           console.log(data);
  //           setUser(data);
  //         })
  //       )
  //       .catch((err) => console.log(err.message));
  //   };
  //   console.log(user);
  // }, []);

  useEffect(() => {
    fetch("http://localhost:4001/user/getuser", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => setUser(userInfo));
    console.log(user);
  }, []);

  const logout = () => {};

  return (
    <>
      <nav>
        <h1 className="logo text-2xl">
          <Link to="/"> </Link>
        </h1>
        {user ? (
          <div className="flex">
            <h1 className="text-xl mx-3 text-black hover:text-green-600">
              <Link to="/login">Create post</Link>
            </h1>
            <h1 className="text-xl mx-3 text-black hover:text-red-600">
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </h1>
            <h1 className="text-xl mx-3 text-black hover:text-blue-600">
              <Link to="#">{user.username}s</Link>
            </h1>
          </div>
        ) : (
          <div className="auth flex">
            <h1 className="text-xl mx-3 text-black hover:text-green-500">
              <Link to="/login">Login</Link>
            </h1>
            <h1 className="text-xl text-black hover:text-green-500">
              <Link to="/register">Register</Link>
            </h1>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
