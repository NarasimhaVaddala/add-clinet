import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./features/auth/screen/Signup";
import Login from "./features/auth/screen/Login";
import HomeScreen from "./features/dashboard/screen/HomeScreen";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./Layout/ProtectedRoute";
import { Route, Routes, useLocation } from "react-router-dom";
import RegisterProccessForm from "./features/dashboard/screen/RegisterProccessForm";

import CheckPaymentStatusModal from "./features/dashboard/Modals/CheckPaymentStatusModal";
import Contact from "./features/dashboard/screen/ContactUs";
import About from "./features/dashboard/screen/About";

import ChatbotScreen from "./features/Chatbot/ChatbotScreen";
import PaymentScreen from "./features/dashboard/screen/PaymentScreen";
import RegisterMatter from "./features/dashboard/screen/RegisterMatter";
import { useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const location = useLocation();

  async function getToken() {
    const data = await localStorage.getItem("token");

    if (data) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full ">
        <ToastContainer
          position="top-right"
          autoClose={5000} // 5 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route element={<ProtectedRoute />}>
            <Route
              element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            >
              <Route path="/register-form" element={<RegisterProccessForm />} />
              <Route path="/check" element={<CheckPaymentStatusModal />} />
              <Route path="/payment-screen" element={<PaymentScreen />} />
            </Route>
          </Route>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route
            element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          >
            <Route path="/register" element={<RegisterMatter />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* </Route> */}

          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
