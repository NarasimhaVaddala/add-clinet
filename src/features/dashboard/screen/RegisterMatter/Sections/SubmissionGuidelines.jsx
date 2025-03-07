// SubmissionGuidelines.jsx
import React from "react";

export default function SubmissionGuidelines() {
  return (
    <div className="max-w-[80%] mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Rules and Regulations
      </h1>
      <div className="grid grid-cols-1  gap-6">
        {[1, 2, 3].map((item) => (
          <ListItem key={item} />
        ))}
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Submission Guidelines</h3>
      <p className="text-gray-700 mb-4">
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
