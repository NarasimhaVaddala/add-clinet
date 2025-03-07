import NewBtn from "../../../../../utils/NewBtn";
import SectionHeading from "../../../../../utils/SectionHeading";

export default function Participate({ handleNavigateRegister }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-6 py-16 bg-black text-white">
      {/* Content Section (Left on large screens) */}
      <div className="lg:w-[60%]  flex flex-col gap-6 text-center lg:text-left">
        <SectionHeading txt="Discover the Benefits of Participating" />
        <p className="text-lg lg:text-xl text-justify">
          Participating in a competition provides valuable benefits, such as
          improving your skills in creativity, teamwork, and
          competition-specific knowledge. It also offers networking
          opportunities to connect with fellow competitors. Additionally, you
          have the chance to earn awards or prizes for your efforts. Competing
          boosts your confidence as you push yourself outside your comfort zone,
          and it fosters personal growth by helping you learn to overcome
          challenges and handle both success and failure.
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
