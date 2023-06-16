import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";
import { Web3Context } from '../pages/context/web3Context';
import { useWeb3React } from "@web3-react/core";

import Notifications from '../pages/notifications/Notifications';
import ConnectButton from '../components/Connect';
import { Center, Container, Text, VStack, Box } from '@chakra-ui/react';
import { Web3Provider } from "@ethersproject/providers";
import { useInactiveListener } from "../hooks/useInactiveListener";
import { useEagerConnect } from "../hooks/userEagerConnect";

import Link from "next/link";



interface Web3ReactState {
  active: boolean;
}

const checkForWeb3Data = ({ active  } : Web3ReactState) => {
  return active ;
}

function Account() {
  const { account } = useWeb3React();

  return (
    <>
      <span className="text-center">Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>
      <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ""}
      </span>
    </>
  );
}


export default function NavComponent() {
  const ref = useRef<HTMLDivElement>(null);

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  


  const web3Data : Web3ReactState = useWeb3React();
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="sticky top-0 z-10 navv  text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <style jsx>
        {`
          .navv {
            background: rgba(255, 255, 255, 0.01);
            backdrop-filter: blur(15px);
          }
        `}
      </style>

      <div className="w-full container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#home">
                <h1 className="flex flex-col">
                  Music <span>NFT Platform</span>
                </h1>
              </Link>
            </div>
            
            <nav className="hidden sm:flex space-x-10 items-center">
      
            <>
      <Container >
      {" "}  <div className="flex justify-between    py-6 sm:justify-between sm:space-x-20">
      <Box bg="" p={4}  color="white">
        <Center>ENS Avatar</Center>
      </Box>
      <Box bg="" p={4} color="white">
        <Center>ENS Name</Center>
      </Box>
      <Box bg="" p={4} color="white">
        <Center>
          <Account />
        </Center>
      </Box>
      </div>
      </Container>
    </>
    <Container>
      <Center>
        <VStack>
         
          <ConnectButton />
        </VStack>
      </Center>

      {checkForWeb3Data(web3Data) && isConnected ? (
        <Web3Context.Provider value={web3Data}>
          <Notifications />
        </Web3Context.Provider>
      ) : null}
    </Container>

            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
