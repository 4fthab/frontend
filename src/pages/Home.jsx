import "./home.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Conversation from "../components/Conversation/Conversation";
import LoginCard from "../components/LoginCard";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { io } from "socket.io-client";
import Login from "./Login";
import { Link } from "react-router-dom";

function Home() {
  const [chat, setChat] = useState("");
  const { setReceiver } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    try {
      fetch("http://localhost:4001/user/getuser", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setUser("");
          } else {
            setUser(data);
          }
        });
    } catch (error) {}
  }, []);

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
      console.log(chat);

      socket.emit("test", ele._id);
    }
  };

  return (
    <>
      {user ? (
        <div className="h-lvh flex flex-col ">
          <Navbar className=" h-2/12" />
          <div className="message flex w-11/12 bg-slate-200 h-5/6 gap-1 p-3 m-auto">
            <Sidebar getMessage={getMessage} />
            <Conversation chat={chat} socket={socket} getMessage={getMessage} />
          </div>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </>
  );
}

export default Home;
