import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* text overlay */}
        <div className="absolute text-white bg-black/50 w-full h-full max-h-[500px] flex flex-col justify-center  ">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            Food <span className="text-[#ff891a]">Delivered</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            <span className="text-[#ff891a]">Right to </span>
            Your Doorstep
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="heroImage"
        />
      </div>
    </div>
  );
};
