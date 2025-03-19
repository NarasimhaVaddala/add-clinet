import { User } from "lucide-react";

export default function CountBox({
  title = "N/A",
  count = 0,
  icon,
  customStyl,
}) {
  return (
    <div
      className={`w-full flex justify-evenly p-8  text-white shadow-xl rounded-lg items-center ${customStyl}`}
    >
      {icon}
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h2 className="text-5xl">{count}</h2>
      </div>
    </div>
  );
}
