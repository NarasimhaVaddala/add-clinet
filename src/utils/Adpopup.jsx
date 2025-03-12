import adPopUpImg from "/adpopup.png";
import React from "react";

export default function Adpopup({ onClick }) {
  return (
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] flex items-center flex-col justify-center z-[10000] bg-[rgba(0,0,0,0.5)]">
      <button
        onClick={onClick}
        className=" w-[500px] flex items-end justify-end relative bottom-4 left-9"
      >
        <i class="fa-solid fa-x text-white  text-2xl"></i>
      </button>
      <img src={adPopUpImg} className="h-[500px] w-[500px]" />
    </div>
  );
}
