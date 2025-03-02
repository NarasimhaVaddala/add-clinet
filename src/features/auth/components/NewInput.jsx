import React from "react";
import { BeatLoader } from "react-spinners";

const NewInput = ({
  lable,
  onChange,
  value,
  rightBtnFunction,
  rightbtnTet,
  isValid,
  isLoading,
  isDisplayRightBtn,
  disable = false,
}) => {
  return (
    <div className="flex flex-col gap-0">
      <div className="relative w-[250px]  md:w-[360px] flex flex-col gap-4">
        <input
          type="text"
          className="peer w-full p-2 border border-gray-300 outline-none rounded-lg text-lg transition-all duration-300 ease-in-out focus:border-green-400 valid:border-green-400 relative z-10 bg-transparent"
          // required
          value={value}
          onChange={onChange}
          disabled={disable}
        />
        <span
          className={`absolute z-0 left-3 px-2 text-sm uppercase text-gray-500 transition-all duration-500 ease-in-out top-3 peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-green-500 peer-focus:border-x peer-focus:border-green-400 peer-focus:bg-gray-300 peer-focus:z-20  ${
            value &&
            "top-[-10px] text-xs text-green-500 border-x border-green-400 bg-gray-300 z-20"
          }`}
        >
          {lable}
        </span>
        {rightbtnTet && isDisplayRightBtn && (
          <span
            className="absolute z-50 right-3 w-[80px] h-[30px] bg-primary text-white rounded-md top-2 font-medium cursor-pointer flex justify-center items-center"
            onClick={rightBtnFunction}
          >
            {isLoading ? <BeatLoader color="#fff" size={10} /> : rightbtnTet}
          </span>
        )}
      </div>
      {isValid && (
        <button className="text-[10px] text-red-400 font-medium text-start">
          {isValid}
        </button>
      )}
    </div>
  );
};

export default NewInput;
