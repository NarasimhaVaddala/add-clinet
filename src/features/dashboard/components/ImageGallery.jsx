import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import SectionHeading from "../../../utils/SectionHeading";
import SectionLayout from "../../../Layout/SectionLayout";

function ImageGallery() {
  const ref = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start effect when section enters, end when it exits
  });

  // Smooth animation to avoid jerky transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  console.log("smoothProgress", smoothProgress);

  // Transform color from gray to black
  const textColor = useTransform(smoothProgress, [0, 1], ["#4b5563", "#000"]);

  // Log the actual color values as they change
  useEffect(() => {
    const unsubscribe = textColor.on("change", (latest) => {
      console.log("Updated text color:", latest);
    });

    return () => unsubscribe(); // Cleanup effect
  }, [textColor]);

  return (
    // <div
    //   ref={ref}
    //   className="min-h-screen flex flex-col items-center justify-center py-8"
    // >
    <SectionLayout>
      {/* Existing Image Gallery Section */}
      <SectionHeading txt="Cherishing the heart and craft of cinema" />
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col justify-between gap-8 w-full md:w-[30%]">
          <img
            src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
            alt="Cinema Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
            alt="Cinema Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[70%]">
          <img
            src="https://dpiff.in/wp-content/uploads/2024/11/cherish3.jpg"
            alt="Cinema Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* New Section: Image on Left and Paragraph on Right */}
      <div className="flex flex-col md:flex-row gap-8 w-full mt-12">
        <div className="w-full md:w-[50%]">
          <img
            src="https://dpiff.in/wp-content/uploads/2024/11/cheris1.jpg"
            alt="Cinema Image 4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          {/* Animated text inside motion div */}
          <motion.div style={{ color: textColor }}>
            <p className="text-xl lg:text-3xl font-semibold text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <Link
                to="/about"
                className="text-red-500 font-semibold ml-2 hover:underline text-xl"
              >
                See All{" "}
                <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1"></i>
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ImageGallery;
