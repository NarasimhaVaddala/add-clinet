import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Adpopup from "../../../../utils/Adpopup";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to control whether the ad popup is enabled
  const [enableAd, setEnableAd] = useState(() => {
    // Check if the ad has already been shown in this session
    const hasAdShown = sessionStorage.getItem("hasAdShown");
    return !hasAdShown; // If not shown, enable the ad
  });

  const handleNavigateRegistration = async () => {
    const token = await localStorage.getItem("token");

    if (!token) {
      return navigate("/signup");
    }

    navigate("/register");
  };

  const fetchProfile = () => {
    const storedToken = localStorage.getItem("token") || null;

    if (storedToken) {
      dispatch(fetchUserProfile());
    }
  };

  useEffect(() => {
    fetchProfile();

    // Mark the ad as shown in session storage when the component mounts
    if (enableAd) {
      sessionStorage.setItem("hasAdShown", "true");
    }
  }, [dispatch, enableAd]);

  return (
    <div className="w-full">
      {/* Show the ad popup only if enableAd is true */}
      {enableAd && <Adpopup onClick={() => setEnableAd(false)} />}
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
