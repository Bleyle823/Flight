import Button from "../common/Button";
import { CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import useSdkStore from "../../store";
import { Dispatch, SetStateAction } from "react";
import { useHuddle01Web } from "@huddle01/react/hooks";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LobbyData: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const displayName = useSdkStore((state) => state.displayName);
  const setDisplayName = useSdkStore((state) => state.setDisplayName);

  const { send } = useHuddle01Web();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-6">
        <Button onClick={() => send("JOIN_LOBBY")} className="px-6">
          Join Lobby
        </Button>

        <Button
          className="p-1.5"
          onClick={() => {
            send("DISABLE_CAM");
            send("STOP_PRODUCING_CAM");
          }}
        >
          <BsCameraVideoOff size={25} />
        </Button>

        <Button
          className="p-1.5"
          onClick={() => {
            send("ENABLE_CAM");
            send("PRODUCE_CAM");
          }}
        >
          <BsCameraVideo size={25} />
        </Button>

        <Button className="px-6" onClick={() => send("JOIN_ROOM")}>
          Start Demo
        </Button>

        <Button
          className="p-1.5"
          onClick={() => {
            send("DISABLE_MIC");
            send("STOP_PRODUCING_MIC");
          }}
        >
          <CiMicrophoneOff size={25} />
        </Button>

        <Button
          className="p-1.5"
          onClick={() => {
            send("ENABLE_MIC");
            send("PRODUCE_MIC");
          }}
        >
          <CiMicrophoneOn size={25} />
        </Button>

        <Button onClick={() => send("LEAVE_ROOM")} className="px-6">
          Leave Room
        </Button>

        <Button onClick={() => setIsOpen((prev) => !prev)} className="px-6">
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </Button>
      </div>
    </div>
  );
};

export default LobbyData;
