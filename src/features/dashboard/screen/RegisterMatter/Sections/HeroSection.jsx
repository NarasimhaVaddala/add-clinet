import NewBtn from "../../../../../utils/NewBtn";
import SectionHeading from "../../../../../utils/SectionHeading";

export default function HeroSection({ handlePay }) {
  return (
    <section
      id="hero-container-register"
      className="relative bg-cover bg-center h-[50vh] text-white"
    >
      <div className="absolute bottom-4 px-4 py-4">
        <SectionHeading txt="Video Competition 2025" />
        <p className="lg:text-xl mb-4">
          Congratulations! You're one step closer to showcasing your Film making
          skills. Please read the competition guidelines carefully before
          registering.
        </p>

        <NewBtn
          title="Register Now"
          customStyl="w-full lg:w-auto"
          onClick={handlePay}
        />
      </div>
    </section>
  );
}
