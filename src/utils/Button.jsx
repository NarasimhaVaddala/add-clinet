import React from "react";
import { BeatLoader } from "react-spinners";

const Button = ({ type, text, isLoading, width = "250px", onClick }) => {
  return (
    <button
      style={{ width }}
      type={type}
      onClick={onClick}
      className="w-[250px] md:w-[360px] min-h-[45px] bg-[#EA4c89] text-white rounded-md"
    >
      {isLoading ? <BeatLoader color="#fff" size={10} /> : text}
    </button>
  );
};

export default Button;
