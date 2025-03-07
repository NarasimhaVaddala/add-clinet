import { useLayoutEffect } from "react"; // Change this
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Change this
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
