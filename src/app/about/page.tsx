import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div id="about"className="relative pt-0 w-full mb-12" >
      {/* About Us Section with Image */}
      <div className="relative w-full h-[50vh] bg-cover bg-center ">
        {/* About Us Heading */}
        <div className="absolute inset-0 flex items-center justify-center text-white p-4 md:p-12 z-10 ">
          <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white text-center tracking-wide leading-tight mt-20">
            About Us
          </h2>
        </div>
        <Image
          src="/aboot2.jpg"
          alt="Travel Image"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>

      {/* Introductory Paragraph */}
      <div className="text-center py-8 px-4 md:px-12">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          Welcome to Laiqa&apos;s Travel Blog! We are passionate explorers who love
          discovering new destinations. Here, you&apos;ll find everything from travel
          tips&#44; beautiful destinations&#44; to exciting stories. Our journey started
          with the dream to share our travel experiences with the world. Join us
          as we explore the beauty of Dubai&#44; America&#44; Turkey&#44; and beyond!
        </p>
      </div>

      {/* Three Images Section */}
      <div className="grid grid-cols-1 gap-16 mt-12 px-4 md:px-12">
        {/* Section 1: Our Story */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/group1.jpg"
              alt="Travel Experience"
              width={500}
              height={400}
              className="rounded-lg shadow-xl shadow-yellow-500 transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="mt-8 md:mt-0 md:pl-8 text-center md:text-left md:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Story
            </h3>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Laiqa Travel started with a simple thought—bringing people closer
              to the beauty of the world and taking them to their dream
              destinations. Our team began this journey to share our knowledge
              and experiences&#44; helping people embark on life-changing adventures.
              We want everyone to experience the most beautiful journey of their
              life.
            </p>
          </div>
        </div>

        {/* Section 2: What Sets Us Apart */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/group2.jpg"
              alt="Travel Tips"
              width={500}
              height={400}
              className="rounded-lg shadow-xl shadow-yellow-500 transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="mt-8 md:mt-0 md:pr-8 text-center md:text-left md:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What Sets Us Apart
            </h3>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Laiqa Travel is more than just a travel agency; it&apos;s a platform
              that personalizes every trip. We tailor each destination to our
              clients&#44; preferences&#44; ensuring that their journey is exactly as
              they envision. Our goal is to create cherished memories that last
              a lifetime.
            </p>
          </div>
        </div>

        {/* Section 3: Meet the Team */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/group4.jpg"
              alt="Travel Blog"
              width={500}
              height={400}
              className="rounded-lg shadow-xl shadow-yellow-500 transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="mt-8 md:mt-0 md:pl-8 text-center md:text-left md:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Meet the Team
            </h3>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              At Laiqa Travel, our team consists of passionate individuals who
              understand the essence of travel. They focus on crafting
              unforgettable journeys and ensuring every moment is special. Let us
              help you make memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
