import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col bg-cover bg-center pt-24"
      style={{ backgroundImage: 'url("/pic.jpg")' }}
    >
      {/* Heading Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 mt-48 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-snug">
  <span className="text-3xl sm:text-4xl md:text-5xl">Explore The World with</span> <br />
  <span className="text-xl sm:text-2xl md:text-4xl">Laiqa&#44;s Travel</span>

</h1>


        {/* Description Paragraph */}
        <p className="mt-6 text-lg sm:text-1xl text-gray-200 text-center">
  Discover stunning destinations&#44; travel tips&#44; <br /> and inspiration for your next adventure.
</p>


        {/* Button Section */}
        <div className="mt-4 flex justify-center">
  <button className="border-2 border-blue-900 hover:border-blue-950 text-white p-2 sm:p-3 rounded-lg shadow-lg shadow-black/50 text-2xl sm:text-base font-semibold tracking-wide uppercase bg-transparent backdrop-blur-lg flex flex-col items-center">
    Start Your Adventure
    <p className="text-gray-500 lowercase flex items-center justify-center mt-1 sm:mt-0.5">
      Read Blog <span className="font-bold text-xl sm:text-2xl ml-1">&rarr;</span>
    </p>
  </button>
</div>

      </div>
    </div>
  );
};

export default Hero;
