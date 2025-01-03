import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div id="about">
      {/* About Us Section with Image */}
      <div className="relative w-full h-[50vh] bg-cover bg-center">
        {/* Right Content Section (Heading) */}
        <div className="absolute inset-0 flex items-center justify-center text-white p-4 md:p-12 z-10">
    {/* Centering the "About Us" heading */}
    <div className="flex items-center justify-center w-full text-center">
      <h2 className="text-5xl mt-40 sm:text-6xl md:text-7xl font-semibold mb-4">
        About Us
      </h2>
    </div>
  </div>

        {/* Left Image Section */}
        <Image
          src="/pic8.jpg"
          alt="Travel Image"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>

      {/* Paragraph Section Below Image */}
      <div className="text-center py-8 px-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to Laiqa's Travel Blog! We are passionate explorers who love discovering new destinations. Here, you'll find everything from travel tips, beautiful destinations, to exciting stories. Our journey started with the dream to share our travel experiences with the world. Join us as we explore the beauty of Dubai, America, Turkey, and beyond!
        </p>
      </div>

      {/* Three images section below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
        {/* Image 1 */}
        <div className="text-center">
          <Image
            src="/pic11.jpg"
            alt="Travel Experience"
            width={300}
            height={200}
            className="rounded-lg shadow-xl"
          />
          <h3 className="mt-4 text-xl font-semibold">Explore New Destinations</h3>
          <p className="mt-2 text-gray-600">
            Discover some of the world's most beautiful and unexplored destinations through our eyes.
          </p>
        </div>

        {/* Image 2 */}
        <div className="text-center">
          <Image
            src="/pic2.jpg"
            alt="Travel Tips"
            width={300}
            height={200}
            className="rounded-lg shadow-xl"
          />
          <h3 className="mt-4 text-xl font-semibold">Travel Tips & Guides</h3>
          <p className="mt-2 text-gray-600">
            Learn the best travel hacks, tips, and essential guides to make your trips easier and more enjoyable.
          </p>
        </div>

        {/* Image 3 */}
        <div className="text-center">
          <Image
            src="/pic7.jpg"
            alt="Travel Blog"
            width={300}
            height={200}
            className="rounded-lg shadow-xl"
          />
          <h3 className="mt-4 text-xl font-semibold">Our Travel Blog</h3>
          <p className="mt-2 text-gray-600">
            Explore our blog posts about different countries, travel stories, and much more!
          </p>
        </div>
      </div>
    </div>
  )
}

export default page;
