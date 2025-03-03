import { Link } from "react-router-dom";
import Counter from "../../../utils/Counter";
import Carousel from "../../../utils/Carousel";

// import { useHomeScreenHook } from "../hooks/HomeScreenHook";
// import CheckPaymentStatusModal from "../Modals/CheckPaymentStatusModal";

const HomeScreen = () => {
  const images = [
    "https://images.unsplash.com/photo-1740680209886-c461a9c692f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740121933286-4340a63c4f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1734155859178-840154a6c11d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673288397421-e70040ea0f20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740680209886-c461a9c692f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740121933286-4340a63c4f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1734155859178-840154a6c11d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673288397421-e70040ea0f20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // const { userProfile, isDisplayModal } = useHomeScreenHook();

  return (
    <div className="w-full text-news">
      {/* {isDisplayModal && <CheckPaymentStatusModal width="50%" height="50%" />} */}

      <VideoContainer />
      <WelcomeContainer images={images} />
      <LegacyContainer />
      <PricesGalore />
      <MainContent />
      <HeroSection />
      <SubmitVideo />
    </div>
  );
};

function VideoContainer() {
  return <div className="hero w-full" id="hero-container"></div>;
}

function WelcomeContainer({ images }) {
  return (
    <div className="bg-black w-full">
      <div className="w-full bg-gradient-to-b from-white/30 via-black/70 to-black lg:h-[100vh] relative bottom-10 p-10 text-white container">
        <h3 className="text-xl  font-bold font-News lg:text-3xl my-4">
          Welcome to
        </h3>
        <h3 className="text-3xl font-bold font-News lg:text-5xl my-1">
          India's Most Prestigious <br />
          Dadasaheb Phalke International Film Festival
        </h3>

        <div className="flex items-center justify-between mt-10 group">
          <h3 className="text-3xl font-bold font-News lg:text-5xl">
            Award Winning Films
          </h3>

          <Link className="flex gap-4 items-center">
            See All
            <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-2"></i>
          </Link>
        </div>

        {/* Responsive Carousel */}
        <div className="w-full mb-10">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}

function LegacyContainer() {
  return (
    <div className="bg-white container flex flex-col lg:flex-row  items-center justify-center w-full mt-4">
      <div data-aos="fade-up" className="lg:w-[30%]">
        <img src="/Container.png" alt="" />
      </div>

      <div className="flex flex-col gap-5 lg:w-[40%]">
        <h3 className="text-3xl lg:text-5xl font-News font-bold">
          Honoring a legacy, Celebrating the future
        </h3>
        <p className="lg:text-xl font-News">
          Each year, DPIFF brings untold stories and visionary projects into the
          spotlight, connecting them with audiences hungry for new perspectives.
          It is more than just a festival—it’s a celebration of cinema’s power
          to inspire, transform, and shape the future.
        </p>
        <p className="lg:text-xl font-News">
          Named after a stalwart known as the father of Indian cinema, Dadasaheb
          Phalke International Film Festival (DPIFF), was founded in 2012.
          Carrying forward the illustrious legacy of Late Shri Dhundiraj Govind
          Phalke, today it stands as India’s only independent international film
          festival.
        </p>

        <div className="flex lg:gap-10 justify-between lg:justify-normal">
          <Counter title={"Short film Entries"} upto={10000} duration={4000} />
          <Counter title={"Countries"} upto={150} duration={1000} />
          <Counter title={"Festivals"} upto={120} duration={1000} />
        </div>
      </div>
    </div>
  );
}

function PricesGalore() {
  return (
    <div className="container mt-5">
      <div className="head-text flex justify-between items-center">
        <h1 className="lg:text-5xl text-3xl font-bold">Prizes Galore</h1>
        <button className="px-10 py-2 text-sm font-medium border border-black rounded-full hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
      <div
        className="icons-boxs grid grid-cols-1
       lg:grid-cols-3 gap-6 mt-10"
      >
        {[
          {
            icon: "fa-brands fa-telegram",
            title: "Elevate Your Craft",
            description:
              "Immerse yourself in our dynamic video competition and unlock a world of opportunities. Compete against the best, showcase your talent, and win amazing prizes that will take your filmmaking journey to new heights.",
          },
          {
            icon: "fa-brands fa-telegram",
            title: "Community Support",
            description:
              "Connect with like-minded creators, receive valuable feedback, and be inspired by the talented participants in our video competition.",
          },
          {
            icon: "fa-brands fa-telegram",
            title: "Get Inspired",
            description:
              "Explore the diverse array of video competition categories, each designed to challenge and showcase your unique creative vision.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="icon-box flex flex-col items-center text-center"
          >
            <i className={`${item.icon} text-4xl mb-4`}></i>
            <div className="icon-text">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containers = [
  {
    title: "Winners Announced",
    description:
      "Congratulations to our video competition winners! Your exceptional talent and storytelling have earned you well-deserved recognition and amazing prizes.",
    buttonText: "See Winners",
    image: "home-left-img-1.png",
    reverse: false,
  },
  {
    title: "Capture Your Passion",
    description:
      "Join the Challenge Discover the thrill of our video competition and the rewards that await. Whether you're a seasoned filmmaker or a rising talent, this is your chance to sh..",
    buttonText: "Learn More",
    image: "home-left-img-2.png",
    reverse: true,
  },
  {
    title: "Explore Categories",
    description:
      "Submit Entry Unleash your cinematic vision and compete against the best in our video competition. From drama to comedy, documentary to animation, there's a category for every..",
    buttonText: "Enter Now",
    image: "home-left-img-3.png",
    reverse: false,
  },
];

function MainContent() {
  return (
    <div className="container my-5">
      {containers.map((container, index) => (
        <div
          key={index}
          className={`container${
            index + 1
          } bg-gray-100 flex flex-wrap justify-between items-center p-5 rounded-lg ${
            index > 0 ? "mt-5" : ""
          }`}
        >
          {!container.reverse && (
            <div className="container-text w-full md:w-1/2 p-5">
              <h2 className="text-2xl font-bold">{container.title}</h2>
              <p className="text-gray-600 mt-2">{container.description}</p>
              <button className="mt-4 px-8 py-2 text-sm font-medium border border-black rounded-full hover:bg-gray-200 transition-colors">
                {container.buttonText}
              </button>
            </div>
          )}
          <div className="image-container w-full md:w-1/2 p-5">
            <img src={container.image} alt="" className="w-full rounded-lg" />
          </div>
          {container.reverse && (
            <div className="container-text w-full md:w-1/2 p-5">
              <h2 className="text-2xl font-bold">{container.title}</h2>
              <p className="text-gray-600 mt-2">{container.description}</p>
              <button className="mt-4 px-8 py-2 text-sm font-medium border border-black rounded-full hover:bg-gray-200 transition-colors">
                {container.buttonText}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero-section my-10 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">About the Competition</h1>
        <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
          Explore our dynamic video competition, where filmmakers from around
          the world come together to push the boundaries of storytelling.
        </p>
      </div>

      {/* Image Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {["home-img-4.png", "home-left-img-5.png"].map((image, index) => (
          <div key={index} className="w-full md:w-[48%]">
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SubmitVideo() {
  return (
    <div className=" bg-pink-100 flex flex-wrap justify-center items-center p-10">
      <div className="text-center lg:text-start w-full md:w-1/2 p-5">
        <p className="text-sm font-medium text-gray-600">Get Started</p>
        <h1 className="text-3xl font-bold mt-2">
          Unlock Your <br /> Creative Potential
        </h1>
        <p className="text-gray-600 mt-4">
          Immerse yourself in our captivating video competition and let your
          cinematic vision soar. From narrative films to experimental shorts,
          this is your opportunity to share your unique perspective, connect
          with a passionate community, and win incredible prizes that will
          elevate your filmmaking journey.
        </p>
        <button className="mt-6 px-8 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
          Submit your video now
        </button>
      </div>
      <div className="submit-image w-full md:w-1/2 p-5">
        <img src="home-last.img.png" alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
}

export default HomeScreen;
