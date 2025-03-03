import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usePayment } from "../hooks/usePayment";
import VerticalCard from "../../../utils/VerticalCard";
import { nav, text } from "framer-motion/client";
import NewBtn from "../../../utils/NewBtn";

export default function RegisterMatter() {
  const { userProfile } = useSelector((state) => state.profileSlice);
  const navigate = useNavigate();
  const [paid, setPaid] = useState(userProfile?.paymentStatus);
  const { makePayment } = usePayment();

  const handlePay = async () => {
    const token = await localStorage.getItem("token");
    console.log(token);

    if (!token) {
      return navigate("/login");
    }

    if (token && paid) {
      return navigate("/register-form");
    } else {
      makePayment();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection handlePay={handlePay} />
      <SecondSection />
      <ThirdSection />
      {/* <button onClick={handlePay}>Register</button> */}
    </div>
  );
}

function HeroSection({ handlePay }) {
  return (
    <section
      id="hero-container-register"
      className="relative bg-cover bg-center h-[50vh] text-white"
    >
      <div className="absolute bottom-4 px-4 py-4">
        <h2 className="text-2xl lg:text-5xl font-bold">
          Video Competition 2025
        </h2>
        <p className="lg:text-xl mb-4">
          Congratulations! You're one step closer to showcasing your Film making
          skills. Please read the competition guidelines carefully before
          registering.
        </p>

        <NewBtn
          title="Register Now"
          customStyl="w-full lg:w-auto"
          onClick={handlePay}
        />
      </div>
    </section>
  );
}

function SecondSection() {
  const cardsData = [
    {
      heading: "Ensuring Safety for Every Journey",
      text: "Discover innovative solutions to enhance women's travel safety.",
      icon: "/s2.png",
      customStyl: "bg-[#062C3D]",
    },
    {
      heading: "Challenging Gender Norms in Transportation",
      text: "Join us in breaking stereotypes and paving new paths.",
      icon: "/challenge.png",
      customStyl: "bg-[#faa144]",
    },
    {
      heading: "Empowering Women Through Mobility Solutions",
      text: "Together, we can redefine mobility for women everywhere.",
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
          <h3 className="text-3xl font-bold">
            Transforming Lives Through Safe Transportation
          </h3>
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
  { icon: "/icons/time.png", text: "Video Duration: 30sec-2 mins." },
  {
    icon: "/fle.png",
    text: "Format: MP4, MOV, AVI, WMV, AVCHD, WEBM, 1080p, 720p, 2k, 4k resolution recommended",
  },
  {
    icon: "/icons/shield.png",
    text: "Safety Rules: No stunts without protective gear; follow traffic rules",
  },
  {
    icon: "/icons/calender.png",
    text: "Registration Deadline: Mar 02 - Mar 15, 2025",
  },
  {
    icon: "/icons/calender.png",
    text: "Submission Deadline: March 20, 2025",
  },
  {
    icon: "/icons/speaker.png",
    text: "Winner Announcement: March 30, 2025",
  },
];

const anotherGuidelines = [
  {
    icon: "/icons/time.png",
    text: "After registration, participants will receive a link to upload their video.",
  },
  {
    icon: "/fle.png",
    text: "File  Size: Below 1gb",
  },

  {
    icon: "/Letter.png",
    text: "Native language (with English subtitles).",
  },
  {
    icon: "/upload.png",
    text: "File name format: YourName_CompetitionCategory.mp4",
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
    text: "2nd Prize: ₹10,000 + Short film production",
  },
  {
    icon: "/thrid.png",
    text: "3rd Prize: Short film production",
  },
];

const terms = [
  "Women Rider has the right to use submitted videos for promotional purposes.",
  "Participants must be 18+ and legally eligible to ride.",
  "Any misleading content will lead to disqualification.",
];

function ThirdSection() {
  return (
    <section className="bg-black text-white py-8 px-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Guidelines</h3>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4">
        {/* First Box */}
        <ReusableWhiteDabba customStyl="w-full lg:w-1/2">
          <h4 className="font-bold mb-2">Competition Rules & Guidelines</h4>
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
              title1: "30%",
              title2: "Creativity",
              text: "Unique storytelling and \n engagement",
            },
            {
              title1: "30%",
              title2: "Riding Skill",
              text: "Control and confidence \n demonstration",
            },
            {
              title1: "20%",
              title2: "Presentation",
              text: "Video clarity and overall appeal",
            },
            {
              title1: "20%",
              title2: "Safety Measures",
              text: "Video clarity and overall appeal",
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

      <div className="mt-4">
        <ReusableWhiteDabba customStyl="w-full">
          <h4 className="font-bold mb-2">Terms and Conditions</h4>
          {terms.map((item, index) => (
            <ListItem key={index} icon={"/Tick.png"} text={item} />
          ))}
        </ReusableWhiteDabba>
      </div>
    </section>
  );
}

function ReusableWhiteDabba({ children, customStyl }) {
  return (
    <div className={`bg-white text-black p-4 rounded-2xl ${customStyl}`}>
      {children}
    </div>
  );
}

function ListItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <img src={icon} alt="icon" className="h-4 w-4" />
      <p>{text}</p>
    </div>
  );
}
