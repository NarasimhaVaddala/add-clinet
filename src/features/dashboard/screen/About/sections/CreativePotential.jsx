import SectionHeading from "../../../../../utils/SectionHeading";
import SmallBox from "../components/SmallBox";

export default function CreativePotential() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 px-6">
      {/* Left Section: Content */}
      <div className="w-full lg:w-[48%] flex flex-col gap-6">
        <SectionHeading txt="Unleash Your Creative Vision" />
        <p className="text-xl text-gray-600 text-justify lg:text-start">
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
