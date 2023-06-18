import '../styles/globals.css'
import type { AppProps } from "next/app";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import NavComponent from "../components/NavComponent";
import { Chat } from "@pushprotocol/uiweb";
import { useAccount } from "wagmi";



const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Connect",
  projectId: "connect",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { address } = useAccount();
  const [loadWagmi, setLoadWagmi] = useState(false);

  useEffect(() => {
    setLoadWagmi(true);
  }, []);

  return (

    <>
      {/* hacky fix for wagmi ssr hydration errors */}
      {loadWagmi ? (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
          <NavComponent />
    
            <Component {...pageProps} />
          
  
            <BottomNav/>
          </RainbowKitProvider>
          <Chat 
    account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address             
    supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address          
/>
        </WagmiConfig>
      ) : null}
    </>
  );
}

export default MyApp;
