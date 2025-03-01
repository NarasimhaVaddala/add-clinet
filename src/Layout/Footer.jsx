import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-5 py-7  rounded-t-[30px] bg-black mt-4 pt-12 flex flex-col gap-4">
      <div className="w-full flex gap-6 justify-between items-start">
        <div className="flex  flex-col gap-4 w-[20%] items-center">
          <div className="w-[80px] h-[80px] bg-red-300 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-medium">ngsinfo@gmail.com</Link>
            <Link className="text-white font-medium">0987654323</Link>
          </div>
        </div>
        <div className="w-[27%]  flex justify-between">
          <div className="flex flex-col gap-3">
            <Link className="text-white font-medium">About the festival</Link>
            <Link className="text-white font-medium">About </Link>
            <Link className="text-white font-medium">Our Story</Link>
            <Link className="text-white font-medium">Career</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="text-white font-medium">Our Vision</Link>
            <Link className="text-white font-medium">Our Mission</Link>
            <Link className="text-white font-medium">Our CSR</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[20%] pl-5">
          <Link className="text-white font-medium">Submit Short Film</Link>
          <Link className="text-white font-medium">Realeas Short Film</Link>
          <Link className="text-white font-medium">Blog</Link>
          <Link className="text-white font-medium">Contact Us</Link>
        </div>
        <div className="w-[30%] flex justify-between items-center">
          <div className="flex flex-col gap-4 w-[70%]">
            <span className="text-white font-medium">
              Susbcribe our newsletter
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
          {/* <div>
            <span className="text-white font-medium">Scrool to Top</span>
          </div> */}
        </div>
      </div>
      <hr className="w-full bg-red-400" />
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">
          Copyright © 2025 DPIFF. All rights reserved.
        </span>
        <div className="flex gap-4 items-center">
          <span className="w-[50px] h-[50px] rounded-full bg-blue-300"></span>
          <span className="w-[50px] h-[50px] rounded-full bg-blue-300"></span>
          <span className="w-[50px] h-[50px] rounded-full bg-blue-300"></span>
          <span className="w-[50px] h-[50px] rounded-full bg-blue-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
