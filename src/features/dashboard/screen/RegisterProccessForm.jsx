import React, { useEffect, useState } from "react";
import Input from "../../auth/components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import FileUploadUi from "../components/FileUploadUi";
import { PlusCircle, Trash2 } from "lucide-react";
import { uploadImageApis } from "../services/uploadImage.serv";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { API } from "../../../core/url";
import { toast } from "react-toastify";
import SectionHeading from "../../../utils/SectionHeading";
const MAX_IMAGES = 10;
const MIN_IMAGES = 4;

const RegisterProccessForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [imageFields, setImageFields] = useState([
    "imageOne",
    "imageTwo",
    "imageThree",
    "imageFour",
  ]);

  useEffect(() => {}, []);

  const validationSchema = Yup.object({
    directorName: Yup.string().required("Director Name is required"),
    cinematographyName: Yup.string().required(
      "Cinematography Name is required"
    ),
    editorName: Yup.string().required("Editor Name is required"),
    producerName: Yup.string().required("Producer Name is required"),
    video: Yup.mixed().required("Video is required"),
    imageOne: Yup.mixed().required("images are required"),
    imageTwo: Yup.mixed().required("images are required"),
    imageThree: Yup.mixed().required("images are required"),
    imageFour: Yup.mixed().required("images are required"),
  });

  const formik = useFormik({
    initialValues: {
      directorName: "",
      cinematographyName: "",
      editorName: "",
      producerName: "",
      video: null,
      imageOne: null,
      imageTwo: null,
      imageThree: null,
      imageFour: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Values:", values); // Debugging log

      setIsLoading(true);
      const formData = new FormData();
      formData.append("directorName", values.directorName);
      formData.append("cinematographyName", values.cinematographyName);
      formData.append("editorName", values.editorName);
      formData.append("producerName", values.producerName);

      if (values.video instanceof File) {
        formData.append("video", values.video);
      } else {
        console.error("❌ Video file is not correctly set:", values.video);
      }

      imageFields?.forEach((field) => {
        if (values[field] instanceof File) {
          formData.append(field, values[field]);
        } else {
          console.warn(`⚠️ ${field} is not a valid file`, values[field]);
        }
      });

      try {
        const res = await API.patch("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Overriding Content-Type
          },
        });
        toast.success("Your Application Submitted Successfully", {
          autoClose: 1500,
        });

        setTimeout(() => {
          navigate("/registered");
        }, 1500);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return false;
      }
      const data = await uploadImageApis(formData);
      setIsLoading(false);
      if (data) {
        navigate("/");
      }

      //   try {
      //     const response = await fetch("YOUR_BACKEND_URL/upload", {
      //       method: "POST",
      //       body: formData,
      //     });

      //     if (!response.ok) throw new Error("Upload failed!");

      //     alert("Form submitted successfully!");
      //   } catch (error) {
      //     console.error("Error uploading files:", error);
      //     alert("File upload failed. Please try again.");
      //   }
    },
  });

  const addNewImageField = () => {
    if (imageFields.length < MAX_IMAGES) {
      const newField = `image${
        imageFields.length + 1 === 5
          ? "Five"
          : imageFields.length + 1 === 6
          ? "Six"
          : imageFields.length + 1 === 7
          ? "Seven"
          : imageFields.length + 1 === 8
          ? "Eight"
          : imageFields.length + 1 === 9
          ? "Nine"
          : "Ten"
      }`;
      setImageFields([...imageFields, newField]);
      formik.setFieldValue(newField, null);
    }
  };

  const removeImageField = (index) => {
    if (imageFields.length > MIN_IMAGES) {
      const newFields = [...imageFields];
      const removedField = newFields.splice(index, 1)[0];

      setImageFields(newFields);
      formik.setFieldValue(removedField, null);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center py-6 overflow-y-scroll">
      <div className="w-[70%] h-full  px-5 py-4 rounded-md pt-7">
        <SectionHeading txt="🎬 Submit Your Video" />
        <form
          className="w-full flex flex-wrap gap-6 justify-between items-center"
          onSubmit={formik.handleSubmit}
        >
          <Input
            lable="Director Name *"
            value={formik.values.directorName}
            onChange={formik.handleChange("directorName")}
            isValid={formik.errors.directorName}
          />
          <Input
            lable="Cinematograper Name *"
            value={formik.values.cinematographyName}
            onChange={formik.handleChange("cinematographyName")}
            isValid={formik.errors.cinematographyName}
          />
          <Input
            lable="Editor Name *"
            value={formik.values.editorName}
            onChange={formik.handleChange("editorName")}
            isValid={formik.errors.editorName}
          />
          <Input
            lable="Producer Name *"
            value={formik.values.producerName}
            onChange={formik.handleChange("producerName")}
            isValid={formik.errors.producerName}
          />

          <FileUploadUi
            label="Video"
            accept="video/mp4, video/quicktime, video/x-matroska, video/x-msvideo, video/webm, video/x-ms-wmv"
            name="video"
            formik={formik}
          />

          {imageFields.map((field, index) => (
            <div key={field} className="relative w-full lg:w-auto">
              <FileUploadUi
                label={`Image ${index + 1}`}
                accept="image/*"
                name={field}
                formik={formik}
              />
              {imageFields.length > MIN_IMAGES && index >= MIN_IMAGES && (
                <button
                  type="button"
                  onClick={() => removeImageField(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}

          {imageFields.length < MAX_IMAGES && (
            <button
              type="button"
              onClick={addNewImageField}
              className="flex flex-col justify-center items-center w-28 h-28 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-600 transition"
            >
              <PlusCircle className="w-10 h-10 text-gray-500" />
              <span className="text-sm text-gray-500">Add Image</span>
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-[#EA4C89] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#d93c7a] transition duration-300 ease-in-out mb-7 focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:ring-offset-2"
          >
            {isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterProccessForm;
