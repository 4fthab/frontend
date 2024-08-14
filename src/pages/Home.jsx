import "./home.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Conversation from "../components/Conversation/Conversation";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { io } from "socket.io-client";

function Home() {
  const [chat, setChat] = useState("");
  const { setReceiver } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:4001", {
        query: { userId: user._id },
      });
      console.log(user._id);
      setSocket(socket);

      return () => socket.close();
    }
  }, [user]);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setChat([...chat, newMessage]);
    });

    return () => socket?.off("newMessages");
  }, [socket, chat, setChat]);

  const getMessage = async (ele) => {
    setReceiver(ele);
    const res = await fetch(`http://localhost:4001/msg/get/${ele._id}`, {
      credentials: "include",
    });
    if (res.status == 400) {
      setChat("");
    } else {
      const data = await res.json();
      setChat(data.messages);
      socket.emit("test", ele._id);
    }
  };

  return (
    <>
      <Navbar />
      <div className="message flex w-11/12 bg-slate-200 h-screen gap-1 p-3 m-auto">
        <Sidebar getMessage={getMessage} />
        <Conversation chat={chat} socket={socket} getMessage={getMessage} />
      </div>
    </>
  );
}

export default Home;
