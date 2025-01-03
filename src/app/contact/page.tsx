"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div id="contact" className="relative pt-0 w-full">
      {/* Background Image Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/pic12.jpg")' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
  <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white text-center tracking-wide leading-tight mt-20">
    Contact Me
  </h2>
</div>

      </div>

      {/* Contact Information */}
      <div className="grid gap-10 md:grid-cols-2 mt-10 px-4 sm:px-8 ">
        <div className="space-y-8">
          <p className="text-gray-600 text-[16px] sm:text-[18px]">
            Drop me a line, give me a call, or send a message by submitting the form.
          </p>
          <div className="flex gap-6 items-center text-sm sm:text-base">
            <a href="mailto:laiqaeman1011@gmail.com" className="flex items-center gap-6 hover:text-yellow-500">
              <IoIosMail size={30} />
              <span>laiqaeman1011@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-4 items-center text-sm sm:text-base">
            <a
              href="https://www.instagram.com/emannn0101/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 hover:text-yellow-500"
            >
              <FaInstagramSquare size={30} />
              <span>Instagram</span>
            </a>
          </div>
          <div className="flex gap-4 items-center text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/laiqa-eman-977aa533b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 hover:text-yellow-500"
            >
              <FaLinkedin size={30} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex gap-4 items-center text-sm sm:text-base">
            <a
              href="https://www.facebook.com/profile.php?id=61557584307489"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 hover:text-yellow-500"
            >
              <FaFacebook size={30} />
              <span>Facebook</span>
            </a>
          </div>
          <div className="flex gap-6 items-center text-sm sm:text-base">
            <BsFillTelephoneFill size={30} />
            <span>(+92) 3997755443</span>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 shadow-lg rounded-md p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 shadow-lg rounded-md p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 shadow-lg rounded-md p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                id="message"
                rows={6}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-400 text-black py-2 px-6 text-sm sm:text-base rounded-md shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-black transition-all mt-4"
            >
              Send
            </button>
          </form>

          {/* Success Message */}
          {isSent && (
            <div className="text-green-500 mt-4 font-semibold">
              Message Sent Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
