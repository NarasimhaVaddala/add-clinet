import React from "react";

export default function Card({ icon, title, text }) {
  return (
    <div className="w-full lg:w-[250px] mx-2 h-[370px] bg-none border border-black flex flex-col items-center justify-center py-6 px-2 gap-4 hover:scale-105 transition-all ease-linear shadow-md">
      {/* <img src={image} alt="" /> */}
      <h2 className="text-5xl">{icon}</h2>
      <h2 className="font-bold text-2xl text-center">
        {title.length <= 25 ? (
          title
        ) : (
          <>
            {title.slice(0, 17)}
            <br />
            {title.slice(17)}
          </>
        )}
      </h2>
      <p className="text-center text-[#76787E]">{text}</p>
    </div>
  );
}
