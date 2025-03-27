import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Business. Your Vision.
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mt-10">
          {" "}
          Our Web Solutions.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Looking to grow your business online? We design sleek, modern, and
        high-performing websites to help startups and local businesses thrive in
        the digital era.
      </p>

      <div className="flex justify-center my-10">

        {/* Get FREE Quote Button */}
      
        <a
          href="https://wa.me/917903648044?text=Hello!%20I%20would%20like%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md flex items-center space-x-2 text-white font-semibold transition-transform duration-300 transform hover:scale-110  "
        >
          <FaWhatsapp size={20} className="text-white" />
          <span>Get FREE Quote</span>
        </a>

        {/* Projects Button */}

        <a
          href="https://github.com/SonuNM1"
          target="_blank" rel="noopener noreferrer"
          className="py-3 px-4 rounded-md border border-neutral-500 text-neutral-300 transition-transform duration-300 transform hover:scale-110 hover:bg-neutral-700 hover:text-white"
        >
          Projects
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
