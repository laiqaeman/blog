"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Using 'next/navigation' for Next.js 13+ routing
import { FaHeart, FaComment, FaTimes } from "react-icons/fa"; // Importing icons

const Blog = () => {
  const router = useRouter();

  // State to handle like counts and showing comment section
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [likesActive, setLikesActive] = useState<{ [key: string]: boolean }>({}); // Track if the like is active
  const [commentsVisible, setCommentsVisible] = useState<{ [key: string]: boolean }>({});
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});
  const [comments, setComments] = useState<{ [key: string]: string[] }>({});

  // Function to navigate to the individual country page
  const handleReadMore = (id: string) => {
    router.push(`/blogs/${id}`); // Correct dynamic route to navigate to the individual blog page
  };

  // Function to handle Like
  const handleLike = (id: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1, // Increase like count by 1
    }));
    setLikesActive((prevActive) => ({
      ...prevActive,
      [id]: !prevActive[id], // Toggle the active state of the like button
    }));
  };

  // Function to toggle Comment section visibility
  const toggleCommentSection = (id: string) => {
    setCommentsVisible((prevVisible) => ({
      ...prevVisible,
      [id]: !prevVisible[id], // Toggle visibility
    }));
  };

  // Function to handle Comment input
  const handleCommentChange = (id: string, text: string) => {
    setCommentText((prevText) => ({
      ...prevText,
      [id]: text, // Update the comment text for the specific card
    }));
  };

  // Function to handle submitting a comment
  const handleCommentSubmit = (id: string) => {
    if (commentText[id]) {
      setComments((prevComments) => ({
        ...prevComments,
        [id]: [...(prevComments[id] || []), commentText[id]], // Add new comment to the list of comments
      }));
      setCommentText((prevText) => ({
        ...prevText,
        [id]: "", // Clear the comment input after submission
      }));
    }
  };

  // Function to handle closing the comment section
  const closeCommentSection = (id: string) => {
    setCommentsVisible((prevVisible) => ({
      ...prevVisible,
      [id]: false, // Hide comment section
    }));
  };

  return (
    <div className="relative w-full mb-11">
      {/* Blog Heading Section */}
      <div className="bg-black text-white py-28 px-8">
        <h2 className="text-6xl font-extrabold text-center tracking-wide leading-tight mt-14">
          Our Blog
        </h2>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Individual Country Cards */}
          {[
            "dubai",
            "london",
            "turkey",
            "usa",
            "japan",
            "italy",
            "france",
            "australia",
          ].map((country) => (
            <div
              key={country}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-yellow-500 hover:shadow-yellow-500"
            >
              <Image
  src={`/${country}.jpg`} // Corrected path for the public folder
  alt={country}
  width={800} // Set the width as per your design
  height={400} // Set the height as per your design
  className="w-full h-64 object-cover transition-all duration-500 group-hover:blur-sm"
/>

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">
                  {country.charAt(0).toUpperCase() + country.slice(1)}
                </h3>
                <button
                  onClick={() => handleReadMore(country)}
                  className="px-5 py-3 border-4 border-yellow-500 text-yellow-500 rounded-full text-base transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                >
                  Read More
                </button>
              </div>

              {/* Like and Comment options below each card */}
              <div className="absolute bottom-0 w-full p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={() => handleLike(country)}
                  className="px-4 py-2 flex items-center text-white rounded-lg transition-all duration-300"
                >
                  <FaHeart
                    className={`mr-2 text-lg ${likesActive[country] ? "text-red-500" : "text-gray-300"}`}
                  />
                  {likes[country] || 0} Likes
                </button>
                <button
                  onClick={() => toggleCommentSection(country)}
                  className="px-4 py-2 flex items-center text-white rounded-lg hover:text-gray-300 transition-all duration-300"
                >
                  <FaComment className="mr-2 text-lg" />
                  Comment
                </button>
              </div>

              {/* Comment Section */}
              {commentsVisible[country] && (
                <div className="absolute bottom-12 w-full bg-white text-black p-4">
                  <textarea
                    value={commentText[country] || ""}
                    onChange={(e) => handleCommentChange(country, e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded-lg"
                  />
                  <div className="mt-2 flex justify-between items-center">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                      onClick={() => handleCommentSubmit(country)}
                    >
                      Post Comment
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                      onClick={() => closeCommentSection(country)}
                    >
                      <FaTimes className="mr-2" />
                      Close
                    </button>
                  </div>
                  {/* Display comments */}
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">Comments:</h4>
                    <ul>
                      {(comments[country] || []).map((comment, index) => (
                        <li key={index} className="mt-2">{comment}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
