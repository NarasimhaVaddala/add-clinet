import SectionLayout from "../../../../../Layout/SectionLayout";
import SectionHeading from "../../../../../utils/SectionHeading";
export default function LegacyContainer() {
  const paragraphData = [
    "The Women Rider app is designed to empower women with a safer, more independent travel experience. Tailored exclusively for women, this app ensures privacy, convenience, and peace of mind by providing a secure platform for ridesharing.",

    "Safety is our top priority, with features like an SOS button,ride-sharing options, verified passenger and driver profiles, and a secure 'Wor Pin' for each ride, which ensures added protection for every trip. Women Rider offers not only a mode of transportation but a community where women can travel confidently, knowing that their security is paramount.",

    "With these features, the Women Rider app redefines the travel experience by creating a supportive, safe, and empowering environment where women can move freely and independently.",
  ];

  return (
    <SectionLayout>
      <div className="w-full flex-col lg:flex-row flex justify-between gap-8">
        {/* <div className=" bg-black flex p-4 rounded-lg justify-center text-white flex-col w-[400px]">
          <h2 className="text-center text-4xl font-bold text-[#EA4C89]">
            Prizes
          </h2>

          <div>
            <h2 className="font-bold text-3xl">1st Prize</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-xl text-[#EA4C89]">₹ 20,000 +</h2>
              <p className="text-xl">We will produce one web series</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-3xl">2nd Prize</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-xl text-[#EA4C89]">₹ 10,000 +</h2>
              <p className="text-xl">We will produce one short series</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-3xl">3rd Prize</h2>
            <div className="flex items-center gap-2">
              <p className="text-xl">We will produce one short film</p>
            </div>
          </div>
        </div> */}

        <div className="w-fit">
          <img src="price.png" />
        </div>

        <div className="flex flex-col w-fit">
          <SectionHeading txt="Concept for Ad Competetion" style={"mt-0"} />

          {paragraphData.map((e, index) => (
            <p className="lg:text-xl my-2 text-justify" key={index}>
              {e}
            </p>
          ))}

          {/* 
        <div className="flex lg:gap-10 justify-between lg:justify-normal">
          <Counter title={"Short film Entries"} upto={10000} duration={4000} />
          <Counter title={"Countries"} upto={150} duration={1000} />
          <Counter title={"Festivals"} upto={120} duration={1000} />
        </div> */}
        </div>
      </div>
    </SectionLayout>
  );
}
