import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./features/auth/screen/Signup";
import Login from "./features/auth/screen/Login";
import HomeScreen from "./features/dashboard/screen/HomeScreen";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./Layout/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import RegisterProccessForm from "./features/dashboard/screen/RegisterProccessForm";

import CheckPaymentStatusModal from "./features/dashboard/Modals/CheckPaymentStatusModal";
import Contact from "./features/dashboard/screen/ContactUs";
import About from "./features/dashboard/screen/About";

import ChatbotScreen from "./features/Chatbot/ChatbotScreen";
import PaymentScreen from "./features/dashboard/screen/PaymentScreen";

function App() {
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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />

          <Route path="/payment-screen" element={<PaymentScreen />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeScreen />} />

              <Route path="/register-form" element={<RegisterProccessForm />} />
              <Route path="/check" element={<CheckPaymentStatusModal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
