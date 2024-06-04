import React from "react";

type SectionProps = {
  label: string;
  massage: string;
};

const Section = ({ label, massage }: SectionProps) => {
  return (
    <div>
      <p className=" text-sm font-medium">{label}</p>
      <p className=" text-sm font-light">{massage}</p>
    </div>
  );
};

export default Section;
