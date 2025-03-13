import React from "react";

const Select = ({
  label,
  onChange,
  value,
  options,
  isValid,
  customSelectStyl,
  required,
}) => {
  return (
    <div className="flex flex-col gap-0 w-full">
      <div
        className={`relative w-full flex flex-col gap-4 ${customSelectStyl}`}
      >
        {/* Select Field */}
        <div className="relative">
          <select
            className="peer w-full p-2 pr-10 border border-gray-300 outline-none rounded-lg text-lg transition-all duration-300 ease-in-out focus:border-[#EA4C89] valid:border-[#EA4C89] relative z-10 bg-transparent appearance-none"
            value={value}
            onChange={onChange}
            required={required}
          >
            {/* Default Option */}
            <option value="" disabled hidden>
              {label}
            </option>
            {/* Dynamic Options */}
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Font Awesome Arrow Down Icon */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none text-gray-500">
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>

        {/* Label */}
        {/* <span
          className={`absolute z-0 left-3 px-2 text-sm uppercase text-gray-500 transition-all duration-500 ease-in-out top-3 peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#EA4C89] peer-focus:border-x peer-focus:border-[#EA4C89] peer-focus:bg-gray-300 peer-focus:z-20 ${
            value &&
            "top-[-10px] text-xs text-[#EA4C89] border-x border-[#EA4C89] bg-gray-300 z-20"
          }`}
        >
          {label}
        </span> */}
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

export default Select;
