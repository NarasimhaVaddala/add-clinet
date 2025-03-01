import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-grow  bg-bgPrimary mt-[85px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
