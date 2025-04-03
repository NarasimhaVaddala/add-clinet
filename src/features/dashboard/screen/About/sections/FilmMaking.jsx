import SectionHeading from "../../../../../utils/SectionHeading";
import SmallBox from "../components/SmallBox";

export default function FilmMakingHeights() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 px-6 py-8 bg-white text-black">
      {/* Left Section: Content */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        <div className="text-center lg:text-start">
          <SectionHeading txt={"Unlock Your Creative Potential"} />
          <p className="text-xl text-justify">
            Unlocking your creative potential in an ad competition means
            embracing fresh ideas and stepping outside conventional thinking.
            View the challenge as an opportunity to innovate, not just complete
            a task. Creativity thrives when you're free to take risks, make
            mistakes, and learn from them. This mindset helps you connect with
            your audience in new ways, leading to unique and effective
            advertising concepts.
          </p>
        </div>

        {/* Small Boxes */}
        <div className="flex flex-col lg:flex-row gap-4">
          <SmallBox
            image="/arrow.png"
            text="Nurturing curiosity helps unlock creativity in an ad competition by exploring trends and drawing inspiration from diverse sources. A curious mindset leads to fresh ideas that resonate with your audience and increase your chances of standing out."
            bg="gray-800"
            textColor="black" // Text color for this instance
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
