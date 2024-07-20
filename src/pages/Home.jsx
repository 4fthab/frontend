import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";

function Home() {
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
