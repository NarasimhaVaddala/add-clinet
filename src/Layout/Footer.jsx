import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-5 py-7 rounded-t-[30px] bg-black mt-4 pt-12 flex flex-col gap-4">
      {/* Main Footer Content */}
      <div className="w-full flex flex-col lg:flex-row gap-6 justify-between items-center">
        {/* Logo and Contact Section */}
        <div className="flex flex-col gap-4 w-full lg:w-[20%] items-center lg:items-start order-1">
          <div className="w-[80px] h-[80px] bg-none rounded-full">
            <img src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-start">
            <Link
              to="mailto:ngsinfo@nuhvin.com"
              className="text-white font-medium"
            >
              ngsinfo@nuhvin.com
            </Link>
            <Link className="text-white font-medium">+91 93922 96850</Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-[27%] flex flex-col lg:flex-row gap-8 order-2">
          <div className="flex flex-col gap-3 text-center lg:text-start">
            <Link to="/register" className="text-white font-medium">
              About the contest
            </Link>
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
              to="/about/#mission"
              // target="_blank"
              className="text-white font-medium"
            >
              Our Vision
            </Link>
            <Link
              to="/about/#mission"
              // target="_blank"
              className="text-white font-medium"
            >
              Our Mission
            </Link>
            {/* <Link className="text-white font-medium">Our CSR</Link> */}
          </div>
        </div>

        {/* Additional Links Section */}
        {/* <div className="text-center lg:text-start flex flex-col gap-4 w-full lg:w-[20%] pl-0 lg:pl-5 order-4 lg:order-3">
          <Link to="/register" className="text-white font-medium">
            Submit Short Film
          </Link>
          <Link to="/register" className="text-white font-medium">
            Release Short Film
          </Link>
          <Link to="/contact" className="text-white font-medium">
            Contact Us
          </Link>
        </div> */}

        {/* Newsletter Section */}
        <div className="lg:w-[30%] flex flex-col lg:flex-row gap-4 items-center lg:items-start order-3 lg:order-4">
          <div className="flex flex-col gap-4 w-full lg:w-[70%]">
            <span className="text-white font-medium">
              Subscribe to our newsletter
            </span>
            <div className="w-[300px] h-[45px] bg-red-200 rounded-2xl overflow-hidden flex">
              <input
                type="text"
                className="w-[82%] h-full px-2 bg-white outline-none border-none"
                placeholder="Enter Your Email"
              />
              <span className="w-[18%] h-full bg-red-400 flex justify-center items-center">
                <MoveRight color="White" size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full bg-red-400 h-[1px]" />

      {/* Copyright and Social Media Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <span className="text-white font-medium text-center lg:text-left order-1">
          Copyright © 2025 Zen Media. All rights reserved.
        </span>
        <div className="flex gap-4 items-center justify-center order-2">
          {/* Facebook Icon */}
          {/* <Link href="#" className="text-white hover:text-red-400">
            <i className="fab fa-facebook fa-2x"></i>
          </Link> */}
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/zen_media_official/"
            target="_blank"
            className="text-white hover:text-red-400"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          {/* Twitter Icon */}
          {/* <Link href="#" className="text-white hover:text-red-400">
            <i className="fab fa-twitter fa-2x"></i>
          </Link> */}
          {/* LinkedIn Icon */}
          <a
            href="https://www.youtube.com/@zenmedia-hub"
            className="text-white hover:text-red-400"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
