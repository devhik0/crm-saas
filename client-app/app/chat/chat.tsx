import { FormEvent, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import style from "./chat.module.css";

type MessageOptions = {
  roomId: string | number;
  user: string;
  msg: string;
  time: string;
};

const ChatPage = ({
  socket,
  userName,
  roomId,
}: {
  socket: Socket;
  userName: MessageOptions["user"];
  roomId: MessageOptions["roomId"];
}) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<MessageOptions[]>([]);

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: MessageOptions = {
        roomId,
        user: userName,
        msg: currentMsg,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };
      socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };

  useEffect(() => {
    socket.on("receive_msg", (data: MessageOptions) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);

  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name: <b>{userName}</b> and Room Id: <b>{roomId}</b>
          </p>
        </div>
        <div>
          {chat.map(({ user, msg, time }: MessageOptions, key) => (
            <div key={key} className={user == userName ? style.chatProfileRight : style.chatProfileLeft}>
              <h3 style={{ textAlign: user == userName ? "right" : "left" }}>{time}</h3>
              <span className={style.chatProfileSpan} style={{ textAlign: user == userName ? "right" : "left" }}>
                {user.charAt(0)}
              </span>
              <h3 style={{ textAlign: user == userName ? "right" : "left" }}>{msg}</h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)}>
            <input
              className={style.chat_input}
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <button className={style.chat_button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
