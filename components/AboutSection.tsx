import React from "react";

export default function AboutSection() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center px-10 flex-wrap">
        <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">How does Flight FPV Work?</h1>
          <p className="text-xl">
          The platform fosters community engagement by providing a space for FPV pilots and drone enthusiasts to connect, interact,
          and share their passion for drone racing.<br/> Connect with fellow FPV pilots or enthusiasts via the chat section, 
          create personalized groups for competitive/non-competitive flying, form teams and organize FPV events after which event tickets can be sold
          & purchased in a decentralized fashion aided by smart contracts.<br/>  Hop on a peer to peer videocall and go out on an FPV adventure or 
          create/join a Huddle powered livestream of the pilot channels subscribed to or even create a channel of your own. 
          Furthermore, you can now sell/buy NFT based aerial videos and pictures through the Marketplace. 
          Overall, the platform encourages discussions, knowledge sharing, and collaboration among users.
          </p>
        </div>
        < >
          <img src="Group72.png" />
          <div className="absolute  -z-10 right-0   ">
            <img src="Ellipse21.svg" className="h-[60rem]" />
          </div>
        </>
      </div>
    </div>
  );
}
