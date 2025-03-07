import React from "react";
import "./WinnerBoxSection.css"; // Ensure CSS is correctly imported
import Button from "../../../../utils/Button";
import { useNavigate } from "react-router-dom";

const WinnerBoxSection = () => {
  const navigation = useNavigate();

  const handleNavigateLogin = () => {
    navigation("/login");
  };

  return (
    <div className="w-full flex flex-col gap-2 items-center ">
      <h1 className="text-5xl font-semibold ">Benefits of Wonner</h1>
      <p className="text-lg font-normal">
        All submissions must meet the following criteria to be
      </p>
      <p className="text-lg font-normal">considered for selection:</p>
      <Button
        onClick={handleNavigateLogin}
        width="180px"
        text="Submit Your Video"
      />

      <div className="w-full flex  items-center justify-around  p-4">
        <div className="card">
          <h2 className="text-xl text-white">Winner 1</h2>
        </div>
        <div className="card">
          <h2 className="text-xl text-white">Winner 2</h2>
        </div>
        <div className="card">
          <h2 className="text-xl text-white">Winner 3</h2>
        </div>
      </div>
    </div>
  );
};

export default WinnerBoxSection;
