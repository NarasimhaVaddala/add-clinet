import React from "react";
import { useDispatch } from "react-redux";
import { openCloseModalFunc } from "../redux/modalFeatureSlice";
import { X } from "lucide-react";

const ModalLayout = ({ width, title, children, height }) => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    console.log("----------------------------------------------------------------");
    
    dispatch(openCloseModalFunc());
  };

  return (
    <div
      className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.155)" }}
    >
      <div
        style={{ width, height }}
        className="w-[90%] h-[90%] shadow-custom bg-white p-6 flex flex-col gap-4 rounded-md"
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-[600]">{title}</h2>
          <button onClick={onCloseModal}>
            <X size={25} />
          </button>
        </div>
        <div className="w-full h-[95%] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
