import React, { useState } from "react";
import Input from "../../auth/components/Input";
import FileUploadUi from "../components/FileUploadUi";
import { BeatLoader } from "react-spinners";
import { API, APIS } from "../../../core/url";
const NewRegisterForm = () => {
  const [formData, setFormData] = useState({
    directorName: "",
    cinematographyName: "",
    editorName: "",
    producerName: "",
    video: null,
    imageOne: null,
    imageTwo: null,
    imageThree: null,
    imageFour: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.directorName)
      newErrors.directorName = "Director Name is required";
    if (!formValues.cinematographyName)
      newErrors.cinematographyName = "Cinematography Name is required";
    if (!formValues.editorName)
      newErrors.editorName = "Editor Name is required";
    if (!formValues.producerName)
      newErrors.producerName = "Producer Name is required";
    if (!formValues.video) newErrors.video = "Video is required";
    imageFields.forEach((field) => {
      if (!formValues[field]) newErrors[field] = "Image is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (name, file) => {
    setFormData({
      ...formData,
      [name]: file, // Update the specific field with the file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // const formDatan = new FormData();
    // formDatan.append("directorName", formData.directorName);
    // formDatan.append("cinematographyName", formData.cinematographyName);
    // formDatan.append("editorName", formData.editorName);
    // formDatan.append("producerName", formData.producerName);
    // formDatan.append("video", formData.video);
    try {
      const res = await API.patch("/dahsboard/upload-image", formData, )
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //   console.log(formData)

  return (
    <div className="w-full h-full flex justify-center items-center py-6 overflow-y-scroll">
      <div className="w-[70%] h-full  px-5 py-4 rounded-md pt-7">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🎬 Register Process Form
        </h2>
        <form
          className="w-full flex flex-wrap gap-6 justify-between items-center"
          onSubmit={handleSubmit}
        >
          <Input
            lable="Director Name *"
            value={formData.directorName}
            onChange={handleInputChange}
            isValid={errors.directorName}
            name="directorName"
          />
          <Input
            lable="Cinematograpy Name *"
            value={formData.cinematographyName}
            onChange={handleInputChange}
            isValid={errors.cinematographyName}
            name="cinematographyName"
          />
          <Input
            lable="Editor Name *"
            value={formData.editorName}
            onChange={handleInputChange}
            isValid={errors.editorName}
            name="editorName"
          />
          <Input
            lable="Producer Name *"
            value={formData.producerName}
            onChange={handleInputChange}
            isValid={errors.producerName}
            name="producerName"
          />
          <FileUploadUi
            label="Upload Video"
            accept="video/*"
            name="video"
            onChange={handleFileChange}
            error={errors.video}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-700 transition mb-7"
          >
            {isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRegisterForm;
