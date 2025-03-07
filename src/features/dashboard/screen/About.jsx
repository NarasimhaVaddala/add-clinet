import React from "react";
import NewBtn from "../../../utils/NewBtn";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const paragraphData = [
    "On a MISSION to create a meaningful impact with Zen Media!",
    "At Zen Media, our mission is to provide transformative content that empowers and enlightens our community. We are committed to sharing insightful and thoughtful discussions on a range of topics that foster personal growth, creativity, and mindfulness. Through our platform, we explore wellness, intentional living, and the pursuit of balance in a world that often moves too quickly. By engaging with Zen Media, our audience gains access to valuable knowledge and practices that promote inner peace, clarity, and purpose in daily life.",

    "We believe that true growth happens when we actively listen, reflect, and take action in alignment with our values. To deepen the impact of our content, I will feature guests from diverse backgrounds, bringing fresh perspectives and expertise on subjects that are relevant to your journey.",

    "Zen Media is committed to being your go-to source of inspiration, offering wisdom, practical advice, and motivational stories to guide you towards a fulfilling and balanced life. Our goal is to help you create lasting change, build resilience, and live with intention. Through this platform, we hope to ignite your passion and provide you with the tools to thrive—mindfully, creatively, and purposefully.",
  ];

  return (
    <>
      <HeroSec handleNavigateRegister={handleNavigateRegister} />
      <AboutSec
        paragraphData={paragraphData}
        handleNavigateRegister={handleNavigateRegister}
      />
      <Participate handleNavigateRegister={handleNavigateRegister} />
      <CreativePotential handleNavigateRegister={handleNavigateRegister} />
      <FilmMakingHeights handleNavigateRegister={handleNavigateRegister} />
    </>
  );
}

// Hero Section
function HeroSec({ handleNavigateRegister }) {
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
          <NewBtn
            title="Submit Your Video"
            customStyl="w-full lg:w-auto"
            onClick={handleNavigateRegister}
          />
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
function Participate({ handleNavigateRegister }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-6 py-16 bg-black text-white">
      {/* Content Section (Left on large screens) */}
      <div className="lg:w-[60%]  flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Discover the Benefits of Participating
        </h1>
        <p className="text-lg lg:text-xl ">
          Participating in a competition provides valuable benefits, such as
          improving your skills in creativity, teamwork, and
          competition-specific knowledge. It also offers networking
          opportunities to connect with fellow competitors. Additionally, you
          have the chance to earn awards or prizes for your efforts. Competing
          boosts your confidence as you push yourself outside your comfort zone,
          and it fosters personal growth by helping you learn to overcome
          challenges and handle both success and failure.
        </p>
        <div className="flex justify-center lg:justify-start">
          <NewBtn title="Submit Your Video" onClick={handleNavigateRegister} />
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

function CreativePotential({ handleNavigateRegister }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 px-6">
      {/* Left Section: Content */}
      <div className="w-full lg:w-[48%] flex flex-col gap-6">
        <h3 className="text-3xl lg:text-5xl font-bold">
          Unleash Your Creative Vision
        </h3>
        <p className="text-xl text-gray-600">
          Entering our video competition is more than just a chance to display
          your skills—it's an opportunity to grow, gain recognition, and push
          the boundaries of your creativity.
        </p>

        {/* Small Boxes */}
        <div className="flex flex-col lg:flex-row gap-6">
          <SmallBox
            image="/arrow.png"
            text="Our expert judging panel will assess each submission based on unique storytelling, technical expertise, and the ability to engage and captivate the audience."
            bg="white"
            textColor="black" // Text color for this instance
          />
          <SmallBox
            image="/ladyicon.png"
            text="The judges will focus on how effectively your video communicates the message, the quality of your execution, and how memorable your creation is to the viewers."
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
            Unlocking your creative potential in an ad competition means
            embracing fresh ideas and stepping outside conventional thinking.
            View the challenge as an opportunity to innovate, not just complete
            a task. Creativity thrives when you're free to take risks, make
            mistakes, and learn from them. This mindset helps you connect with
            your audience in new ways, leading to unique and effective
            advertising concepts.
          </p>
        </div>

        {/* Small Boxes */}
        <div className="flex flex-col lg:flex-row gap-4">
          <SmallBox
            image="/arrow.png"
            text="Nurturing curiosity helps unlock creativity in an ad competition by exploring trends and drawing inspiration from diverse sources. A curious mindset leads to fresh ideas that resonate with your audience and increase your chances of standing out."
            bg="gray-800"
            textColor="white" // Text color for this instance
          />
          <SmallBox
            image="/ladyicon.png"
            text="A creative routine helps produce impactful ads. Set time to brainstorm, sketch, and analyze campaigns. Practice refines creativity, leading to effective ideas. With focus, you can unlock your potential and stand out."
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
