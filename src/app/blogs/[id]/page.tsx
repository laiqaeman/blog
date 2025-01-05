'use client'; // This ensures the component is treated as a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Import useParams from next/navigation

interface Country {
  name: string;
  image: string;
  introduction: string;
  attractions: string[];
  activities: string[];
  flightFee: string;
  tips: string[];
}

export default function BlogDetail() {
  const { id } = useParams(); // Get the id directly from the URL using useParams
  const [country, setCountry] = useState<Country|null>(null);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    console.log("Received ID:", id); // Log id to verify it's coming correctly
    
    if (id && typeof id === 'string') {
      const blogDetails = {
        dubai: {
          name: "Dubai",
          image: "/dubai.jpg",
          introduction: "Dubai is a city of superlatives...",
          attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
          activities: ["Skydiving over Palm Jumeirah", "Luxury shopping at Dubai Mall"],
          flightFee: "$800",
          tips: ["Visit during winter", "Book early for attractions"]
        },
        turkey: {
          name: "Turkey",
          image: "/turkey.jpg",
          introduction: "Explore the rich history and culture of Turkey...",
          attractions: ["Hagia Sophia", "Cappadocia", "Blue Mosque"],
          activities: ["Hot air balloon ride", "Visiting historical sites"],
          flightFee: "$700",
          tips: ["Try the local cuisine", "Book tours in advance"]
        },
        london: {
          name: "London",
          image: "/london.jpg",
          introduction:
            "London is a city steeped in history offering iconic landmarks like the Tower of London&#44; Buckingham Palace&#44; and the British Museum.",
          attractions: [
            "Big Ben",
            "Tower Bridge",
            "Buckingham Palace",
            "The British Museum",
          ],
          activities: [
            "Sightseeing on the London Eye",
            "Exploring Camden Market",
            "Visiting art galleries",
            "Enjoying a traditional afternoon tea",
          ],
          flightFee: "$700",
          tips: ["Carry an umbrella", "Explore neighborhoods like Soho and Covent Garden"],
        },
        usa: {
          name: "USA",
          image: "/usa.jpg",
          introduction:
            "The USA is a vast country known for its diversity&#44; with iconic landmarks&#44; innovative cities and breathtaking national parks.",
          attractions: [
            "Statue of Liberty",
            "Grand Canyon",
            "Times Square",
            "Golden Gate Bridge",
          ],
          activities: [
            "Hiking in Yellowstone National Park",
            "Exploring Hollywood",
            "Visiting theme parks",
            "Shopping on Fifth Avenue",
          ],
          flightFee: "$1,000",
          tips: ["Plan for different time zones", "Carry a travel adapter for electronics"],
        },
        japan: {
          name: "Japan",
          image: "/japan.jpg",
          introduction:
            "Japan combines ancient traditions with advanced technology offering unique experiences from temples to robotics.",
          attractions: [
            "Mount Fuji",
            "Tokyo Tower",
            "Kyoto Temples",
            "Osaka Castle",
          ],
          activities: [
            "Exploring cherry blossoms",
            "Visiting Shinto shrines",
            "Trying authentic sushi",
            "Enjoying anime culture in Akihabara",
          ],
          flightFee: "$900",
          tips: ["Use a Japan Rail Pass for travel", "Respect local customs like bowing"],
        },
        italy: {
          name: "Italy",
          image: "/italy.jpg",
          introduction:
            "Italy is famous for its rich history art, fashion&#44; and world renowned cuisine. Its the heart of the Roman Empire and the Renaissance.",
          attractions: [
            "Colosseum",
            "Venice Canals",
            "Leaning Tower of Pisa",
            "Vatican City",
          ],
          activities: [
            "Riding a gondola in Venice",
            "Exploring Roman ruins",
            "Savoring Italian gelato",
            "Shopping for designer fashion in Milan",
          ],
          flightFee: "$750",
          tips: ["Learn basic Italian phrases", "Avoid visiting major cities in peak summer"],
        },
        france: {
          name: "France",
          image: "/france.jpg",
          introduction:
            "France is synonymous with ; art,; and exquisite cuisine. Its culture and history make it one of the most visited countries in the world.",
          attractions: [
            "Eiffel Tower",
            "Louvre Museum",
            "Palace of Versailles",
            "Mont Saint-Michel",
          ],
          activities: [
            "Tasting wines in Bordeaux",
            "Exploring art at the Louvre",
            "Strolling through Parisian streets",
            "Visiting castles in the Loire Valley",
          ],
          flightFee: "$850",
          tips: ["Visit off-season for fewer crowds", "Learn some basic French phrases"],
        },
        australia: {
          name: "Australia",
          image: "/australia.jpg",
          introduction:
            "Australia is known for its unique wildlife, stunning beaches, and vibrant cities like Sydney and Melbourne.",
          attractions: [
            "Sydney Opera House",
            "Great Barrier Reef",
            "Uluru",
            "Bondi Beach",
          ],
          activities: [
            "Snorkeling at the Great Barrier Reef",
            "Exploring kangaroos and koalas",
            "Surfing at Bondi Beach",
            "Climbing the Sydney Harbour Bridge",
          ],
          flightFee: "$1,200",
          tips: ["Apply sunscreen often", "Respect wildlife and natural habitats"],
        },
      
        
        // Add more countries here...
      };
  
      // Assert that id.toLowerCase() is a valid key of blogDetails
      const countryData = blogDetails[id.toLowerCase() as keyof typeof blogDetails];
      console.log("Fetched Country Data:", countryData); // Log the fetched country data
  
      if (countryData) {
        setCountry(countryData);
      } else {
        console.log("Country not found in blogDetails");
        setCountry(null); // Country not found
      }
    } else {
      console.log("Invalid ID:", id);
      setCountry(null); // Invalid ID
    }
  }, [id]); // Re-run when `id` changes
  
  if (!country) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-extrabold">Blog not found</h1>
        <p className="mt-4 text-lg">The blog you&#44;re looking for does not exist.</p>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { name: "User", comment: newComment }]);
      setNewComment(""); // Reset the input field
    }
  };

  const { name, image, introduction, attractions, activities, flightFee, tips } = country;

  return (
    <div className="pt-52 px-9 md:px-20 ">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-center mb-20">{name}</h1>

      {/* Country Image */}
      <div className="flex justify-center mb-12">
  <Image
    src={image}
    alt={name}
    width={800} // Adjust the width as needed
    height={400} // Adjust the height as needed
    className="object-cover rounded-lg shadow-2xl shadow-gray-500 transition-transform duration-300 hover:scale-105"
  />
</div>

      {/* Country Details */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed">
        <div className="mb-9">
          <h2 className="text-2xl font-semibold mb-4">About {name}:</h2>
          <p>{introduction}</p>
        </div>
        <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Top Attractions:</h2>
  <ul className="list-disc ml-6">
    {Array.isArray(attractions) ? (
      attractions.map((attraction, index) => (
        <li key={index} className="mb-2">{attraction}</li>
      ))
    ) : (
      <p>No attractions available</p>
    )}
  </ul>
</div>

<div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Things to Do:</h2>
  <ul className="list-disc ml-6">
    {Array.isArray(activities) ? (
      activities.map((activity, index) => (
        <li key={index} className="mb-2">{activity}</li>
      ))
    ) : (
      <p>No activities available</p>
    )}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Flight Detail</h2>
          <p>Estimated Flight Fee: {flightFee}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Travel Tips:</h2>
          <ul className="list-disc ml-6">
    {Array.isArray(tips) ? (
      tips.map((tip, index) => (
        <li key={index} className="mb-2">{tip}</li>
      ))
    ) : (
      <p>No travel tips available</p>
    )}
  </ul>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto border border-yellow-500 p-6 mt-12 shadow-lg shadow-yellow-500 bg-transparent mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Leave a Comment</h2>
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-4 border-2 border-yellow-500 rounded-md shadow-lg shadow-yellow-500 bg-transparent focus:outline-none"
            rows={4}
          />
          <button
            onClick={handleAddComment}
            className="mt-7 px-6 py-2 border-2 border-yellow-500 bg-transparent text-yellow-500 rounded-md shadow-md shadow-yellow-500 hover:bg-yellow-500 hover:text-white"
          >
            Post Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                <span>👤</span>
              </div>
              <div>
                <p className="font-semibold">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
