import { useEffect, useState } from "react";

const useGetMessage = (url) => {
  const [chat, setChat] = useState();

  useEffect(() => {
    const getMessage = async () => {
      const res = await fetch(url, {
        credentials: "include",
      });
      if (res.error) {
        setChat("");
      } else {
        const data = await res.json();
        setChat(data.messages);
        console.log(chat);
      }
    };
    getMessage();
  }, [url]);

  return { chat };
};

export default useGetMessage;
