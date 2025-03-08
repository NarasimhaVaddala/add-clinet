import React from "react";
import Card from "../Components/Card";
import SectionHeading from "../../../../../utils/SectionHeading";

import SectionLayout from "../../../../../Layout/SectionLayout";

export default function WhoCanParticipate() {
  const data = [
    {
      title: "Open to all Skill Levels",
      text: "The competition is open to all skill levels, from beginners to experts. Whether you are just starting out or have years of experience, we welcome everyone to take part. This is an opportunity for all participants to showcase their creativity, regardless of their background or experience.",
    },
    {
      title: "Individuals or teams",
      text: "The competition is open to both individuals and teams of all skill levels. Whether you choose to participate alone or collaborate with others, everyone is welcome to join, regardless of experience. This is an opportunity for both solo creators and teams to showcase their creativity and talents. For team entries, please ensure to provide the details of all team members.",
    },
    {
      title: "Multiple Submissions",
      text: "Participants are welcome to submit multiple entries for the competition. Whether you are an individual or a team, you can submit as many creative ideas as you like, giving you the opportunity to showcase your diverse talents and concepts. Each submission will be judged individually, so feel free to take advantage of this opportunity to present different ideas or approaches.",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeading txt="Who Can Participate" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card
            // textstyles={"text-justify"}
            key={index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
