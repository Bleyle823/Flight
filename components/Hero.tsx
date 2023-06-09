
// import { Web3Context } from '../pages/context/web3Context';
// import { useWeb3React } from "@web3-react/core";
// import Notifications from '../pages/notifications/Notifications';
// import ConnectButton from '../components/Connect';
// import { useAccount } from 'wagmi';
// import { Center, Container, Text, VStack } from '@chakra-ui/react';
// import React from 'react';





/*interface Web3ReactState {
  active: boolean;
}

const checkForWeb3Data = ({ active  } : Web3ReactState) => {
  return active ;
}*/

export default function Hero() {
  //const web3Data : Web3ReactState = useWeb3React();
  //const { isConnected} = useAccount()
  return (
    <><div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            FPV COMMUNITY
          </h1>
          CREATED BY PILOTS FOR PILOTS
          <h1 className="text-2xl font-semibold flex flex-col my-4 ">
            Creating a vibrant community where Drone pilots, racers,<br />
            &  enthusiasts can hang out, connect, chat,
            collaborate<br /> and even go out on virtual FPV drone expeditions.
          </h1>
          <p className="max-w-lg ">
            A hub for team formations,
            race planning, and knowledge sharing.{" "}
          </p>
          <div className="flex  items-center sm:justify-center mt-10 py-10 sm:m-0 lg:justify-start ">
            <>
              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Join as Pilot 🚀
              </button>
            </>
            <>
              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Discover More <img src="arrow.svg" className="pl-2" />
              </button>

            </>


            {/* <Container>
<Center marginTop={'5rem'}>
<VStack>
  <Text fontSize='4xl'>Push Protocol SDK Starter Kit App</Text>
  <ConnectButton />
</VStack>
</Center>

{checkForWeb3Data(web3Data) && isConnected ? (
<Web3Context.Provider value={web3Data}>
     <Notifications />
</Web3Context.Provider>
) : null}
</Container>*/}
          </div>
          <button className=" flex flex-col justify-start ml-5  text-lg font-bold rounded  text-white ">
            

          </button>

        </div>
        <div className="h-[4 relative xl:absolute xl:top-16 right-0">
          <img src="BoredApePilot.png" width="950"
            height="950" />
        </div>



      </div>

    </div>
    {/* Sponsor Logos */}
    {/*  
    <div className="flex flex-wrap items-center  py-2">
        <img src="/Apecoin2.png"
          width="500"
          height="500"
          className="px-2 py-2" />
        <img src="/Ceramic.png"
          width="180"
          height="180"
          className="px-1 py-2" />
        <img src="/ENS.png"
          width="200"
          height="200"
          className="px-5 py-2" />
        <img src="/Huddle2.png"
          width="880"
          height="80"
          className="px-5 py-1" />
            <img src="/lit2.png"
          width="280"
          height="280"
          className="px-5 py-1" />
          <img src="/FVM.png"
          width="280"
          height="280"
          className="px-5 py-1" />
          <img src="/Spheron.png"
          width="280"
          height="280"
          className="px-5 py-1" />
          <img src="/Push.png"
          width="280"
          height="280"
          className="px-5 py-1" />
      </div>*/}</>
  );
}
