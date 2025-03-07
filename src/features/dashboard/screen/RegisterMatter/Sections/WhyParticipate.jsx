import React from "react";
import Card from "../Components/Card";
import SectionHeading from "../../../../../utils/SectionHeading";

import SectionLayout from "../../../../../Layout/SectionLayout";

export default function WhyParticipate() {
  const data = [
    {
      title: "Practice",
      text: "Sharpen your Film making skills",
    },
    {
      title: "Feedback",
      text: "Get professional critiques",
    },
    {
      title: "Exposure",
      text: "Showcase your work",
    },
    {
      title: "Portfolio",
      text: "Expand Your Portfolio",
    },
    {
      title: "Fun",
      text: "Enjoy the creative process",
    },
    {
      title: "Prizes",
      text: "Win cash and other rewards",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeading txt="Why Participate" />
      <div className="grid lg:grid-cols-3 gap-6 w-full">
        {data.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </SectionLayout>
  );
}
