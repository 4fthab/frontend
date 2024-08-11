import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { IoMdSend } from "react-icons/io";

function Conversation() {
  const { receiver } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");

  

  const sendMessage = async (e) => {
    e.preventDefault();
    const respons = await fetch(
      `http://localhost:4001/msg/send/${receiver._id}`,
      {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    console.log(respons);
  };

  return (
    <div className="w-8/12 h-5/6  bg-slate-300 rounded-lg">
      <div className="user-details w-full px-3 py-5 h-20 bg-black rounded-lg">
        {receiver ? (
          <h1 className="text-white flex flex-col text-2xl">
            {receiver.username}
          </h1>
        ) : (
          <h1 className="text-white flex flex-col text-2xl">Select a user</h1>
        )}
      </div>

      {/* Messages--------------------------------------------chat */}
      <div className="messages w-full rounded-lg h-5/6 overflow-auto  bg-slate-300 flex flex-col  px-3 ">
        {chat ? (
          chat.map((ele) => (
            <div className="message bg-teal-600 w-fit py-2 px-5 mt-1  rounded-3xl">
              ${ele.message}
            </div>
          ))
        ) : (
          <h1>No messages</h1>
        )}
      </div>

      {/* message sending -----------------------------------------------*/}
      <form className="flex gap-2 mx-2" onSubmit={sendMessage} action="">
        <input
          className="w-11/12 pl-2 p-1 rounded-xl "
          type="text"
          placeholder="Enter the message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => setMessage("")}
          className="bg-green-400 hover:bg-green-500 p-1 rounded-full"
        >
          <IoMdSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default Conversation;
