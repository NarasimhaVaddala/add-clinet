import SectionHeading from "../../../../../utils/SectionHeading";

export default function VisionSection() {
  const containers = [
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
              <SectionHeading txt={container.title} />
              <p className="text-gray-600 mt-2 text-justify">
                {container.description}
              </p>
            </div>
          )}
          <div className="image-container w-full md:w-1/2 p-5">
            <img src={container.image} alt="" className="w-full rounded-lg" />
          </div>
          {container.reverse && (
            <div className="container-text w-full md:w-1/2 p-5">
              <SectionHeading txt={container.title} />
              <p className="text-gray-600 mt-2 text-justify">
                {container.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// function PricesGalore({ handleNavigateRegistration, handleNavigateAbout }) {
//   return (
//     <div className="container mt-5">
//       <div className="head-text flex justify-between items-center flex-col lg:flex-row">
//         <h1 className="lg:text-5xl text-3xl font-bold">Prizes Galore</h1>

//         <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto">
//           <NewBtn
//             onClick={handleNavigateRegistration}
//             title="Submit your video now"
//             customStyl="border-black w-full lg:w-auto mt-4 lg:mt-auto  bg-black"
//           />
//           <NewBtn
//             onClick={handleNavigateAbout}
//             title="Learn More"
//             customStyl="border-black w-full lg:w-auto mt-4 lg:mt-auto  bg-black"
//           />
//         </div>
//       </div>
//       <div
//         className="icons-boxs grid grid-cols-1
//        lg:grid-cols-3 gap-6 mt-10"
//       >
//         {[
//           {
//             icon: "fa-brands fa-telegram",
//             title: "Elevate Your Craft",
//             description:
//               "Immerse yourself in our dynamic AD competition and unlock a world of opportunities. Compete against the best, showcase your talent, and win amazing prizes that will take your filmmaking journey to new heights.",
//           },
//           {
//             icon: "fa-brands fa-telegram",
//             title: "Community Support",
//             description:
//               "Connect with like-minded creators, receive valuable feedback, and be inspired by the talented participants in our video competition.",
//           },
//           {
//             icon: "fa-brands fa-telegram",
//             title: "Get Inspired",
//             description:
//               "Explore the diverse array of AD competition categories, each designed to challenge and showcase your unique creative vision.",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="icon-box flex flex-col items-center text-center"
//           >
//             <i className={`${item.icon} text-4xl mb-4`}></i>
//             <div className="icon-text">
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
