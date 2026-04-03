// 📁 Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="py-12 border-t border-slate-800 bg-transparent">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-black bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 tracking-tight">
          Prachi Sukre
        </h3>
        <p className="text-slate-400">
          Building innovative solutions with passion and precision
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/prachisukre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition-colors text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/prachisukre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition-colors text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/prachisukre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition-colors text-2xl"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Prachi Sukre. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
