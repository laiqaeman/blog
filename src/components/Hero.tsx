import React from 'react';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col justify-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: 'url("/pic.jpg")', paddingTop: '4rem' }} // Adjust padding as per navbar height
    >
      {/* Hero Content */}
      <div className="flex flex-col items-center text-white text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug">
          <span className="text-3xl sm:text-4xl md:text-5xl">Explore The World with</span> <br />
          <span className="text-xl sm:text-2xl md:text-4xl">Laiqa&#44;s Travel</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Discover stunning destinations&#44; travel tips&#44; <br /> and inspiration for your next adventure.
        </p>

        {/* Button with Anchor Link */}
        <div className="mt-8">
          <a href="/blog">
            <button className="border-2 border-blue-400 hover:border-yellow-500 text-white hover:text-yellow-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md shadow-yellow-500 text-lg sm:text-xl font-semibold uppercase bg-transparent backdrop-blur-lg">
              Start Your Adventure
              <p className="text-gray-500 hover:text-yellow-200 lowercase flex items-center justify-center mt-1">
                Read Blog <span className="font-bold text-xl sm:text-2xl ml-1">&rarr;</span>
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
