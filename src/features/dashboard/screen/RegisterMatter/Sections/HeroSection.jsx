import NewBtn from "../../../../../utils/NewBtn";

export default function HeroSection({ handlePay }) {
  return (
    <section
      id="hero-container-register"
      className="relative bg-cover bg-center h-[50vh] text-white"
    >
      <div className="absolute bottom-4 px-4 py-4">
        <h2 className="text-2xl lg:text-5xl font-bold">
          Video Competition 2025
        </h2>
        <p className="lg:text-xl mb-4">
          Congratulations! You're one step closer to showcasing your Film making
          skills. Please read the competition guidelines carefully before
          registering.
        </p>

        <NewBtn
          title="Submit Here"
          customStyl="w-full lg:w-auto"
          onClick={handlePay}
        />
      </div>
    </section>
  );
}
