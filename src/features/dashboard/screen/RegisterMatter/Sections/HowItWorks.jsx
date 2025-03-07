import React from "react";

export default function HowItWorks() {
  const data = [
    {
      title: "Sign up",
      text: "Choose your category and register. You can signup as an individual or team (up to 5 members)",
    },
    {
      title: "Craft your ad",
      text: "Create your ad, you'll have 2 months to craft your masterpiece and submit it by deadline.",
    },
    {
      title: "Submit your ad",
      text: "Wait for the results, Winners will be announced 2 weeks after the contest ends",
    },
    {
      title: "Vote",
      text: "Submit on or before 30 March 2025",
    },
    {
      title: "Win",
      text: "Winners will be announced on 12th April 2025",
    },
  ];

  return (
    <div className=" mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">How it works</h1>
      <div className="grid grid-cols-1  gap-6">
        {data.map((item, index) => (
          <ListItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

function ListItem({ title, text }) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg ">
      <div className="flex-shrink-0 bg-gray-300 h-16 w-16 rounded-lg flex items-center justify-center">
        <i className="fa-solid fa-check text-black text-2xl"></i>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}
