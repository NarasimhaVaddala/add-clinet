import React from "react";
import SectionLayout from "../../../../../Layout/SectionLayout";
import SectionHeading from "../../../../../utils/SectionHeading";
import Button from "../../../../../utils/Button";

export default function AdvertiseYourself({ handlePay }) {
  return (
    <SectionLayout style={"flex items-center justify-center flex-col gap-2"}>
      <SectionHeading txt="Design an ad for a chance to win ₹ 15,000" />
      <p>
        The best ad will be Featured on our website and Social Media.
        Submissions due by April 20th.
      </p>
      <Button text={"Submit Your Video"} onClick={handlePay} />
    </SectionLayout>
  );
}
