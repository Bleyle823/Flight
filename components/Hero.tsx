

export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            FPV COMMUNITY
          </h1>
            CREATED BY PILOTS FOR PILOTS
          <h1 className="text-2xl font-semibold flex flex-col my-4 ">
          Creating a vibrant community where Drone pilots, racers,<br/>
          &  enthusiasts can hang out, connect, chat,
          collaborate<br/> and even go out on virtual FPV drone expeditions.
          </h1>
          <p className="max-w-lg ">
          A hub for team formations, 
          race planning, and knowledge sharing.{" "}
          </p>
          <div className="flex  items-center sm:justify-center mt-10 sm:m-0 lg:justify-start ">
            <>
              <button className=" flex flex-col justify-start ml-5  text-lg font-bold rounded  text-white ">
                Powered By
                
              </button>
            </>
            <>
              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Discover More <img src="arrow.svg" className="pl-2" />
              </button>
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:absolute xl:top-16 right-0">
          <img src="BoredApePilot.png" width="950"
              height="950"/>
        </div>
     
   
      </div>
    </div>
  );
}
