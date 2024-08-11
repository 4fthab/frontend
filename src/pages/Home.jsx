import "./home.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Conversation from "../components/Conversation/Conversation";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function Home() {
  const [chat, setChat] = useState("");
  const { receiver, setReceiver } = useContext(UserContext);

  const getMessage = async (ele) => {
    setReceiver(ele);
    const res = await fetch(`http://localhost:4001/msg/get/${ele._id}`, {
      credentials: "include",
    });
    if (res.error) {
      setChat("");
    } else {
      const data = await res.json();
      setChat(data.messages);
    }
  };

  return (
    <>
      <Navbar />
      <div className="message flex w-11/12 bg-slate-200 h-screen gap-1 p-3 m-auto">
        <Sidebar getMessage={getMessage} />
        <Conversation chat={chat} getMessage={getMessage} />
      </div>
    </>
  );
}

export default Home;
