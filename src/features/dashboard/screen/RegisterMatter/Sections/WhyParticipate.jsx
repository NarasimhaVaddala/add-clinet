import React from "react";
import Card from "../Components/Card";

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
    <div className="max-w-[80%] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Why Participate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
