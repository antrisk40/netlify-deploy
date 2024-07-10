import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-screen-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Contact</h1>
        <div className="flex items-center mb-4">
          <FaEnvelope className="mr-3 text-2xl text-purple-800" />
          <p className="text-lg text-purple-800 font-bold ">
            neeleshbaghel40@gmail.com
          </p>
        </div>
        <div className="flex items-center mb-4">
          <FaPhone className="mr-3 text-2xl text-purple-800" />
          <p className="text-lg text-purple-800 font-bold">+91 9977341387</p>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="mr-3 text-2xl text-purple-800" />
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/neelesh-baghel-74815b243/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Neelesh Baghel
            </a>
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            Thank you for visiting! Feel free to reach out. I look forward to
            hearing from you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
