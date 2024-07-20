import React, { useEffect } from "react";
import "./Navbar.css";
import { json } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    console.log("ttee");
    const userSigned = async () => {
      await fetch("http://127.0.0.4:4000/user/getuser")
        .then(resolve => resolve.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
    };
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <h2>LoGO</h2>
        </div>
        <div className="profile">
          <div className="profile-pic"></div>
          <h2>Name</h2>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
