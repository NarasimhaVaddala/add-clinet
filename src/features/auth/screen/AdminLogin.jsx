import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../../../utils/SectionHeading";
import NewInput from "../components/NewInput";
import Button from "../../../utils/Button";
import { toast } from "react-toastify";
import { API } from "../../../core/url";

export default function AdminLogin({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = async () => {
    if (!email || !password) {
      toast.error("Please Fill The Fields");
    }

    try {
      const res = await API.post("/auth/admin-login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("admintoken", res.data.token);
        setLoggedIn(true);
        navigate("/admin-home");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="relative w-[90%] md:w-[80%] lg:h-[100vh] h-auto flex flex-col md:flex-row items-center rounded-md overflow-hidden shadow-custom">
        <button
          className="z-50 absolute top-6 left-4 flex gap-2 items-center text-xs"
          // onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-arrow-left"></i> <span>Back to Home</span>
        </button>
        <form
          // onSubmit={formik.handleSubmit}
          className="relative w-full  md:w-1/2 bg-white flex flex-col justify-center items-center overflow-y-scroll gap-6 p-8"
        >
          <SectionHeading txt="Admin Login" />
          <NewInput
            lable="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <NewInput
            lable="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type={"button"}
            text={"LOGIN"}
            width="100%"
            onClick={onLogin}
          />
        </form>
        <div className="w-1/2 hidden md:block">
          <img src="./transformer.png" className="object-cover rounded-xl" />
        </div>
      </div>

      {/* <BottomAd /> */}
    </div>
  );
}
