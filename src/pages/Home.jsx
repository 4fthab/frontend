import React, { useContext } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/userContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="main">
        <div className="body">
          <Navbar />
          <div className="content"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
