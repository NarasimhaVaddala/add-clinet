import React from "react";
import SectionHeading from "../../../../../utils/SectionHeading";
import SectionLayout from "../../../../../Layout/SectionLayout";

export default function HowItWorks() {
  const data = [
    {
      title: "Sign up",
      text: "Register online to enter the competition by providing your details. Once registered, you’re all set to participate.",
    },
    {
      title: "Craft your Ad",
      text: "Create an original and creative advertisement that aligns with the competition theme.",
    },
    {
      title: "Submit your ad",
      text: "Upload your completed advertisement(video) for evaluation by the judges.",
    },
    {
      title: "Vote",
      text: "Engage in the voting process, or encourage others to vote for your entry.",
    },
    {
      title: "Win",
      text: "If selected, claim your prize",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeading txt="How It Works" />
      <div className="grid grid-cols-1 gap-6">
        {data.map((item, index) => (
          <ListItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </SectionLayout>
  );
}

function ListItem({ title, text }) {
  return (
    <div className="flex gap-4 bg-white rounded-lg ">
      <div className="hover:scale-110 transition-all flex-shrink-0 bg-gray-300 h-16 w-16 rounded-lg flex items-center justify-center">
        <i className="fa-solid fa-check text-black text-2xl"></i>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}
