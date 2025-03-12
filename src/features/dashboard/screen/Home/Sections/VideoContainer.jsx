import NewBtn from "../../../../../utils/NewBtn";

export function VideoContainer({ handleNavigateRegistration }) {
  const handleNavYoutube = () => {
    window.location.href = "https://www.youtube.com/@zenmedia-hub";
  };
  return (
    <div className="w-full text-white p-4 relative" id="hero-container">
      {/* Inner container with absolute positioning */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col lg:flex-row justify-between items-center px-4 w-full">
        {/* Left section: Heading and description */}
        <div className="text-center lg:text-start">
          <h1 className="text-2xl lg:text-5xl font-bold">
            Showcase Your Talent. Win Big
          </h1>
          <p className="mt-2">
            Submit your best video & compete for exciting prizes! Time is
            running out
          </p>
        </div>

        {/* Right section: Button */}
        {/* <div className="mt-4 lg:mt-0 lg:ml-4 w-full"> */}
        <NewBtn
          onClick={handleNavYoutube}
          title="Register Now"
          customStyl="w-full lg:w-auto lg:max-w-none mt-4"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
