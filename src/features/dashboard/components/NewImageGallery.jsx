import { Link } from "react-router-dom";
import SectionHeading from "../../../utils/SectionHeading";
import SectionLayout from "../../../Layout/SectionLayout";

function ImageGallery() {
  return (
    <SectionLayout>
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
          <motion.div
            style={{ color: textColor }}
            className="text-xl lg:text-3xl font-semibold text-justify"
          >
            <p>
              At Zen Media, storytelling is more than just an art—it’s a
              transformative force that connects, inspires, and leaves a lasting
              impact. We believe that every idea carries the power to spark
              emotions, every vision has the potential to shape perspectives,
              and every story deserves to be told with authenticity and passion.
            </p>
            <Link
              to="/about"
              className="text-red-500 font-semibold ml-2 hover:underline text-xl"
            >
              See All{" "}
              <i className="fa-solid fa-arrow-right text-red-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ImageGallery;
