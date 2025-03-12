import React from "react";
import SectionLayout from "../../../../../Layout/SectionLayout";
import SectionHeading from "../../../../../utils/SectionHeading";
import NewBtn from "../../../../../utils/NewBtn";

export default function RemeberUsCars({
  handlePay,
  containerStyle,
  title = "Remember us by",
  text = "Relive the unforgettable with our exclusive digital collection",
}) {
  return (
    // <SectionLayout>
    <div
      className={`w-full relative flex flex-col lg:flex-row justify-between rounded-2xl bg-black text-white py-8 px-4 lg:w-[90%] mx-auto ${containerStyle}`}
    >
      <div className="space-y-4">
        <SectionHeading txt={title} style={"text-4xl"} />
        <p>{text}</p>
        <NewBtn title={"Register Now"} onClick={handlePay} />
      </div>

      <div className="absolute right-0 -bottom-10">
        <img src="/cutcut.png" alt="" className="h-[300px] " />
      </div>
    </div>
    // </SectionLayout>
  );
}
