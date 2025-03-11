import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../../../utils/SectionHeading";
import SectionLayout from "../../../Layout/SectionLayout";
import "./TextAnimation.css";

function ImageGallery() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = `At Zen Media, storytelling is more than just an art—it’s a 
                transformative force that connects, inspires, and leaves a 
                lasting impact. We believe that every idea carries the power 
                to spark emotions, every vision has the potential to shape 
                perspectives, and every story deserves to be told with 
                authenticity and passion.`;

  return (
    <SectionLayout>
      <SectionHeading txt="Cherishing the heart and craft of cinema" />
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col justify-between gap-8 w-full md:w-[30%]">
          <img
            src="/home-cherish-1.png"
            alt="Cinema Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="/home-cherish-5.png"
            alt="Cinema Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[70%]">
          <img
            src="/home-cherish-2.png"
            alt="Cinema Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* New Section: Image on Left and Animated Text on Right */}
      <div ref={ref} className="flex flex-col md:flex-row gap-8 w-full mt-12">
        <div className="w-full md:w-[50%]">
          <img
            src="/home-cherish-3.png"
            alt="Cinema Image 4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <div className="text-container">
            {text.split(" ").map((word, index) => (
              <span
                key={index}
                className={`word ${inView ? "animate-text" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  color: scrollDir === "down" ? "black" : "gray",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <Link
            to="/about"
            className="text-red-500 font-semibold mt-4 hover:underline text-xl"
          >
            See All{" "}
            <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ImageGallery;
