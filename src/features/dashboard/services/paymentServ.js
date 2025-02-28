import { API } from "../../../core/url";

export const paymentApi = async () => {
  try {
    const res = await API.patch("/dahsboard/payment", {});
    return res.data;
  } catch (error) {
    return false;
  }
};
