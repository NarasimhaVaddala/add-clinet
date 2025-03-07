import React from "react";

export default function SectionLayout({ style, children }) {
  return (
    <div className={`w-full lg:w-[80%] mx-auto px-4 py-12 ${style}`}>
      {children}
    </div>
  );
}
