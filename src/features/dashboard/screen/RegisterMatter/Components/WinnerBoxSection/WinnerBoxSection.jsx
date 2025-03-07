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
      <SectionHeading txt="Benifits of Winner" />
      {/* <p className="text-lg font-normal">
        All submissions must meet the following criteria to be
      </p>
      <p className="text-lg font-normal">considered for selection:</p>
      <Button
        onClick={handleNavigateLogin}
        width="180px"
        text="Submit Your Video"
      /> */}

      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
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
    </SectionLayout>
  );
};

export default WinnerBoxSection;
