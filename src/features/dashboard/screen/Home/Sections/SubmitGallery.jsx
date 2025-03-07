import NewBtn from "../../../../../utils/NewBtn";
import SectionHeading from "../../../../../utils/SectionHeading";

export default function SubmitVideo({ handleNavigateRegistration }) {
  return (
    <div className=" bg-pink-100 flex flex-wrap justify-center items-center p-10">
      <div className="text-center lg:text-start w-full md:w-1/2 p-5">
        <p className="text-lg font-semibold text-gray-600">Get Started</p>
        {/* <h1 className="text-3xl font-bold mt-2">
          
        </h1> */}
        <SectionHeading txt="Embrace Your Creative Journey" />
        <p className="text-gray-600 mt-4">
          Unlock your creative potential and let your imagination soar. This is
          the moment to break free from limitations and explore new ideas,
          perspectives, and possibilities. Embrace the process of growth and
          discovery, and let your passion drive you to create something
          extraordinary. With dedication and focus, there are no boundaries to
          what you can achieve—unlock your full potential and let your
          creativity shine!
        </p>
        {/* <button className="mt-6 px-8 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
            Submit your video now
          </button> */}

        <NewBtn
          onClick={handleNavigateRegistration}
          title="Submit your video now"
          customStyl="border-black w-full lg:w-auto mt-4 lg:mt-auto  bg-black"
        />
      </div>
      <div className="submit-image w-full md:w-1/2 p-5">
        <img src="home-last.img.png" alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
}
