"use client";

import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import { useState } from "react";
import AgoraManager from "./_agora-manager/agora-manager";
import config from "./_agora-manager/config";

export default function Call() {
  const agoraEngine = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: config.selectedProduct }));
  const [joined, setJoined] = useState(false);

  const handleJoinClick = () => {
    setJoined(true);
  };

  const handleLeaveClick = () => {
    setJoined(false);
  };

  const renderActionButton = () => {
    return joined ? <button onClick={handleLeaveClick}>Leave</button> : <button onClick={handleJoinClick}>Join</button>;
  };

  return (
    <div>
      Call people{" "}
      <div>
        <h1>Get Started with Voice Calling</h1>
        {renderActionButton()}
        {joined && (
          <AgoraRTCProvider client={agoraEngine}>
            <AgoraManager config={config}>Some text</AgoraManager>
          </AgoraRTCProvider>
        )}
      </div>
    </div>
  );
}
