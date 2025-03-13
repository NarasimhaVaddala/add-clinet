// SubmissionGuidelines.jsx
import React from "react";
import SectionHeading from "../../../../../utils/SectionHeading";

import SectionLayout from "../../../../../Layout/SectionLayout";

export default function SubmissionGuidelines() {
  const data = [
    {
      title: "Submission Guidelines",
      texts: [
        {
          heading: "Submission Guidelines",
          para: "All submissions must be entirely original, including music, images, backgrounds, and other media. Any use of unlicensed or copied content, or violation of intellectual property rights, will result in disqualification.",
        },
        {
          heading: "Ad duration",
          para: "The video duration must be minimum 30 seconds and maximum 2 minutes.",
        },
        {
          heading: "File size",
          para: "Should not exceed 1GB.",
        },
        {
          heading: "Before submitting your ad",
          para: "Please review the rules, policies, terms and conditions, and privacy policies to ensure compliance.",
        },
      ],
    },
    {
      title: "Registration Guidelines",
      texts: [
        {
          heading: "Create a New Account",
          para: 'If you do not have an account, click on the "Register Process" option to begin the registration.',
        },
        {
          heading: "Enter Personal Information",
          para: "Fill in the following details: Full Name, Phone Number (You will receive an OTP to verify your number), Email ID, Address.",
        },
        {
          heading: "Submit Your Information",
          para: "After entering all the required details, click on Submit.",
        },
        {
          heading: "Complete Registration Fee Payment",
          para: "After submission, you will be prompted to pay a non-refundable registration fee of ₹499.",
        },
        {
          heading: "Payment options available",
          para: "UPI ID, Net Banking, Debit/Credit Cards, Wallets.",
        },
        {
          heading: "Submit Video",
          para: "Once payment is completed, upload your video and fill out all the necessary fields.",
        },
        {
          heading: "Final Submission",
          para: "After uploading the video and ensuring all fields are completed, click on Submit to complete the registration process.",
        },
      ],
    },
    {
      title: "Policies and Rules",
      texts: [
        {
          heading: "How to Enter",
          para: "Submit your video entry through this website. Ensure that all required fields and information are correctly filled out in the entry form.",
        },
        {
          heading: "Eligibility",
          para: "The competition is open to all participants, with no age or gender restrictions. Everyone is welcome to participate.",
        },
        {
          heading: "Judging Criteria",
          para: "The competition will be judged on creativity, originality, relevance to the theme, and overall presentation, including visuals, storytelling, and message. Candidate videos will be uploaded to our YouTube channel, where views and likes will contribute to the evaluation. Additionally, a voting process will take place through a separate website, with the voting link shared via email. Any attempt to manipulate views, likes, or votes through fake means will result in disqualification. The judges' decision will be final and binding.",
        },
        {
          heading: "Publicity",
          para: "By entering the competition, participants agree to the use of their name, video, and other details in promotional materials and announcements.",
        },
        {
          heading: "Disqualification",
          para: "Any participant found violating the competition rules, submitting plagiarized content, or engaging in unfair practices will be disqualified. Organizers reserve the right to disqualify any entry deemed inappropriate or in violation of the rules.",
        },
        {
          heading: "Rights",
          para: "By submitting an entry, participants grant the organizers the right to use, publish, and distribute the content for promotional purposes related to the competition.",
        },
        {
          heading: "Changes to Terms",
          para: "Zen Media reserves the right to update or amend the rules and regulations of the competition at any time without prior notice.",
        },
        {
          heading: "Agreement",
          para: "By participating in this Ad Competition, you agree to adhere to these rules and regulations. Best of luck, and we look forward to your amazing entries!",
        },
      ],
    },
  ];

  return (
    <SectionLayout>
      <SectionHeading txt="Rules and Regulations" />
      <div className="grid grid-cols-1  gap-6">
        {data.map((item) => (
          <ListItem key={item} title={item.title} texts={item.texts} />
        ))}
      </div>
    </SectionLayout>
  );
}

function ListItem({ title, texts }) {
  return (
    <div className="bg-white  rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {texts?.map((e, index) => (
        <p key={index} className="text-gray-700 mb-4 text-justify">
          <strong>{e.heading} :</strong> {e.para}
        </p>
      ))}
    </div>
  );
}
