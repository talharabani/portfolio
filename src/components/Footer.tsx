import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/talharabani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 rounded-md"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/talha-ishaq-rabani-23b94122b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 rounded-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/talha.ishaqrabani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 rounded-md"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/923009490631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
            <span className="font-semibold text-base">Chat on WhatsApp: 0300 9490631</span>
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Rabani. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 