export default function ListItem({ title, text }) {
  return (
    <div className="flex  gap-2">
      {/* <div className="w-[10px] h-[10px] bg-[#000] rounded-full" /> */}
      <i class="fa-solid fa-circle mt-2.5 fa-2xs"></i>

      <div>
        <span className="font-bold">{title}</span>
        <span className="text-gray-700">{text}</span>
      </div>
    </div>
  );
}
