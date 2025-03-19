import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./features/auth/screen/Signup";
import Login from "./features/auth/screen/Login";
import HomeScreen from "./features/dashboard/screen/Home/HomeScreen";
import Layout from "./Layout/Layout";
import RegisterProccessForm from "./features/dashboard/screen/RegisterProccessForm";
import CheckPaymentStatusModal from "./features/dashboard/Modals/CheckPaymentStatusModal";
import Contact from "./features/dashboard/screen/ContactUs";
import About from "./features/dashboard/screen/About/About";
import ChatbotScreen from "./features/Chatbot/ChatbotScreen";
import PaymentScreen from "./features/dashboard/screen/PaymentScreen";
import RegisterMatter from "./features/dashboard/screen/RegisterMatter/RegisterMatter";
import AlreadyRegistered from "./features/dashboard/screen/AlreadyRegistered";
import ScrollToTop from "./utils/ScrollToTop"; // Import the ScrollToTop component
import AdminLogin from "./features/auth/screen/AdminLogin";
import AdminHome from "./features/adminDashboard/AdminHome";
import ProtectedRoute from "./Layout/ProtectedRoute";
import DetailedView from "./features/adminDashboard/DetailedView";
import ContactDetailView from "./features/adminDashboard/ContactDetailView";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
      <div className="flex flex-col w-full font-News">
        {/* ToastContainer for notifications */}
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

        {/* Add the ScrollToTop component here */}
        <ScrollToTop />

        <Routes>
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/admin-login"
            element={
              <AdminLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route
            element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          >
            <Route path="/register-form" element={<RegisterProccessForm />} />
            <Route path="/check" element={<CheckPaymentStatusModal />} />
            <Route path="/payment-screen" element={<PaymentScreen />} />
            <Route path="/registered" element={<AlreadyRegistered />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/view-detail/:id" element={<DetailedView />} />
            <Route path="/contact/:id" element={<ContactDetailView />} />
            {/* </Route> */}
          </Route>

          <Route
            element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          >
            <Route path="/register" element={<RegisterMatter />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
