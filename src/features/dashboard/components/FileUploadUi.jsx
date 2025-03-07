import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FileUploadUi = ({ label, accept, name, formik }) => {
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue(name, file);
    }
  };

  // Handle click to open file explorer
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-2 w-full h-[140px] rounded-md border border-gray-300 overflow-hidden">
      <p className="text-white font-medium flex justify-center items-center bg-gray-300 h-[40px]">
        {label}
      </p>

      <div
        className=" overflow-hidden w-full h-[90%] flex justify-center items-center cursor-pointer hover:border-blue-400 transition p-2"
        onClick={handleClick}
      >
        {/* Preview: Show Image or Video if selected */}
        {formik.values[name] ? (
          accept.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(formik.values[name])}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          ) : (
            <video
              src={URL.createObjectURL(formik.values[name])}
              controls
              className="w-full h-full object-contain"
            />
          )
        ) : (
          <p className="text-gray-500">Click to upload {label}</p>
        )}
      </div>

      <input
        type="file"
        accept={accept}
        name={name}
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default FileUploadUi;
