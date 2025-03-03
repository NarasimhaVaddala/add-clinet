import React, { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendOtp, verifyOtp } from "../services/signup.ser";
import NewInput from "../components/NewInput";
import { toast } from "react-toastify";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [sendOptLoader, setSendOtpLoader] = useState(false);
  const [verifyOtpLoader, setVerifyOtpLoader] = useState(false);
  const [numberVerified, setNumberVerified] = useState(false);
  const [otpVerified, setOtpVerified] = useState(true);

  const formik = useFormik({
    initialValues: { mobile: "" },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Must be a valid 10-digit number")
        .required("Mobile number is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted", values);
    },
  });

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleSenOtp = async () => {
    const mobileNumber = formik.values.mobile; // Get the entered number

    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      errorMsgApi("Please enter a valid 10-digit mobile number.");
      return;
    }
    setSendOtpLoader(true);

    const apiStatus = await sendOtp({ mobile: mobileNumber });
    setSendOtpLoader(false);
    if (!apiStatus.user) {
      toast.error("User Not Found Please Signup");
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    } else if (apiStatus) {
      setNumberVerified(true);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp?.length <= 5) {
      errorMsgApi("Please enter a valid OTP.");
      return;
    }
    setVerifyOtpLoader(true);
    const mobile = formik.values.mobile; // Get the entered number
    const apiStatus = await verifyOtp({ mobile, otp });
    setVerifyOtpLoader(false);
    if (apiStatus?.status) {
      setNumberVerified(false);
      setOtpVerified(false);
      localStorage.setItem("token", apiStatus.token);

      localStorage.setItem("user", JSON.stringify(apiStatus.user));

      setLoggedIn(true);
      navigate("/");
      // }
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] h-[85%] flex rounded-md overflow-hidden shadow-custom">
        <form
          // onSubmit={formik.handleSubmit}
          className=" w-full  md:w-1/2 bg-white flex flex-col justify-center items-center overflow-y-scroll gap-6 p-8"
        >
          <p className=" w-full text-center text-lg font-semibold">Login </p>
          <NewInput
            lable="Number *"
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")}
            rightbtnTet="Get OTP"
            isValid={formik.errors.mobile}
            isLoading={sendOptLoader}
            rightBtnFunction={handleSenOtp}
            isDisplayRightBtn={otpVerified}
          />
          {numberVerified && (
            <NewInput
              lable="OTP *"
              value={otp}
              onChange={handleChangeOtp}
              rightbtnTet="Verify"
              isValid={formik.errors.mobile}
              isLoading={verifyOtpLoader}
              rightBtnFunction={handleVerifyOtp}
              isDisplayRightBtn={numberVerified}
            />
          )}
          <span className="text-end text-[12px]">
            Don't have an account
            <Link to="/signup" className="text-blue-500 font-medium">
              {" "}
              Sign Up
            </Link>
          </span>
        </form>
        <div className="w-1/2 bg-[#90e49d] hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
