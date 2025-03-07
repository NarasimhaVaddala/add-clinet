import { Link, useNavigate, useNavigation } from "react-router-dom";
import Counter from "../../../utils/Counter";
import Carousel from "../../../utils/Carousel";
import NewBtn from "../../../utils/NewBtn";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../auth/redux/profileSlice";
import ImageGallery from "../components/ImageGallery";
import CardBlack from "../../../utils/CardBlack";

const HomeScreen = () => {
  const dispatch = useDispatch();

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

  const navigate = useNavigate();

  const handleNavigateRegistration = () => {
    navigate("/register");
  };

  const fethcProfile = () => {
    const storedToken = localStorage.getItem("token") || null;

    if (storedToken) {
      dispatch(fetchUserProfile());
    }
  };

  useEffect(() => {
    fethcProfile();
  }, [dispatch]);

  return (
    <div className="w-full text-news">
      <VideoContainer handleNavigateRegistration={handleNavigateRegistration} />
      <WelcomeContainer images={images} />
      <LegacyContainer
        handleNavigateRegistration={handleNavigateRegistration}
      />
      <ImageGallery />
      <WinnerBoxSection />
      <MainContent handleNavigateRegistration={handleNavigateRegistration} />
      <HeroSection handleNavigateRegistration={handleNavigateRegistration} />
      <SubmitVideo handleNavigateRegistration={handleNavigateRegistration} />
    </div>
  );
};
function VideoContainer({ handleNavigateRegistration }) {
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
          onClick={handleNavigateRegistration}
          title="Register Now"
          customStyl="w-full lg:w-auto lg:max-w-none mt-4"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
function WelcomeContainer({ images, handleNavigateRegistration }) {
  //relative bottom-10 if you want up

  return (
    <div className="bg-black w-full">
      <div className="w-full bg-gradient-to-b from-white/30 via-black/70 to-black   p-10 text-white container">
        <h3 className="text-xl  font-bold font-News lg:text-3xl my-4">
          Welcome to
        </h3>
        <h3 className="text-3xl font-bold font-News lg:text-5xl my-1">
          most exciting Women Rider Ad Competition <br />
          celebrating fearless female riders showcasing their passion,
          skill, and spirit!
        </h3>

        {/* <div className="flex items-center justify-between mt-10 group">
          <h3 className="text-3xl font-bold font-News lg:text-5xl">
            Award Winning Films
          </h3>

          <Link className="flex gap-4 items-center">
            See All
            <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-2"></i>
          </Link>
        </div> */}

        {/* Responsive Carousel */}
        <div className="w-full mb-10">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}

function LegacyContainer({ handleNavigateRegistration }) {
  return (
    <div className="bg-white container flex flex-col lg:flex-row  items-center justify-evenly w-full mt-4 gap-4">
      <div
        data-aos="fade-up"
        className="w-full lg:w-[30%] bg-black flex p-4 rounded-lg justify-center text-white flex-col"
      >
        <h2 className="text-center text-4xl font-bold text-[#EA4C89]">
          Prizes
        </h2>

        <div>
          <h2 className="font-bold text-3xl">1st Prize</h2>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl text-[#EA4C89]">₹ 20,000 +</h2>
            <p className="text-xl">We will produce one web series</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl">2nd Prize</h2>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl text-[#EA4C89]">₹ 10,000 +</h2>
            <p className="text-xl">We will produce one short series</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl">3rd Prize</h2>
          <div className="flex items-center gap-2">
            {/* <h2 className="font-bold text-xl text-[#EA4C89]">₹ 0 +</h2> */}
            <p className="text-xl">We will produce one short film</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:w-[40%]">
        <h3 className="text-3xl lg:text-5xl font-News font-bold">
          Concept for Ad Competition
        </h3>
        <p className="lg:text-xl font-News">
          The Women Rider app is designed to empower women with a safer, more
          independent travel experience. Tailored exclusively for women, this
          app ensures privacy, convenience, and peace of mind by providing a
          secure platform for ridesharing.
        </p>
        <p className="lg:text-xl font-News">
          Safety is our top priority, with features like an SOS button,
          ride-sharing options, verified passenger and driver profiles, and a
          secure "Wor Pin" for each ride, which ensures added protection for
          every trip. Women Rider offers not only a mode of transportation but a
          community where women can travel confidently, knowing that their
          security is paramount.
        </p>
        <p className="lg:text-xl font-News">
          With these features, the Women Rider app redefines the travel
          experience by creating a supportive, safe, and empowering environment
          where women can move freely and independently.
        </p>
        {/* 
        <div className="flex lg:gap-10 justify-between lg:justify-normal">
          <Counter title={"Short film Entries"} upto={10000} duration={4000} />
          <Counter title={"Countries"} upto={150} duration={1000} />
          <Counter title={"Festivals"} upto={120} duration={1000} />
        </div> */}
      </div>
    </div>
  );
}

function PricesGalore({ handleNavigateRegistration, handleNavigateAbout }) {
  return (
    <div className="container mt-5">
      <div className="head-text flex justify-between items-center flex-col lg:flex-row">
        <h1 className="lg:text-5xl text-3xl font-bold">Prizes Galore</h1>

        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto">
          <NewBtn
            onClick={handleNavigateRegistration}
            title="Submit your video now"
            customStyl="border-black w-full lg:w-auto mt-4 lg:mt-auto  bg-black"
          />
          <NewBtn
            onClick={handleNavigateAbout}
            title="Learn More"
            customStyl="border-black w-full lg:w-auto mt-4 lg:mt-auto  bg-black"
          />
        </div>
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
              "Immerse yourself in our dynamic AD competition and unlock a world of opportunities. Compete against the best, showcase your talent, and win amazing prizes that will take your filmmaking journey to new heights.",
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
              "Explore the diverse array of AD competition categories, each designed to challenge and showcase your unique creative vision.",
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
  // {
  //   title: "Winners Announcement",
  //   description:
  //     "The winners of the competition will be announced on March 20th. Stay tuned as we reveal the talented individuals who will walk away with exciting prizes, including cash and production support. We are thrilled to celebrate the creativity and passion of all the participants and can’t wait to honor the deserving winners!",
  //   buttonText: "See Winners",
  //   image: "home-left-img-1.png",
  //   reverse: false,
  // },
  {
    title: "Unleash Your Passion",
    description:
      "Capture your passion and transform it into a masterpiece. Let every frame reflect the depth of your creativity and dedication. This is your opportunity to showcase your unique perspective and share your love for what you do. Whether it’s through storytelling, visuals, or emotions, make every moment count. Let your passion drive you to new heights and inspire others along the way. Now is the time to turn your dreams into reality and make your mark!",
    image: "home-left-img-2.png",
    reverse: true,
  },
  {
    title: "Disover the Categories",
    description:
      "Explore the Categories and find the perfect platform to showcase your talent. Whether you're a filmmaker, photographer, or content creator, each category offers unique opportunities to highlight your skills. Dive into the diverse categories, choose your passion, and take your creativity to the next level. It’s your chance to shine and make an impact in your field!",
    buttonText: "Enter Now",
    image: "home-left-img-3.png",
    reverse: false,
  },
];

function MainContent({ handleNavigateRegistration }) {
  return (
    <div className="my-5">
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
              {/* <button className="mt-4 px-8 py-2 text-sm font-medium border border-black rounded-full hover:bg-gray-200 transition-colors">
                {container.buttonText}
              </button> */}
            </div>
          )}
          <div className="image-container w-full md:w-1/2 p-5">
            <img src={container.image} alt="" className="w-full rounded-lg" />
          </div>
          {container.reverse && (
            <div className="container-text w-full md:w-1/2 p-5">
              <h2 className="text-2xl font-bold">{container.title}</h2>
              <p className="text-gray-600 mt-2">{container.description}</p>
              {/* <button className="mt-4 px-8 py-2 text-sm font-medium border border-black rounded-full hover:bg-gray-200 transition-colors">
                {container.buttonText}
              </button> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function HeroSection({ handleNavigateRegistration }) {
  return (
    <div className="hero-section my-10 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">About the Competition</h1>
        <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
          The Women Rider Video Competition honors the power and passion of
          female riders. Share your riding journey and showcase your skills for
          a chance to be recognized!
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

function SubmitVideo({ handleNavigateRegistration }) {
  return (
    <div className=" bg-pink-100 flex flex-wrap justify-center items-center p-10">
      <div className="text-center lg:text-start w-full md:w-1/2 p-5">
        <p className="text-lg font-semibold text-gray-600">Get Started</p>
        <h1 className="text-3xl font-bold mt-2">
          Embrace Your Creative Journey
        </h1>
        <p className="text-gray-600 mt-4">
          Unlock your creative potential and let your imagination soar. This is
          the moment to break free from limitations and explore new ideas,
          perspectives, and possibilities. Embrace the process of growth and
          discovery, and let your passion drive you to create something
          extraordinary. With dedication and focus, there are no boundaries to
          what you can achieve—unlock your full potential and let your
          creativity shine!
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

// function ImageGallery() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-8">
//       {/* Existing Image Gallery Section */}
//       <h1 className="text-5xl text-center font-bold mb-8">
//         Cherishing the heart and craft of cinema
//       </h1>
//       <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4">
//         <div className="flex flex-col justify-between gap-8 w-full md:w-[30%]">
//           <img
//             src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
//             alt="Cinema Image 1"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//           <img
//             src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
//             alt="Cinema Image 2"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full md:w-[70%]">
//           <img
//             src="https://dpiff.in/wp-content/uploads/2024/11/cherish3.jpg"
//             alt="Cinema Image 3"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>

//       {/* New Section: Image on Left and Paragraph on Right */}
//       <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4 mt-12">
//         <div className="w-full md:w-[50%]">
//           <img
//             src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
//             alt="Cinema Image 4"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full md:w-[50%] flex flex-col items-center">
//           <p className="text-3xl font-semibold text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur.
//           </p>

//           <Link to="/about" className="w-full mt-4 flex gap-4 items-center">
//             See All
//             <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-2"></i>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

function WinnerBoxSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center font-bold">
        Standards Of Excellence
      </h1>

      <p>
        All submissions must meet the following criteria to be considered for
        selection:
      </p>

      <view className="flex w-[90%] mt-10 justify-between">
        <CardBlack />
        <CardBlack />
        <CardBlack />
      </view>
    </div>
  );
}

export default HomeScreen;
