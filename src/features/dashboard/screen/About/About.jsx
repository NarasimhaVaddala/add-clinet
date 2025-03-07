import React from "react";
import NewBtn from "../../../../utils/NewBtn";
import { useNavigate } from "react-router-dom";
import HeroSec from "./sections/HeroSection";
import AboutSec from "./sections/AboutSection";
import MissionVision from "./sections/MissionVision";
import Participate from "./sections/Participate";
import CreativePotential from "./sections/CreativePotential";
import FilmMakingHeights from "./sections/FilmMaking";

export default function About() {
  const navigate = useNavigate();

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const MissionVisionData = [
    {
      img: "",
      title: "Zen Vision",
      mainText:
        "To revolutionize storytelling by creating powerful, thought-provoking content that inspires, connects, and transforms. We aspire to be a driving force in media, where every story is crafted with passion, purpose, and the ability to leave a lasting impact on audiences worldwide.",
      listData: [
        {
          title: "Set New Standards in Storytelling :",
          text: "Elevate creative expression by pushing the limits of imagination, innovation, and artistic brilliance.",
        },
        {
          title: "Inspire and Empower Audience :",
          text: "Deliver compelling narratives that spark conversations, challenge perspectives, and drive positive change.",
        },
        {
          title: "Bridge Cultures and Ideas :",
          text: "Unite diverse voices through universal storytelling, fostering empathy, understanding, and global connection.",
        },
        {
          title: "Leave a Legacy of Impact :",
          text: "Create stories that are not just seen or heard but are deeply felt, remembered, and celebrated for generations to come.",
        },
        {
          title: "Revolutionize Content Creation :",
          text: "Lead with cutting-edge technology, fresh perspectives, and an unwavering commitment to originality and excellence.",
        },
      ],
    },
    {
      img: "",
      title: "Zen Vision",
      mainText:
        "At Zen Media, we are committed to producing compelling narratives that blend creativity, authenticity, and innovation.",
      listData: [
        {
          title: "Tell Stories That Matter :",
          text: "Craft meaningful content that evokes emotion, sparks conversation, and resonates with diverse audiences.",
        },
        {
          title: "Inspire Through Creativity :",
          text: "Push the boundaries of storytelling by embracing fresh ideas and innovative techniques.",
        },
        {
          title: "Uphold Excellence :",
          text: "Deliver high-quality productions with meticulous attention to detail and artistic integrity.",
        },
        {
          title: "Empower Voices :",
          text: "Provide a platform for unique perspectives, ensuring every story has the power to be seen and heard.",
        },
        {
          title: "Create a Lasting Impact :",
          text: "Go beyond entertainment by producing content that influences culture, challenges norms, and drives positive change.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSec handleNavigateRegister={handleNavigateRegister} />
      <AboutSec handleNavigateRegister={handleNavigateRegister} />
      {MissionVisionData.map((e, index) => (
        <MissionVision
          key={index}
          title={e.title}
          mainText={e.mainText}
          list={e.listData}
          index={index} // Pass the index
        />
      ))}
      <Participate handleNavigateRegister={handleNavigateRegister} />
      <CreativePotential handleNavigateRegister={handleNavigateRegister} />
      <FilmMakingHeights handleNavigateRegister={handleNavigateRegister} />
    </>
  );
}
