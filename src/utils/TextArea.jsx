import React from "react";
import { BeatLoader } from "react-spinners";

const TextArea = ({
  label,
  onChange,
  value,
  isValid,
  isLoading,
  customTextAreaStyle,
  max,
}) => {
  return (
    <div className={`flex flex-col gap-0 ${customTextAreaStyle}`}>
      <div className={`relative flex flex-col gap-4 `}>
        {/* Textarea Field */}
        <textarea
          rows="4"
          className="peer w-full p-2 border border-gray-300 outline-none rounded-lg text-lg transition-all duration-300 ease-in-out focus:border-[#EA4C89] valid:border-[#EA4C89] resize-none relative z-10 bg-transparent"
          value={value}
          onChange={onChange}
          maxLength={max}
        />
        {/* Label */}
        <span
          className={`absolute z-0 left-3 px-2 text-sm uppercase text-gray-500 transition-all duration-500 ease-in-out top-3 peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#EA4C89] peer-focus:border-x peer-focus:border-[#EA4C89] peer-focus:bg-gray-300 peer-focus:z-20 ${
            value &&
            "top-[-10px] text-xs text-[#EA4C89] border-x border-[#EA4C89] bg-gray-300 z-20"
          }`}
        >
          {label}
        </span>
        {/* Loading Spinner */}
        {isLoading && (
          <span className="absolute z-50 right-3 top-3">
            <BeatLoader color="#EA4C89" size={10} />
          </span>
        )}
      </div>
      {/* Validation Message */}
      {isValid && (
        <button className="text-[10px] text-red-400 font-medium text-start">
          {isValid}
        </button>
      )}
    </div>
  );
};

export default TextArea;
