"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { io } from "socket.io-client";
import Chat from "./chat";
import styles from "./page.module.css";

export default function ChatPage() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  const socket = io("http://localhost:3001");

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
      // You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
    <div className="size-full">
      <div>
        <div className={styles.main_div} style={{ display: showChat ? "none" : "" }}>
          <input
            className={styles.main_input}
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            disabled={showSpinner}
          />
          <input
            className={styles.main_input}
            type="text"
            placeholder="room id"
            onChange={(e) => setroomId(e.target.value)}
            disabled={showSpinner}
          />
          <Button className="bg-blue-600" onClick={() => handleJoin()}>
            {!showSpinner ? "Join" : <div className={styles.loading_spinner}></div>}
          </Button>
        </div>
        <div style={{ display: !showChat ? "none" : "" }}>
          <Chat socket={socket} roomId={roomId} userName={userName} />
        </div>
      </div>
    </div>
  );
}
