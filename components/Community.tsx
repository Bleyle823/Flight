import React from "react";

const data = [
  {
    title: "01/",
    description:
      ": Each user has a personalized profile on the platform, showcasing their achievements, race history, and expertise. This allows users to build their reputation within the community and provides a platform for recognition and networking among fellow enthusiasts",
  },
  {
    title: "02/",
    description:
      ": Users can upload and share their FPV racing footage and pictures as non-fungible tokens (NFTs) on the platform. This allows them to showcase their best flights, impressive maneuvers, or unique racing moments. Other users can view, appreciate, and even collect these NFTs as part of the platform's digital racing culture",
  },
  {
    title: "03/",
    description:
      ": The platform serves as a hub for learning and knowledge exchange. Users can access educational content, tutorials, and guides related to FPV racing, drone technology, and race techniques. They can learn from experienced racers, ask questions, and seek advice from the community.",
  },
];

export default function Community() {
  return (
    <div className="my-[10rem]">
      <div className="absolute  -z-10 right-0  top-[280vh]">
        <img src="Ellipse18.svg" className="relative " />
      </div>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-5xl sm:text-[80px] flex flex-col ">
          Engage <span> Fans with community</span>{" "}
        </h1>
        <div className="flex flex-wrap   justify-center  items-center">
          {data.map((n, index) => {
            return (
              <div key={index} className="flex flex-col max-w-sm p-5">
                <h1 className="text-[60px] font-mono">{n.title}</h1>
                <p>{n.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
