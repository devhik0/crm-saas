import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import style from "./chat.module.css";

type MessageOptions = {
  roomId: string | number;
  user: string;
  msg: string;
  time: string;
};

export default function Chat({
  socket,
  userName,
  roomId,
}: {
  socket: Socket;
  userName: MessageOptions["user"];
  roomId: MessageOptions["roomId"];
}) {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<MessageOptions[]>([]);

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
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
          {chat.map(({ user, msg, time }, key) => (
            <div key={key} className={user == userName ? style.chatProfileRight : style.chatProfileLeft}>
              <span className={style.chatProfileSpan} style={{ textAlign: user == userName ? "right" : "left" }}>
                {user.charAt(0).toLocaleUpperCase()}
              </span>
              <p style={{ textAlign: user == userName ? "right" : "left" }}>{msg}</p>
              <span className="text-xs">{time}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <form className="flex flex-row items-center gap-2" onSubmit={(e) => sendData(e)}>
          <Input
            className={style.chat_input}
            type="text"
            value={currentMsg}
            placeholder="Type your message.."
            onChange={(e) => setCurrentMsg(e.target.value)}
          />
          <Button className="ml-2 bg-blue-600">Send</Button>
        </form>
      </div>
    </div>
  );
}
