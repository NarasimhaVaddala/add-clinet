import React from "react";

export default function NewBtn({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-transparent border border-white rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-[#EA4C89] focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:ring-offset-2"
    >
      {title}
      <i className="fas fa-arrow-right"></i> {/* Font Awesome arrow icon */}
    </button>
  );
}
