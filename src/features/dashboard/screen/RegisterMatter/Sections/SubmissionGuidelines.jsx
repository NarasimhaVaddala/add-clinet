// SubmissionGuidelines.jsx
import React from "react";
import SectionHeading from "../../../../../utils/SectionHeading";

import SectionLayout from "../../../../../Layout/SectionLayout";

export default function SubmissionGuidelines() {
  return (
    <SectionLayout>
      <SectionHeading txt="Rules and Regulations" />
      <div className="grid grid-cols-1  gap-6">
        {[1, 2, 3].map((item) => (
          <ListItem key={item} />
        ))}
      </div>
    </SectionLayout>
  );
}

function ListItem() {
  return (
    <div className="bg-white  rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Submission Guidelines</h3>
      <p className="text-gray-700 mb-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam laborum enim quidem delectus quia aspernatur? At veniam omnis
        iusto.
      </p>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        accusantium voluptates quo dicta. Dolore, aperiam saepe. Nisi mollitia
        saepe reiciendis?
      </p>
    </div>
  );
}
