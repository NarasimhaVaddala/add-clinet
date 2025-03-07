import React from "react";

export default function SectionHeading({ txt, style }) {
  return (
    <h2 className={`lg:text-5xl font-bold my-4 text-3xl  ${style}`}>{txt}</h2>
  );
}
