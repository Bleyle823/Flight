import { IClientState } from "../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createPeerSlice from "./createPeerSlice";

const useSdkStore = create<IClientState>()(
  devtools(
    (...a) => ({
      ...createPeerSlice(...a),
    }),
    { name: "sdk-store" }
  )
);

const { getState, setState } = useSdkStore;

export default useSdkStore;
