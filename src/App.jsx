import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./features/auth/screen/Signup";
import Login from "./features/auth/screen/Login";
import HomeScreen from "./features/dashboard/screen/HomeScreen";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./Layout/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import RegisterProccessForm from "./features/dashboard/screen/RegisterProccessForm";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/register-form" element={<RegisterProccessForm />} />

            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
