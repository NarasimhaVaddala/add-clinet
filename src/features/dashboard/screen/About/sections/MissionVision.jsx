import SectionHeading from "../../../../../utils/SectionHeading";
import ListItem from "../components/ListItem";

export default function MissionVision({ title, mainText, list, index }) {
  return (
    <div
      id="mission"
      className="bg-black w-full flex items-center justify-center p-4"
    >
      <div className="flex flex-col md:flex-row w-full lg:w-[90%] gap-8">
        {/* Alternate order based on index */}
        {index % 2 === 0 ? (
          <>
            {/* Left Section (Original Order) */}
            <div className="flex-1 bg-[rgba(224,46,136,0.8)] rounded-2xl p-4 md:p-8">
              <SectionHeading txt={title} style="text-white" />
              <p className="text-white">{mainText}</p>
              <div className="bg-white/90 text-black rounded-2xl p-4 md:p-6 mt-4">
                {list.map((item, idx) => (
                  <ListItem key={idx} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                // src="https://dpiff.in/wp-content/uploads/2024/11/Rectangle-96.png"
                src="/home-cherish-4.png"
                alt="Mission Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ) : (
          <>
            {/* Reversed Order */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                // src="https://dpiff.in/wp-content/uploads/2024/11/Rectangle-96.png"
                src="/home-cherish-6.png"
                alt="Mission Visual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 bg-[rgba(224,46,136,0.8)] rounded-2xl p-4 md:p-8">
              <SectionHeading txt={title} style="text-white" />
              <p className="text-white">{mainText}</p>
              <div className="bg-white/90 text-black rounded-2xl p-4 md:p-6 mt-4">
                {list.map((item, idx) => (
                  <ListItem key={idx} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
