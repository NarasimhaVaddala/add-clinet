import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionHeading from "../../../utils/SectionHeading";
import SectionLayout from "../../../Layout/SectionLayout";
import "./TextAnimation.css";

function ImageGallery() {
  const ref = useRef(null);
  const charsRef = useRef([]);
  const [inView, setInView] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  // The text that will be animated
  const text = `At Zen Media, storytelling is more than just an art—it's a transformative force that connects, inspires, and leaves a lasting impact. We believe that every idea carries the power to spark emotions, every vision has the potential to shape perspectives, and every story deserves to be told with authenticity and passion.`;

  // Split into words and then handle character rendering in the JSX
  const words = text.split(" ");

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Create the scroll-driven animation for characters
    if (charsRef.current.length > 0) {
      gsap.fromTo(
        charsRef.current.filter((el) => el !== null),
        {
          color: "#cccccc", // Initial color
          fontWeight: "normal", // Start with normal font weight
        },
        {
          color: "#000000", // Final text color
          fontWeight: "bold", // End with bold font weight
          duration: 0.3,
          stagger: 0.005, // Slightly lower value to not make it too slow for long text
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    }

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
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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

  // Function to set char refs
  const setCharRef = (el, index) => {
    charsRef.current[index] = el;
  };

  // Keep track of the overall character index
  let charIndex = 0;

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

      {/* Image and Animated Text Section */}
      <div ref={ref} className="flex flex-col md:flex-row gap-8 w-full mt-12">
        <div className="w-full md:w-[50%]">
          <img
            src="/home-cherish-3.png"
            alt="Cinema Image 4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-start justify-center p-4">
          {/* More responsive text container */}
          <div className="text-container w-full">
            <p className="reveal-type text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              {words.map((word, wordIndex) => (
                <span key={`word-${wordIndex}`} className="word">
                  {/* Render each character of the word */}
                  {word.split("").map((char, i) => {
                    const currentCharIndex = charIndex++;
                    return (
                      <span
                        key={`char-${currentCharIndex}`}
                        ref={(el) => setCharRef(el, currentCharIndex)}
                        className="char"
                      >
                        {char}
                      </span>
                    );
                  })}
                  {/* Add a space after each word except the last one */}
                  {wordIndex < words.length - 1 && (
                    <span className="char-space"> </span>
                  )}
                </span>
              ))}
            </p>
          </div>
          <Link
            to="/about"
            className="text-red-500 font-semibold mt-6 hover:underline text-xl self-center"
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
