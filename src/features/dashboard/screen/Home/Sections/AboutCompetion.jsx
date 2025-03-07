import SectionHeading from "../../../../../utils/SectionHeading";

export default function AboutCompetion() {
  return (
    <div className="y-10 px-4">
      <div className="text-center">
        {/* <h1 className="text-4xl font-bold">About the Competition</h1> */}
        <SectionHeading txt="About the Competition" />
        <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
          The Women Rider Video Competition honors the power and passion of
          female riders. Share your riding journey and showcase your skills for
          a chance to be recognized.
        </p>
      </div>

      {/* Image Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {["home-img-4.png", "home-left-img-5.png"].map((image, index) => (
          <div key={index} className="w-full md:w-[48%]">
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
