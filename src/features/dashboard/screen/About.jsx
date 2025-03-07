import React from "react";
import NewBtn from "../../../utils/NewBtn";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const paragraphData = [
    "At Zen Media, storytelling is more than just an art—it’s a transformative force that connects, inspires, and leaves a lasting impact. We believe that every idea carries the power to spark emotions, every vision has the potential to shape perspectives, and every story deserves to be told with authenticity and passion.",

    "At Zen Media, our mission is to provide transformative content that empowers and enlightens our community. We are committed to sharing insightful and thoughtful discussions on a range of topics that foster personal growth, creativity, and mindfulness. Through our platform, we explore wellness, intentional living, and the pursuit of balance in a world that often moves too quickly. By engaging with Zen Media, our audience gains access to valuable knowledge and practices that promote inner peace, clarity, and purpose in daily life.",

    "Driven by creativity and fueled by innovation, we go beyond conventional storytelling. We don’t just capture moments—we craft immersive experiences that resonate, challenge, and inspire. Whether through films, documentaries, digital media, or advertising, our mission is to create content that not only entertains but also evokes deep emotions and meaningful conversations.",

    "We are more than content creators—we are storytellers, visionaries, and artists committed to redefining the way narratives are told. Every project we undertake is a pursuit of excellence, where every frame, every word, and every sound is meticulously curated to leave an unforgettable mark.",

    "At Zen Media, we stand for originality, integrity, and the relentless pursuit of perfection. Our work is not just about what people see and hear; it’s about what they feel, remember, and carry forward. Because great stories don’t just exist—they ignite, empower, and conquer.",
  ];

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
      <AboutSec
        paragraphData={paragraphData}
        handleNavigateRegister={handleNavigateRegister}
      />
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

// Hero Section
function HeroSec({ handleNavigateRegister }) {
  return (
    <div className=" font-News bg-black text-white flex flex-col lg:flex-row w-full lg:h-[100vh] justify-evenly items-center gap-8 px-6 pt-5">
      {/* Content Section */}
      <div className="lg:w-[40%] flex flex-col gap-5 text-center lg:text-start">
        <h2 className="text-3xl lg:text-5xl font-bold">Zen Media</h2>
        <p className="text-xl lg:text-2xl">Create. Inspire. Conquer.</p>
        <div className="flex justify-center lg:justify-start">
          <NewBtn
            title="Subscribe to our Channel"
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
    <div className="bg-white text-black py-16 lg:w-[80%] mx-auto">
      <h1 className="text-2xl lg:text-5xl font-bold text-center">About Us</h1>
      {paragraphData.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-lg lg:text-xl text-justify  px-6 lg:px-20"
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

function MissionVision({ title, mainText, list, index }) {
  return (
    <div className="bg-black w-full flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-[90%] gap-8">
        {/* Alternate order based on index */}
        {index % 2 === 0 ? (
          <>
            {/* Left Section (Original Order) */}
            <div className="flex-1 bg-[rgba(224,46,136,0.8)] rounded-2xl p-4 md:p-8">
              <h1 className="text-3xl text-white font-bold mb-4 md:mb-6">
                {title}
              </h1>
              <p className="text-white">{mainText}</p>
              <div className="bg-white/90 text-black rounded-2xl p-4 md:p-6 mt-4">
                {list.map((item, idx) => (
                  <ListItem key={idx} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src="https://dpiff.in/wp-content/uploads/2024/11/Rectangle-96.png"
                alt="Mission Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ) : (
          <>
            {/* Reversed Order */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src="https://dpiff.in/wp-content/uploads/2024/11/Rectangle-96.png"
                alt="Mission Visual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 bg-[rgba(224,46,136,0.8)] rounded-2xl p-4 md:p-8">
              <h1 className="text-3xl text-white font-bold mb-4 md:mb-6">
                {title}
              </h1>
              <p className="text-white">{mainText}</p>
              <div className="bg-white/90 text-black rounded-2xl p-4 md:p-6 mt-4">
                {list.map((item, idx) => (
                  <ListItem key={idx} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ListItem({ title, text }) {
  return (
    <div className="flex  gap-2">
      {/* <div className="w-[10px] h-[10px] bg-[#000] rounded-full" /> */}
      <i class="fa-solid fa-circle mt-2.5 fa-2xs"></i>

      <div>
        <span className="font-bold">{title}</span>
        <span className="text-gray-700">{text}</span>
      </div>
    </div>
  );
}
