import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

function Loading() {
  const { user, setUser } = useContext(UserContext);
  let [test, setTest] = useState(false);

  useEffect(() => {
    if (test) {
      return <Navigate to="/" />;
    }

    try {
      fetch("http://localhost:4001/user/getuser", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setUser("");
            console.log("truw");
          } else {
            setUser(data);
            console.log("false");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <div className="flex mt-80">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full  border-4 m-auto border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
