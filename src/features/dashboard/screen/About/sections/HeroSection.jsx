import NewBtn from "../../../../../utils/NewBtn";
import SectionHeading from "../../../../../utils/SectionHeading";

export default function HeroSec({ handleNavigateRegister }) {
  return (
    <div className=" font-News bg-black text-white flex flex-col lg:flex-row w-full lg:h-[100vh] justify-evenly items-center gap-8 px-6 pt-5">
      {/* Content Section */}
      <div className="lg:w-[40%] flex flex-col gap-5 text-center lg:text-start">
        {/* <h2 className="text-3xl lg:text-5xl font-bold">Zen Media</h2> */}
        <SectionHeading txt="Zen Media" />
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
          src="/logo.png"
          alt="Video Competition"
          className="w-full lg:w-[80%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
