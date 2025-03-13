import React from "react";
import SectionLayout from "../../../../../Layout/SectionLayout";
import SectionHeading from "../../../../../utils/SectionHeading";

export default function Partner() {
  return (
    <SectionLayout style={"lg:-mt-16 -mt-56"}>
      <SectionHeading txt={"Our Partners"} style={"text-center"} />
      <p className="text-center leading-6">
        we craft stories that inspire, engage, and leave a lasting impact. Our
        vision is to shape a future where content sparks change, amplifies
        voices, and drives meaningful connections.
      </p>
      <div className="flex flex-col  md:flex-row justify-center items-center md:gap-4">
        <a href="https://www.nuhvin.com/" target="_blank">
          <img
            className=" w-[200px] object-contain"
            src="https://www.nuhvin.com/logo1black.png"
            alt=""
          />
        </a>

        <a href="https://womenrider.com/" target="_blank">
          <img
            className=" w-[200px] object-contain"
            src="https://womenrider.com/assets/ourimages/final-header-logo-removebg-preview.png"
            alt=""
          />
        </a>
      </div>
    </SectionLayout>
  );
}
