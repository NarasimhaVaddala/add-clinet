import React from "react";

export default function VerticalCard({ icon, heading, text, customStyl }) {
  return (
    <div
      className={`gap-2 flex flex-col items-center justify-center p-2 w-[20rem] h-[28rem] text-center ${customStyl}`}
    >
      <img src={icon} alt="" className="h-[40%] rounded-full " />
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="">{text}</p>
    </div>
  );
}
