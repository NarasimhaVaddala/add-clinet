import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../../../utils/Button";
import { sendOtp, signUpApi, verifyOtp } from "../services/signup.ser";
import { errorMsgApi } from "../../../core/toast";
import { Link, useNavigate } from "react-router-dom";
import NewInput from "../components/NewInput";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/profileSlice";

const Signup = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [sendOptLoader, setSendOtpLoader] = useState(false);
  const [verifyOtpLoader, setVerifyOtpLoader] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifiedNumer, setVerifiedNumber] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Name is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Must be a valid 10-digit number")
        .required("Number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      address: Yup.string().min(5, "Address too short"),
    }),
    onSubmit: async (values) => {
      if (!finalMobileNumberVerified) {
        errorMsgApi("Please verify the mobile number first.");
        return;
      }
      console.log("formik.values.mobile", formik.values.mobile, verifiedNumer);

      if (verifiedNumer !== formik.values.mobile) {
        errorMsgApi("Mobile number must be same verified OTP.");
        return;
      }
      const apiRes = await signUpApi({ formData: values });

      if (
        apiRes.status ||
        (apiRes?.error === "User already exists with this mobile number" &&
          !apiRes.user?.paymentStatus)
      ) {
        saveUserData(apiRes);
        navigate("/", { replace: true });
      }

      function saveUserData(apiRes) {
        localStorage.setItem("token", apiRes.token);
        localStorage.setItem("user", JSON.stringify(apiRes.user));

        dispatch(setProfile(apiRes.user));
        setLoggedIn(true);
      }
    },
  });

  const [numberVerified, setNumberVerified] = useState(false);
  const [otpVerified, setOtpVerified] = useState(true);

  const [finalMobileNumberVerified, setFinalMobileNumberVerified] =
    useState(false);

  const handleSenOtp = async () => {
    const mobileNumber = formik.values.mobile; // Get the entered number

    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      errorMsgApi("Please enter a valid 10-digit mobile number.");
      return;
    }
    setSendOtpLoader(true);

    const apiStatus = await sendOtp({ mobile: mobileNumber });
    setSendOtpLoader(false);
    if (apiStatus) {
      setNumberVerified(true);
    }
  };

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
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
    if (apiStatus.status) {
      setNumberVerified(false);
      setOtpVerified(false);
      setFinalMobileNumberVerified(true);

      setVerifiedNumber(formik.values.mobile);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] h-[85%] flex rounded-md overflow-hidden shadow-custom">
        <form
          onSubmit={formik.handleSubmit}
          className=" w-full md:w-1/2 bg-white flex flex-col justify-center items-center overflow-y-scroll gap-6 p-8"
        >
          <p className="text-start w-full pl-11 text-lg font-semibold">
            Sign Up
          </p>
          <NewInput
            lable="Name *"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            isValid={formik.errors.name}
          />
          {/* {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>} */}

          <NewInput
            lable="Number *"
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")}
            rightbtnTet="Get OTP"
            isValid={formik.errors.mobile}
            isLoading={sendOptLoader}
            rightBtnFunction={handleSenOtp}
            isDisplayRightBtn={otpVerified}
            disable={finalMobileNumberVerified}
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

          <NewInput
            lable="Email *"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            isValid={formik.errors.email}
          />
          <NewInput
            lable="Address"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            isValid={formik.errors.address}
          />
          {/* <div className="w-full  md:pl-11 mt-[-10px] gap-1"> */}
          <span className="text-end text-[12px]">
            have an account{" "}
            <Link to="/login" className="text-blue-500 font-medium">
              Sign In
            </Link>
          </span>
          <Button type="submit" text="Submit" isLoading={isLoading} />
          {/* </div> */}
        </form>
        <div className="w-1/2 bg-[#90e49d] hidden md:block"></div>
      </div>
    </div>
  );
};

export default Signup;
