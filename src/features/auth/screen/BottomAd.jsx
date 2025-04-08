import React from "react";
import adPopUpImg from "/adpopup.png";
import NewBtn from "../../../utils/NewBtn";
export default function BottomAd() {
  return (
    <div className="bg-white w-[90%] md:w-[80%] rounded-lg mt-4 font-semibold flex flex-col-reverse md:flex-row items-center gap-4 p-4">
      {/* Text Content */}
      <div className="space-y-2 lg:space-y-auto w-full md:w-1/2">
        <p className="text-2xl lg:text-3xl text-[#EA4C89] font-bold">
          Concept : "Empowered Women, Empowered World" - Women Rider
        </p>
        <p className="text-black">Duration : Min 30sec to Max 2min</p>
        <p className="text-black">Registration : 03rd April to 15th April</p>
        <p className="text-black">
          Video Submission : 03rd April to 20th April
        </p>
        <p className="text-black">Voting : 21 April to 30th April</p>
        <p className="text-black">Winner Announcement : May 1st</p>

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
            Looking for more details about Women Rider? Find everything you need
            on the official website.
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

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={adPopUpImg}
          className="lg:w-[30rem] mx-auto p-4 sm:p-6 md:p-8 lg:p-10"
          alt="Ad Popup"
        />
      </div>
    </div>
  );
}
