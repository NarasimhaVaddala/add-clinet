export default function SmallBox({ image, text, bg, textColor }) {
  return (
    <div
      className={`flex-1 p-6 bg-${bg} border border-gray-700 rounded-lg shadow-md`}
    >
      <img
        src={image}
        alt="Icon"
        className="w-12 h-12 mb-4 mx-auto" // Centered and scaled icon
      />
      <p
        className={`text-sm ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
