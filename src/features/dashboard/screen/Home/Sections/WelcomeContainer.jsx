import { useNavigate } from "react-router-dom";
import Carousel from "../../../../../utils/Carousel";
import NewBtn from "../../../../../utils/NewBtn";

export default function WelcomeContainer({ handleNavigateRegistration }) {
  //relative bottom-10 if you want up

  // const images = [
  //   "https://images.unsplash.com/photo-1740680209886-c461a9c692f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1740121933286-4340a63c4f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://plus.unsplash.com/premium_photo-1734155859178-840154a6c11d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://plus.unsplash.com/premium_photo-1673288397421-e70040ea0f20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1740680209886-c461a9c692f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1740121933286-4340a63c4f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://plus.unsplash.com/premium_photo-1734155859178-840154a6c11d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://plus.unsplash.com/premium_photo-1673288397421-e70040ea0f20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];

  const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-black w-full" style={{ width: "100vw " }}>
      <div
        className="bg-gradient-to-b  from-white/30 via-black/70 to-black p-10 text-white "
        style={{ width: "100vw" }}
      >
        <h3 className="text-xl  font-bold font-News lg:text-3xl my-4">
          What Next <i className="fa-solid fa-arrow-right text-xl "></i>
        </h3>
        <h3 className="text-3xl font-bold font-News lg:text-5xl my-1">
          Now, most exciting Women Rider Ad Competition. <br />
        </h3>

        <p className="text-3xl">
          celebrating fearless female riders showcasing their passion, skill,and
          spirit!
        </p>

        {/* <NewBtn
          onClick={handleNavigateRegistration}
          title="Register Now"
          customStyl="w-full lg:w-auto lg:max-w-none mt-4 mx-auto"
        /> */}

        <div className="w-full mx-auto my-8 flex flex-col gap-8 items-center justify-center lg:flex-row ">
          {/* <span>kjh</span> */}
          {/* <span>vg</span> */}
          <button
            className="codepen-button lg:w-[200px] w-full"
            onClick={() => navigate("/register")}
          >
            <span>Learn More</span>
          </button>
          <button
            className="codepen-button lg:w-[200px] w-full"
            onClick={handleNavigateRegistration}
          >
            <span>Register Now</span>
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg mt-4 font-semibold space-y-2 lg:space-y-auto">
          <p className="text-2xl lg:text-3xl text-[#EA4C89] font-bold">
            Concept : "Empowered Women, Empowered World" - Women Rider
          </p>
          <p className="text-black">Duration : Min 30sec to Max 2min</p>
          <p className="text-black">Pay Registration Fee : 499/-</p>
          <p className="text-black">Registration : 10th March to 24th March</p>
          <p className="text-black">
            Video Submission : 10th March to 30th March
          </p>
          <p className="text-black">Voting : 6th April to 11th April</p>
          <p className="text-black">Winner Announcement : 12th April</p>

          <p className="text-black">

            Prize 1 : 15,000 + We will produce web series
          </p>
          <p className="text-black">
            Prize 2 : 10,000 + We will produce Short series
          </p>
          <p className="text-black">
            Prize 3 : 5,000 + We will produce short film

          </p>

          <div className="text-black gap-1 text-normal mt-2">
            <p className="my-2">
              Looking for more details about Women Rider ? Find everything you
              need on official website
            </p>

            <NewBtn
              title={"Visit Website"}
              customStyl={"bg-blue-500 text-sm py-2 px-2"}
              onClick={() => {
                window.location.href = "https://womenrider.com";
              }}
            />
          </div>
        </div>

        <div className="w-full mb-10">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}
