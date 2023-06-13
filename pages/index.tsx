import { Web3Context } from '../pages/context/web3Context';
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import Notifications from './notifications/Notifications';
import ConnectButton from '../components/Connect';
import { useAccount } from 'wagmi';
import { Center, Container, Text, VStack, Box } from '@chakra-ui/react';
import { Web3Provider } from "@ethersproject/providers";
import { useInactiveListener } from "../hooks/useInactiveListener";
import { useEagerConnect } from "../hooks/userEagerConnect";
import Oauth from "../components/oauth";
import { GoogleOAuthProvider } from "@react-oauth/google";




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



export default function Home() {
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

    <><Container>
        <Center marginTop={'1rem'} marginLeft={'100rem'} >
          <VStack>
            <Text fontSize='4xl'>Push Notifications</Text>
            <ConnectButton />
          </VStack>
        </Center>

        {checkForWeb3Data(web3Data) && isConnected ? (
          <Web3Context.Provider value={web3Data}>
            <Notifications />
          </Web3Context.Provider>
        ) : null}
      </Container>
      <>
      <Container marginLeft={'100rem'} >
      {" "}
      <Box bg="" p={4}  color="black">
        <Center>ENS Avatar</Center>
      </Box>
      <Box bg="" p={4} color="black">
        <Center>ENS Name</Center>
      </Box>
      <Box bg="" p={4} color="black">
        <Center>
          <Account />
        </Center>
      </Box>
      </Container>
    </>
      <Hero />
      <React.StrictMode>
    <GoogleOAuthProvider clientId="1071348522014-3qq1ln33ful535dnd8r4f6f9vtjrv2nu.apps.googleusercontent.com">
      <Oauth/>
    </GoogleOAuthProvider>
  </React.StrictMode>
      </>
  )
  
}
