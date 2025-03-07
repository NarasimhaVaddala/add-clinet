import React from "react";

export default function CardBlack() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-6 rounded-lg shadow-lg max-w-sm">
        <img
          src="https://dpiff.in/wp-content/uploads/2024/11/message.svg"
          alt="Icon"
          className="w-16 h-16 mb-4"
        />

        <h3 className="text-xl font-semibold mb-2">Original Language</h3>
        <p className="text-gray-300">
          Films must be in their original language. If the original language is
          not English, English subtitles are required.
        </p>
      </div>
    </div>
  );
}
