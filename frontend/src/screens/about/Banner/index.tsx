import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
      <video
        className="w-full h-full object-cover"
        autoPlay
        src="/videos/about.mp4"
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white ">
        <div className="containers">
          <div className="max-w-[881px]">
            <h1 className=" text-[60px] md:text-[81px] leading-[1.2] font-semibold ">
              <span className="font-thin">We intend to change</span> the whole
              game
            </h1>
            <p className="text-xl font-light mt-3">
              Hotcodes provide the best services for your business and allow it
              to grow faster.
            </p>
            <button className="font-bold mt-6 text-base bg-white text-dark-pink rounded-md py-[6px] px-5">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
