import SectionHeading from "../../../../../utils/SectionHeading";

export default function AboutSec() {
  const paragraphData = [
    "At Zen Media, storytelling is more than just an art—it’s a transformative force that connects, inspires, and leaves a lasting impact. We believe that every idea carries the power to spark emotions, every vision has the potential to shape perspectives, and every story deserves to be told with authenticity and passion.",

    "At Zen Media, our mission is to provide transformative content that empowers and enlightens our community. We are committed to sharing insightful and thoughtful discussions on a range of topics that foster personal growth, creativity, and mindfulness. Through our platform, we explore wellness, intentional living, and the pursuit of balance in a world that often moves too quickly. By engaging with Zen Media, our audience gains access to valuable knowledge and practices that promote inner peace, clarity, and purpose in daily life.",

    "Driven by creativity and fueled by innovation, we go beyond conventional storytelling. We don’t just capture moments—we craft immersive experiences that resonate, challenge, and inspire. Whether through films, documentaries, digital media, or advertising, our mission is to create content that not only entertains but also evokes deep emotions and meaningful conversations.",

    "We are more than content creators—we are storytellers, visionaries, and artists committed to redefining the way narratives are told. Every project we undertake is a pursuit of excellence, where every frame, every word, and every sound is meticulously curated to leave an unforgettable mark.",

    "At Zen Media, we stand for originality, integrity, and the relentless pursuit of perfection. Our work is not just about what people see and hear; it’s about what they feel, remember, and carry forward. Because great stories don’t just exist—they ignite, empower, and conquer.",
  ];

  return (
    <div className="bg-white text-black py-16 lg:w-[80%] mx-auto">
      <SectionHeading txt="About Us" style={"text-center"} />
      {paragraphData.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-lg lg:text-xl text-justify  px-6 lg:px-20"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
