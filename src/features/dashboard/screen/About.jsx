import React from "react";
import NewBtn from "../../../utils/NewBtn";

export default function About() {
  const paragraphData = [
    "NUHVIN GLOBAL SERVICES is proudly announcing the Women Rider project, an initiative designed to transform the way women travel. With a focus on safety, reliability, and affordability, we aim to empower women by providing secure and convenient travel options. This project prioritizes the comfort and peace of mind of women travelers, while contributing to a larger vision of reshaping how women experience mobility in their daily lives. Through Women Rider, we are creating a world where every journey brings women a step closer to greater independence and empowerment.",

    "Our presence in the country is set to further revolutionize the concept of women’s travel. Through the Women Rider app, we are committed to offering safe, reliable, and affordable rides, ensuring a hassle-free travel experience that places safety and convenience at the forefront. By delivering these solutions, we strive to enhance women’s mobility while fostering confidence in every trip they take.",

    "In addition to transforming women’s travel, we are also passionate about supporting and celebrating creativity through short films and short series. By managing the production of the projects, we fuel the dreams of talented individuals and encourage women to embrace their adventurous spirit. Whether on the road or in the world of storytelling, we are committed to turning every journey into an empowering adventure that celebrates the strength, courage, and drive of women.",

    "Together, we are not just changing how women travel but also how they express their stories and passions. Through our initiatives, we aim to inspire women everywhere to pursue their ambitions and celebrate the power within them.",
  ];

  return (
    <>
      <HeroSec />
      <AboutSec paragraphData={paragraphData} />
      <Participate />
      <CreativePotential />
      <FilmMakingHeights />
    </>
  );
}

// Hero Section
function HeroSec() {
  return (
    <div className=" font-News bg-black text-white flex flex-col lg:flex-row w-full lg:h-[100vh] justify-evenly items-center gap-8 px-6 pt-5">
      {/* Content Section */}
      <div className="lg:w-[40%] flex flex-col gap-5 text-center lg:text-start">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Welcome to our Video Competition!
        </h2>
        <p className="text-xl lg:text-2xl">
          Unleash your creativity and showcase your talent in our exciting video
          competition! Compete against talented creators from around the world
          for a chance to win amazing prizes and recognition.
        </p>
        <div className="flex justify-center lg:justify-start">
          <NewBtn title="Submit Your Video" />
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-[40%] flex justify-center">
        <img
          src="/thanos.png"
          alt="Video Competition"
          className="w-full lg:w-[80%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

// About Section
function AboutSec({ paragraphData }) {
  return (
    <div className="bg-white text-black py-16">
      <h1 className="text-2xl lg:text-5xl font-bold text-center">About Us</h1>
      {paragraphData.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-lg lg:text-xl text-justify lg:text-center px-6 lg:px-20"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

// Participate Section
function Participate() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-6 py-16 bg-black text-white">
      {/* Content Section (Left on large screens) */}
      <div className="lg:w-[60%]  flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Discover the Benefits of Participating
        </h1>
        <p className="text-lg lg:text-xl ">
          Our video competition offers a unique platform for aspiring
          filmmakers, videographers, and storytellers to showcase their skills
          and creativity. With attractive prizes, exposure to industry experts,
          and the opportunity to be part of a vibrant community, this
          competition is the perfect launchpad for your artistic endeavors.
        </p>
        <div className="flex justify-center lg:justify-start">
          <NewBtn title="Submit Your Video" />
        </div>
      </div>
      {/* Image Section (Appears on top in mobile, right on large screens) */}
      <div className="lg:w-[30%]  items-center flex justify-center ">
        <img
          src="/sweaterpilla.png"
          alt="Competition Visual"
          className="object-contain rounded-lg shadow-lg lg:h-[500px]"
        />
      </div>
    </div>
  );
}

function CreativePotential() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 px-6">
      {/* Left Section: Content */}
      <div className="w-full lg:w-[48%] flex flex-col gap-6">
        <h3 className="text-3xl lg:text-5xl font-bold">
          Unlock Your Creative Potential
        </h3>
        <p className="text-xl text-gray-600">
          Participating in our video competition is an exciting journey that not
          only allows you to showcase your talent but also provides you with
          invaluable opportunities for growth and recognition.
        </p>

        {/* Small Boxes */}
        <div className="flex flex-col lg:flex-row gap-6">
          <SmallBox
            image="/arrow.png"
            text="Our panel of esteemed judges will carefully evaluate each submission, looking for exceptional storytelling, technical mastery, and the ability to captivate the audience."
            bg="white"
            textColor="black" // Text color for this instance
          />
          <SmallBox
            image="/ladyicon.png"
            text="Our panel of esteemed judges will carefully evaluate each submission, looking for exceptional storytelling, technical mastery, and the ability to captivate the audience."
            bg="gray-100"
            textColor="black" // Text color for this instance
          />
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-[48%] flex items-end justify-end mt-8 lg:mt-0">
        <img
          src="/twoladies.png"
          alt="Two Ladies"
          className="w-full lg:w-[80%] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

function FilmMakingHeights() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 px-6 py-8 bg-black text-white">
      {/* Left Section: Content */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        <div className="text-center lg:text-start">
          <h3 className="text-3xl lg:text-5xl font-bold">
            Unlock Your Creative Potential
          </h3>
          <p className="text-xl">
            Participating in our video competition is an exciting journey that
            not only allows you to showcase your talent but also provides you
            with invaluable opportunities for growth and recognition.
          </p>
        </div>

        {/* Small Boxes */}
        <div className="flex flex-col lg:flex-row gap-4">
          <SmallBox
            image="/arrow.png"
            text="Our panel of esteemed judges will carefully evaluate each submission, looking for exceptional storytelling, technical mastery, and the ability to captivate the audience."
            bg="gray-800"
            textColor="white" // Text color for this instance
          />
          <SmallBox
            image="/ladyicon.png"
            text="Our panel of esteemed judges will carefully evaluate each submission, looking for exceptional storytelling, technical mastery, and the ability to captivate the audience."
            bg="gray-900"
            textColor="white" // Text color for this instance
          />
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-[50%] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
        <img
          src="/globe.png"
          alt="Globe"
          className="w-full lg:w-[80%] lg:h-[90%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

// Small Box Component
function SmallBox({ image, text, bg, textColor }) {
  return (
    <div
      className={`flex-1 p-6 bg-${bg} border border-gray-700 rounded-lg shadow-md`}
    >
      <img
        src={image}
        alt="Icon"
        className="w-12 h-12 mb-4 mx-auto" // Centered and scaled icon
      />
      <p
        className={`text-sm ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
