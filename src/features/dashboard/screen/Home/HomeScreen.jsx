import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../../auth/redux/profileSlice";
import ImageGallery from "../../components/ImageGallery";
import { VideoContainer } from "./Sections/VideoContainer";
import WelcomeContainer from "./Sections/WelcomeContainer";
import LegacyContainer from "./Sections/LegacyContainer";
import VisionSection from "./Sections/VisionSection";
import AboutCompetion from "./Sections/AboutCompetion";
import SubmitVideo from "./Sections/SubmitGallery";
import ExploreThePlatform from "./Sections/ExploreThePlatform";
import Partner from "./Sections/Partner";

const HomeScreen = () => {
  const dispatch = useDispatch();

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
    <div className="w-full">
      <VideoContainer handleNavigateRegistration={handleNavigateRegistration} />
      <WelcomeContainer
        handleNavigateRegistration={handleNavigateRegistration}
      />
      {/* <LegacyContainer
        handleNavigateRegistration={handleNavigateRegistration}
      /> */}
      <ExploreThePlatform />
      <ImageGallery />
      {/* <WinnerBoxSection /> */}
      {/* <VisionSection /> */}
      {/* <AboutCompetion /> */}
      {/* <SubmitVideo handleNavigateRegistration={handleNavigateRegistration} /> */}
      <Partner />
    </div>
  );
};

export default HomeScreen;
