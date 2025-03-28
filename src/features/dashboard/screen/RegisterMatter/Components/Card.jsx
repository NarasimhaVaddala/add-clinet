import React from "react";

export default function Card({ title, text, textstyles }) {
  return (
    <div className="border-gray-500 border p-4 rounded-lg w-full hover:scale-110 transition-all ease-linear">
      <i class="fa-solid fa-pencil text-xl"></i>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className={`font-semibold text-md text-gray-500 ${textstyles}`}>
        {text}
      </p>
    </div>
  );
}
