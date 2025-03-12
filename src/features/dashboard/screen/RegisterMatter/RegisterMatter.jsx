import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";
import VerticalCard from "../../../../utils/VerticalCard";
import { nav, text } from "framer-motion/client";
import NewBtn from "../../../../utils/NewBtn";
import { toast } from "react-toastify";
import HeroSection from "./Sections/HeroSection";
import WhyParticipate from "./Sections/WhyParticipate";
import CompetionDetails from "./Sections/CompetionDetails";
import WhoCanParticipate from "./Sections/WhoCanParticipate";
import HowItWorks from "./Sections/HowItWorks";
import SubmissionGuidelines from "./Sections/SubmissionGuidelines";
import CardBlack from "../../../../utils/CardBlack";
import WinnerBoxSection from "./Components/WinnerBoxSection/WinnerBoxSection";
import RemeberUsCars from "./Sections/RemeberUsCars";
import AdvertiseYourself from "./Sections/AdvertiseYourself";

export default function RegisterMatter() {
  const { userProfile } = useSelector((state) => state.profileSlice);
  const navigate = useNavigate();
  // const [paid, setPaid] = useState(userProfile?.paymentStatus);
  const { makePayment } = usePayment();

  console.log("--------------", userProfile);

  const handlePay = async () => {
    const token = await localStorage.getItem("token");

    if (!token) {
      return navigate("/signup");
    }

    if (
      userProfile?.video ||
      userProfile?.producerName ||
      userProfile?.imageTwo ||
      userProfile?.imageThree ||
      userProfile?.imageOne ||
      userProfile?.imageFour ||
      userProfile?.editorName ||
      userProfile?.directorName ||
      userProfile?.cinematographyName
    ) {
      return navigate("/registered");
    }

    if (userProfile?.paymentStatus) {
      return navigate("/register-form");
    } else {
      makePayment();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection handlePay={handlePay} />
      <WhyParticipate />
      <AdvertiseYourself handlePay={handlePay} />
      <WinnerBoxSection />
      <WhoCanParticipate />
      <HowItWorks />
      <SubmissionGuidelines />
      <RemeberUsCars
        handlePay={handlePay}
        title="Remember us by"
        text="Keep every memory alive with our digital collection – one click to eternalize the moments"
      />
      {/* <CompetionDetails /> */}
      {/* <button onClick={handlePay}>Register</button> */}
    </div>
  );
}

function SecondSection() {
  const cardsData = [
    {
      heading: "Empowering Women to Travel Safely & Confidently",
      text: "The Women Rider app ensures safe, empowered travel with background-checked drivers,Passengers and real-time ride tracking.",
      icon: "/s2.png",
      customStyl: "bg-[#062C3D]",
    },
    {
      heading: "Building a Community of Women Riders",
      text: "Women Rider builds a supportive community of women supporting women, fostering safety, trust, and empowerment for both riders and drivers.",
      icon: "/challenge.png",
      customStyl: "bg-[#faa144]",
    },
    {
      heading: "Revolutionizing Women’s Travel Experience",
      text: "Women Rider reimagines travel by prioritizing safety, comfort, and accessibility for confident, empowering mobility.",
      icon: "/empower.png",
      customStyl: "bg-[#062C3D]",
    },
  ];

  return (
    <section className="lg:h-[100vh] bg-black text-white py-8 lg:py-0 px-4 lg:px-0">
      {/* Outer Container */}
      <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
        {/* Left Side: Title and Description */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-5">
          <h3 className="text-3xl font-bold">Empowering Women's Travel</h3>
          <p className="text-xl mt-2">
            We believe every woman deserves the freedom to travel safely. Our
            mission is to create a world where transportation independence
            empowers women.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-[80%] grid lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <VerticalCard
              key={index}
              heading={card.heading}
              icon={card.icon}
              customStyl={card.customStyl}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const guidelines = [
  {
    icon: "/icons/time.png",
    text: "Eligibility : The competition is open to all participants, regardless of gender. Participants must be residents of India.",
  },
  {
    icon: "/fle.png",
    text: "Submission Guidelines : Only one entry per participant is allowed.",
  },
  {
    icon: "/icons/shield.png",
    text: "The video should be original, created solely by the participant, and must not have been published elsewhere prior to submission.",
  },
  {
    icon: "/icons/calender.png",
    text: "The video duration must be minimum 30 seconds and maximum 2 minutes and file size should not exceed 1GB.",
  },
  {
    icon: "/icons/calender.png",
    text: "Accepted formats include MP4, MOV, MKV, AVI, WEBM, WMV with recommended resolutions of 720p, 1080p, 2k, or 4k.",
  },
  {
    icon: "/icons/speaker.png",
    text: "Registration Starts: March 10 - 15 2025 , Submission Deadline: March 20 2025 , Winner Announcement: March 25, 2025",
  },
  {
    icon: "/icons/speaker.png",
    text: "Judging Criteria:The competition will be judged based on creativity, originality, relevance to the theme, and overall presentation, including visuals, storytelling, and message. The judges’ decision will be final and binding.",
  },
  {
    icon: "/icons/speaker.png",
    text: "Judging Criteria:The competition will be judged based on creativity, originality, relevance to the theme, and overall presentation, including visuals, storytelling, and message. The judges’ decision will be final and binding.",
  },
  {
    icon: "/icons/speaker.png",
    text: "How to Enter: Submit your video entry through this website. Ensure that all required fields and information are correctly filled out in the entry form.",
  },
  {
    icon: "/icons/speaker.png",
    text: "Publicity : By entering the competition, participants agree to the use of their name, video, and other details in promotional materials and announcements.",
  },
  {
    icon: "/icons/speaker.png",
    text: "Rights : By submitting an entry, participants grant the organizers the right to use, publish, and distribute the content for promotional purposes related to the competition.",
  },
  {
    icon: "/icons/speaker.png",
    text: "Disqualification: Any participant found violating the competition rules, submitting plagiarized content, or engaging in unfair practices will be disqualified. Organizers reserve the right to disqualify any entry deemed inappropriate or in violation of the rules",
  },

  {
    icon: "/icons/speaker.png",
    text: "Changes to Terms: Zen Media reserves the right to update or amend the rules and regulations of the competition at any time without prior notice.",
  },
  {
    icon: "/icons/speaker.png",
    text: "By participating in this Ad Competition, you agree to adhere to these rules and regulations. Best of luck, and we look forward to your amazing entries!",
  },
];
// const guidelines = [
//   { icon: "/icons/time.png", text: "Video Duration: 30sec-2 mins." },
//   {
//     icon: "/fle.png",
//     text: "Format: MP4, MOV, AVI, WMV, AVCHD, WEBM, 1080p, 720p, 2k, 4k resolution recommended",
//   },
//   {
//     icon: "/icons/shield.png",
//     text: "Safety Rules: No stunts without protective gear; follow traffic rules",
//   },
//   {
//     icon: "/icons/calender.png",
//     text: "Registration Deadline: Mar 02 - Mar 15, 2025",
//   },
//   {
//     icon: "/icons/calender.png",
//     text: "Submission Deadline: March 20, 2025",
//   },
//   {
//     icon: "/icons/speaker.png",
//     text: "Winner Announcement: March 30, 2025",
//   },
// ];

const anotherGuidelines = [
  {
    icon: "/icons/time.png",
    text: "Read the Guidelines.",
  },
  {
    icon: "/fle.png",
    text: "Pay the Registration Amount",
  },

  {
    icon: "/Letter.png",
    text: "Fill the registration form , upload all the required fields.",
  },
  {
    icon: "/upload.png",
    text: "Submit video only in mentioned formats.",
  },
  {
    icon: "/email.png",
    text: "A confirmation email will be sent after submission.",
  },
];

const prices = [
  {
    icon: "/first.png",
    text: "1st Prize: ₹20,000 + Web series production",
  },
  {
    icon: "/second.png",
    text: "2nd Prize: ₹10,000 + Short series production",
  },
  {
    icon: "/thrid.png",
    text: "3rd Prize: Short film production",
  },
];

// const terms = [
//   "Women Rider has the right to use submitted videos for promotional purposes.",
//   "Participants must be 18+ and legally eligible to ride.",
//   "Any misleading content will lead to disqualification.",
// ];

function ThirdSection() {
  return (
    <section className="bg-black text-white py-8 px-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Guidelines</h3>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4">
        {/* First Box */}
        <ReusableWhiteDabba customStyl="w-full lg:w-1/2 h-[20rem]  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <h4 className="font-bold mb-2">Guidelines , Rules and Regulations</h4>
          {guidelines.map((item, index) => (
            <ListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ReusableWhiteDabba>

        {/* Second Box */}
        <ReusableWhiteDabba customStyl="w-full lg:w-1/2">
          <h4 className="font-bold mb-2">How to Submit Your Video</h4>
          {anotherGuidelines.map((item, index) => (
            <ListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ReusableWhiteDabba>
      </div>

      {/* Prizes Box */}
      <div className="mt-4">
        <ReusableWhiteDabba customStyl="w-full">
          <h4 className="font-bold mb-2">Prizes</h4>
          {prices.map((item, index) => (
            <ListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ReusableWhiteDabba>
      </div>

      <div className="mt-4">
        <h3 className="text-3xl font-bold mb-4 text-center">
          Evaluation Criteria
        </h3>

        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          {[
            {
              title1: "35%",
              title2: "Creativity & Concept",
              text: "Originality of the idea and how well \n the concept aligns with the message.",
            },
            {
              title1: "30%",
              title2: "Message Clarity",
              text: "How clearly and effectively the ad communicates its message.",
            },
            {
              title1: "20%",
              title2: "Visual Appeal",
              text: "Quality of visuals, design, and overall aesthetics.",
            },
            {
              title1: "15%",
              title2: "Engagement",
              text: "Ability to capture attention and create an emotional connection with the audience",
            },
          ].map((e, index) => {
            return (
              <ReusableWhiteDabba
                key={index}
                customStyl={
                  "flex flex-col text-center items-center justify-center py-8 px-8"
                }
              >
                <h3 className="font-bold text-3xl text-[#EDB1BA]">
                  {e.title1}
                </h3>
                <h3 className="font-bold text-2xl">{e.title2}</h3>
                <p className="font-thin">{e.text}</p>
              </ReusableWhiteDabba>
            );
          })}
        </div>
      </div>
      {/* 
      <div className="mt-4">
        <ReusableWhiteDabba customStyl="w-full">
          <h4 className="font-bold mb-2">Terms and Conditions</h4>
          {terms.map((item, index) => (
            <ListItem key={index} icon={"/Tick.png"} text={item} />
          ))}
        </ReusableWhiteDabba>
      </div> */}
    </section>
  );
}

// function ReusableWhiteDabba({ children, customStyl }) {
//   return (
//     <div className={`bg-white text-black p-4 rounded-2xl ${customStyl}`}>
//       {children}
//     </div>
//   );
// }

function ReusableWhiteDabba({ children, customStyl }) {
  return (
    <div
      className={`bg-white text-black rounded-2xl p-6 ${customStyl}`}
      style={{
        overflow: "hidden", // Preserve rounded corners
        // Set desired height (adjust as needed)
        // height: "100%", // Ensure container has defined dimensions
      }}
    >
      <div
        style={{
          overflowY: "auto", // Enable vertical scrolling
          height: "100%", // Fill parent container
          paddingRight: "1rem", // Space for scrollbar
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ListItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      {/* <img src={icon} alt="icon" className="h-4 w-4" /> */}
      <i class="fa-solid fa-arrow-right"></i>
      <p>{text}</p>
    </div>
  );
}
