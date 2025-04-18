import React, { useRef, useState } from "react";

const FileUploadUi = ({ label, accept, name, formik }) => {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const MAX_VIDEO_DURATION = 120; // 2 minutes in seconds
  const MAX_FILE_SIZE = 2 * 1024 * 1024 * 1024; // 2GB in bytes

  // Check video duration
  const checkVideoDuration = (file) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        if (video.duration > MAX_VIDEO_DURATION) {
          reject(new Error("Video must be less than 2 minutes long"));
        } else {
          resolve();
        }
      };

      video.onerror = () => {
        reject(new Error("Error loading video metadata"));
      };

      video.src = URL.createObjectURL(file);
    });
  };

  // Handle file selection
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setErrorMessage("");

    if (file) {
      // Check file size for all file types
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage("File must be less than 2GB");
        formik.setFieldError(name, "File must be less than 2GB");
        return;
      }

      // Additional checks for video files
      if (file.type.startsWith("video/")) {
        try {
          await checkVideoDuration(file);
          formik.setFieldValue(name, file);
        } catch (error) {
          setErrorMessage(error.message);
          formik.setFieldError(name, error.message);
        }
      } else {
        // For non-video files, just set the value
        formik.setFieldValue(name, file);
      }
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
        className="overflow-hidden w-full h-[90%] flex justify-center items-center cursor-pointer hover:border-blue-400 transition p-2"
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

      {/* Error message display */}
      {(errorMessage || (formik.touched[name] && formik.errors[name])) && (
        <p className="text-red-500 text-xs mt-1">
          {errorMessage || formik.errors[name]}
        </p>
      )}
    </div>
  );
};

export default FileUploadUi;
