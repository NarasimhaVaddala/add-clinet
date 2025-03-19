import { useEffect, useRef, useState } from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { API } from "../../../core/url";
import { useDispatch, useSelector } from "react-redux";
import { paymentApi } from "../services/paymentServ";
import { setProfile } from "../../auth/redux/profileSlice";
import { successfully } from "../../../core/toast";
import { openCloseModalFunc } from "../../../redux/modalFeatureSlice";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const { error, isLoading, Razorpay } = useRazorpay();
  const { userProfile } = useSelector((state) => state.profileSlice);

  const makePayment = async () => {
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      // Create the order
      const response = await API.post("/payment/create-order", {
        amount: 499,
        currency: "INR",
      });
      const { order_id } = response.data;

      // Return a promise that resolves when the payment is verified
      return new Promise((resolve, reject) => {
        const options = {
          key: "rzp_live_zbmR4QaoePLouz",
          amount: 499,
          currency: "INR",
          name: "Payment Towards AD Competetion",
          order_id: order_id,
          handler: async (response) => {
            const {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            } = response;

            try {
              // Verify the payment
              const verificationResponse = await verifyPayment(
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
              );

              // If verification is successful, resolve the promise
              if (verificationResponse === "Payment Verified") {
                resolve();
              } else {
                reject(new Error("Payment Verification Failed"));
              }
            } catch (error) {
              console.error("Error during payment verification:", error);
              reject(error);
            }
          },
          prefill: {
            email: userProfile?.email, // Replace with user's email
            contact: userProfile?.mobile, // Replace with user's phone number
          },
          theme: {
            color: "#ea4c89",
          },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      });
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
      throw error; // Propagate the error to the caller
    }
  };

  async function verifyPayment(
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  ) {
    try {
      const response = await API.post("/payment/verify-payment", {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      if (response.data.status === "Payment Verified") {
        successfully("Success Payment");
        const data = await paymentApi();

        if (data) {
          dispatch(setProfile(data.user));
          localStorage.removeItem("user");
          navigate("/register-form");
        }

        return "Payment Verified"; // Indicate success
      }

      if (response.data.status === "Payment Verification Failed") {
        alert("PAYMENT FAILED");
        throw new Error("Payment Verification Failed");
      }
    } catch (error) {
      console.error("Error during payment verification:", error);
      throw error; // Propagate the error to the caller
    }
  }

  return {
    verifyPayment,
    makePayment,
    setAmount,
    amount,
    isLoading,
    error,
  };
};
