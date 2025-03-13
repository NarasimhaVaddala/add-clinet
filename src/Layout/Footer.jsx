import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-5 py-7 rounded-t-[30px] bg-black mt-4 pt-12 flex flex-col gap-4">
      {/* Main Footer Content */}
      <div className="w-full flex flex-col lg:flex-row gap-8 justify-between items-start">
        {/* Logo and Contact Section */}
        <div className="flex flex-col gap-4 w-full lg:w-[20%] items-center lg:items-start order-1">
          <div className="w-[100px] h-[100px] bg-none rounded-full">
            <img src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-start">
            <Link
              to="mailto:zenmedia@nuhvin.com"
              className="text-white font-medium"
            >
              zenmedia@nuhvin.com
            </Link>
            {/* <Link className="text-white font-medium">+91 93922 96850</Link> */}
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-[27%] flex flex-col lg:flex-row gap-16 order-2">
          <div className="flex flex-col gap-3 text-center lg:text-start">
            <Link to="/about" className="text-white font-medium">
              About
            </Link>
            <Link to="/register" className="text-white font-medium">
              Register Process
            </Link>
            <Link
              to="https://www.nuhvin.com/career"
              target="_blank"
              className="text-white font-medium"
            >
              Career
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-center lg:text-start ">
            <Link
              to="/about"
              // target="_blank"
              className="text-white font-medium"
            >
              Our Vision
            </Link>
            <Link
              to="/about"
              // target="_blank"
              className="text-white font-medium"
            >
              Our Mission
            </Link>
            {/* <Link className="text-white font-medium">Our CSR</Link> */}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="lg:w-[30%] flex flex-col lg:flex-row gap-4 items-center lg:items-start order-3 lg:order-4">
          <div className="flex flex-col gap-4 w-full lg:w-[70%]">
            <Link to="/contact" className="text-white font-medium">
              Contact Us
            </Link>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex gap-4 items-center justify-center order-2">
                <a
                  href="https://www.instagram.com/zen_media_official/"
                  target="_blank"
                  className="text-white hover:text-red-400"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>

                <a
                  href="https://www.youtube.com/@zenmedia-hub"
                  className="text-white hover:text-red-400"
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full bg-red-400 h-[1px]" />

      {/* Copyright and Social Media Section */}

      <div className="w-full text-center">
        <span className="text-white font-medium text-center lg:text-left order-1">
          Copyright © 2025 ZenMedia. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
