import { API } from "../../../core/url";

export const sendOtp = async ({ mobile }) => {
  try {
    await API.post("/auth/send-otp", { mobile });
    return true;
  } catch (error) {
    return false;
  }
};

export const verifyOtp = async ({ mobile, otp }) => {
  try {
    const res = await API.post("/auth/verify-otp", { mobile, otp });
    return { status: true, token: res.data.token };
  } catch (error) {
    return { status: false };
  }
};

export const signUpApi = async ({ formData }) => {
  console.log("formData", formData);

  try {
    await API.post("/auth/sign-up", formData);
    return true;
  } catch (error) {
    return false;
  }
};
