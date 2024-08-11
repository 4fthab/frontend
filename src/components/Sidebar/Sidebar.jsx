import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

function Sidebar() {
  const [users, setUsers] = useState();

  const { receiver, setReceiver } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4001/user/chat", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
        } else {
          setUsers(data.chatUsers);
        }
      });
  }, []);

  const openMessage = (ele) => {
    setReceiver(ele);
  };

  return (
    <div className="w-4/12 h-5/6 bg-slate-300 rounded-lg">
      <div className="search  pb-3 ">
        <form className="flex content-center" action="">
          <input
            className="bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-full m-2 focus:ring-blue-500 focus:border-blue-500 block  w-full ps-10 p-2.5 py-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
      {users ? (
        <div className=" h-5/6 flex flex-col gap-2 overflow-auto">
          {users.map((ele) => (
            <div
              onClick={() => openMessage(ele)}
              className=" py-2 mx-2 px-6 text-lg text-gray-50 bg-blue-600 hover:bg-blue-800 rounded-lg"
            >
              {ele.username}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center">
          <h1 className="text-2xl">Login to start messaging</h1>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
