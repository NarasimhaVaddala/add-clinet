import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ loggedIn, setLoggedIn }) => {
  // console.log(loggedIn, "in askd");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <main className="w-full flex-grow  bg-bgPrimary mt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
