import React, { useContext } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/userContext";
import Sidebar from "../components/Sidebar/Sidebar";
import Conversation from "../components/Conversation/Conversation";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="message flex w-11/12 bg-slate-200 h-screen gap-1 p-3 m-auto">
        <Sidebar />
        <Conversation />
      </div>
    </>
  );
}

export default Home;
