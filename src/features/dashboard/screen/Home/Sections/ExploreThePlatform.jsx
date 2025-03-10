import React from "react";
import SectionLayout from "../../../../../Layout/SectionLayout";
import SectionHeading from "../../../../../utils/SectionHeading";
import Card from "../components/Card";
import { title } from "framer-motion/client";

export default function ExploreThePlatform() {
  const data = [
    {
      icon: "🎬",
      title: "Web Series",
      text: "We produce high-quality web series that captivate audiences with engaging storytelling, compelling characters, and immersive cinematography. Whether it’s drama, thriller, romance, or social narratives, our series are crafted to leave a lasting impression.",
    },
    {
      icon: "🎞",
      title: "Short Series",
      text: "Short yet impactful, our short series are designed to deliver powerful storytelling in a compact format. Perfect for audiences who seek engaging content that fits into their fast-paced lives.",
    },
    {
      icon: "🎥",
      title: "Short Films",
      text: "A single moment, a strong emotion, a meaningful story—our short films capture the essence of life in a few minutes. We focus on deep narratives, artistic visuals, and thought-provoking concepts that resonate with viewers.",
    },
    {
      icon: "🎙",
      title: "Podcasts",
      text: "We bring voices to stories that matter. Our podcasts feature insightful discussions, real-life experiences, and expert perspectives on topics ranging from entertainment and business to social change and creativity.",
    },
    {
      icon: "🎤",
      title: "Interviews",
      text: "Exclusive conversations with inspiring personalities, industry experts, and creative minds. Our interviews offer deep insights into their journeys, struggles, and success stories, motivating aspiring creators and entrepreneurs.",
    },

    {
      icon: "📢",
      title: "Advertising & Brand Collaborations",
      text: "Creative, story-driven advertising that connects brands with audiences. We merge creativity with strategy to create memorable campaigns that resonate.",
    },
    // {
    //   icon: "🤝",
    //   title: "Brand Collaborations",
    //   text: "We partner with brands to create customized, high-impact content that aligns with their vision. Through creative storytelling and strategic marketing, we help brands build meaningful connections with their audience.",
    // },
    {
      icon: "🎨",
      title: "Creative Content Production",
      text: "From concept to execution, we handle everything—scriptwriting, filming, editing, and post-production—to deliver high-quality, engaging digital content.",
    },
    {
      icon: "🚀",
      title: "Digital Media Promotions",
      text: "Strategic campaigns to boost brand visibility and maximize engagement. We help businesses and creators amplify their reach through digital innovation.",
    },
  ];

  return (
    <div className="w-full text-black">
      <SectionLayout>
        <SectionHeading
          txt={"Explore The World of Zen Media"}
          style={"text-center"}
        />
        <p className="text-center">
          Welcome to Zen Media, a hub of creativity, storytelling, and digital
          innovation. Whether you're a filmmaker, content creator, brand, or an
          audience passionate about engaging stories, Zen Media offers a dynamic
          space to create, inspire, and conquer.
        </p>
      </SectionLayout>
      <div className="flex flex-wrap w-full justify-center items-center gap-8">
        {data.map((e, index) => (
          <Card
            icon={e.icon}
            key={index}
            image={"/ladyicon.png"}
            title={e.title}
            text={e.text}
          />
        ))}
      </div>
    </div>
  );
}
