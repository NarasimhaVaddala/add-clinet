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
      const response = await API.post("/payment/create-order", {
        amount: 1,
        currency: "INR",
      });
      const { order_id } = response.data;

      const options = {
        key: "rzp_test_zCMFNwSBlZt1gx",
        amount: 1,
        currency: "INR",
        name: "Payment Towards Art Competetion",
        description: `Add ₹${1} to wallet`,
        order_id: order_id,
        handler: async (response) => {
          let { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          await verifyPayment(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
          );
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
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
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
          // dispatch(openCloseModalFunc());
          localStorage.removeItem("user");
          navigate("/register-form");
        }
      }

      if (response.data.status == "Payment Verification Failed") {
        alert("PAYMENT FAILED");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   let use = JSON.parse(localStorage.getItem("user"));
  //   console.log("local", use);

  //   if (!userProfile?.paymentStatus || !use?.paymentStatus) {
  //     console.log("before payment ", userProfile);
  //     makePayment();
  //   } else {
  //     navigate("/register-form");
  //   }
  // }, [userProfile]);

  return {
    verifyPayment,
    makePayment,
    setAmount,
    amount,
    isLoading,
    error,
  };
};
