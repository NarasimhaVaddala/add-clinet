import React from "react";
import Card from "../Components/Card";
import SectionHeading from "../../../../../utils/SectionHeading";

import SectionLayout from "../../../../../Layout/SectionLayout";

export default function WhoCanParticipate() {
  const data = [
    {
      title: "Open to all Skill Levels",
      text: "Must be 18 years or older to participate \n students, professionals, freelancers and anyone looking to hone their advertisin skills",
    },
    {
      title: "Individuals or teams",
      text: "You can submit as a individual or team. If you're part of team, make sure to include all members names and emial address when you register",
    },
    {
      title: "Multiple Submissions",
      text: "Participants can submit up to two entries per category",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeading txt="Who Can Participate" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </SectionLayout>
  );
}
