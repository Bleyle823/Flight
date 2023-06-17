import { useEventListener } from "@huddle01/react";
import { useHuddle01Web } from "@huddle01/react/hooks";
import { useEffect, useRef, useState } from "react";

import LobbyData from "./Lobbydata";
import Video from "../Video/Video";
import Sidebar from "../Sidebar/Sidebar";

const Lobby = () => {
  const { state, send } = useHuddle01Web();

  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    send("INIT");
  }, [send]);

  useEventListener(state, "JoinedLobby.Cam.On", () => {
    if (videoRef.current && state.context.camStream) {
      videoRef.current.srcObject = state.context.camStream as MediaStream;
    }
  });

  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-1 flex-col items-center justify-center  h-full gap-4">
        <div className="glassPanel flex gap-6 w-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full object-cover"
          ></video>
          <div className="grid grid-cols-4">
            {Object.keys(state.context.consumers)
              .filter(
                (consumerId) =>
                  state.context.consumers[consumerId] &&
                  state.context.consumers[consumerId].track?.kind === "video"
              )
              .map((consumerId) => (
                <Video
                  key={consumerId}
                  track={state.context.consumers[consumerId].track}
                />
              ))}
          </div>
        </div>

        <LobbyData setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>

      {isOpen ? <Sidebar /> : null}
    </div>
  );
};

export default Lobby;
