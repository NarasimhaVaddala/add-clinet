import React from "react";
import { BeatLoader } from "react-spinners";

const Button = ({ type, text, isLoading }) => {
  return (
    <button
      type={type}
      className="w-[250px] md:w-[360px] min-h-[45px] bg-primary text-white rounded-md"
    >
      {isLoading ? <BeatLoader color="#fff" size={10} /> : text}
    </button>
  );
};

export default Button;
