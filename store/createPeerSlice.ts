import { IClientState } from "../types";
import { StateCreator } from "zustand";

export interface IPeerState {
  displayName: string;
  roomView: "normal" | "code";
  setRoomView: (roomView: "normal" | "code") => void;
  setDisplayName: (displayName: string) => void;
}

const createPeerSlice: StateCreator<IClientState, [], [], IPeerState> = (
  set,
  get
) => ({
  displayName: "",
  roomView: "normal",
  setDisplayName: (displayName) => {
    set(() => ({ displayName }));
  },

  setRoomView(roomView) {
    set(() => ({ roomView }));
  },
});

export default createPeerSlice;
