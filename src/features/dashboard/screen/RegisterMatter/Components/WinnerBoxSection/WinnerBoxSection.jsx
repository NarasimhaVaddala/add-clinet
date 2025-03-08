import React from "react";
import "./WinnerBoxSection.css"; // Ensure CSS is correctly imported
import Button from "../../../../../../utils/Button";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../../../../../../utils/SectionHeading";
import SectionLayout from "../../../../../../Layout/SectionLayout";

const WinnerBoxSection = () => {
  const navigation = useNavigate();

  const handleNavigateLogin = () => {
    navigation("/login");
  };

  return (
    <SectionLayout>
      {/* <SectionHeading txt="Benifits of Winner" /> */}
      {/* <p className="text-lg font-normal">
        All submissions must meet the following criteria to be
      </p>
      <p className="text-lg font-normal">considered for selection:</p>
      <Button
        onClick={handleNavigateLogin}
        width="180px"
        text="Submit Your Video"
      /> */}

      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between text-white text-center">
        <div className="card">
          <h2 className="text-md text-center font-bold mb-3">First Prize</h2>

          <p className="text-3xl font-bold">₹ 15,000</p>
          <p className="text-md font-extralight">(Fifteen Thousand Rupees)</p>
          <p className="text-md font-bold">+</p>
          <p className="text-md font-bold">we will produce web series</p>
        </div>
        <div className="card">
          <h2 className="text-md text-center font-bold mb-3">Second Prize</h2>

          <p className="text-3xl font-bold">₹ 10,000</p>
          <p className="text-md font-extralight">(Ten Thousand Rupees)</p>
          <p className="text-md font-bold">+</p>
          <p className="text-md font-bold">we will produce short series</p>
        </div>
        <div className="card">
          <h2 className="text-md text-center font-bold mb-3">Third Prize</h2>

          <p className="text-3xl font-bold">₹ 5,000</p>
          <p className="text-md font-extralight">(Five Thousand Rupees)</p>
          <p className="text-md font-bold">+</p>
          <p className="text-md font-bold">we will produce short film</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default WinnerBoxSection;
