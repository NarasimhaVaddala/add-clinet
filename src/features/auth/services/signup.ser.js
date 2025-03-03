import { API } from "../../../core/url";

export const sendOtp = async ({ mobile }) => {
  try {
    const data = await API.post("/auth/send-otp", { mobile });

    return { user: data.data.name, status: true };
  } catch (error) {
    return false;
  }
};

export const verifyOtp = async ({ mobile, otp }) => {
  try {
    const res = await API.post("/auth/verify-otp", { mobile, otp });
    return { status: true, token: res.data.token, user: res.data.user || null };
  } catch (error) {
    return { status: false };
  }
};

export const signUpApi = async ({ formData }) => {
  console.log("formData", formData);

  try {
    const res = await API.post("/auth/sign-up", formData);
    return { status: true, token: res.data.token, user: res.data.user };
  } catch (error) {
    return {
      status: false,
      error: error?.response?.data?.message,
      user: error?.response?.data?.user,
    };
  }
};
