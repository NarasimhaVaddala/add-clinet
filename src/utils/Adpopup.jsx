import adPopUpImg from "/adpopup.png";
import React from "react";

export default function Adpopup({ onClick }) {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center z-[10000] bg-[rgba(0,0,0,0.5)]">
      {/* Popup Container */}
      <div className="relative  rounded-lg overflow-hidden max-w-[90%] max-h-[90%] w-auto h-auto shadow-lg">
        {/* Close Button (Top-Right Corner) */}
        <button
          onClick={onClick}
          className="absolute top-2 right-2 text-white hover:text-gray-900 transition-colors"
        >
          <i className="fa-solid fa-x text-2xl"></i>
        </button>

        {/* Image with Responsive Spacing */}
        <img
          src={adPopUpImg}
          alt="Ad Popup"
          className="w-full h-auto max-w-[30rem] mx-auto p-4 sm:p-6 md:p-8 lg:p-10"
        />
      </div>
    </div>
  );
}
