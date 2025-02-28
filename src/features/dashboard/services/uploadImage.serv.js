import { API } from "../../../core/url";

export const uploadImageApis = async (formData) => {
    console.log("fomrData", formData);
    
  try {
    const res = await API.patch("/dahsboard/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Overriding Content-Type
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
