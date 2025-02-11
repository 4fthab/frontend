import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

function Message({ message }) {
  const { receiver } = useContext(UserContext);

  const forMe = message.receiverId === receiver._id;
  // const msgClass = forMe ? "justify-end " : "justify-start ";

  return forMe ? (
    <div className={`w-full flex justify-end`}>
      <div className="bg-blue-600 w-fit py-2 px-5 mt-1  rounded-3xl">
        {message.message}
      </div>
    </div>
  ) : (
    <div className={`w-full flex justify-start`}>
      <div className="bg-teal-600 w-fit py-2 px-5 mt-1  rounded-3xl">
        {message.message}
      </div>
    </div>
  );

  // <div className={`w-full flex ${msgClass}`}>
  //   <div className="bg-teal-600 w-fit py-2 px-5 mt-1  rounded-3xl">
  //     {message.message}
  //   </div>
  // </div>
}

export default Message;
