import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ loggedIn, setLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/login");
  };

  console.log(loggedIn);

  return (
    <div className="w-full h-[80px] flex justify-between items-center bg-black px-4 fixed z-40">
      <Link
        to="/"
        className="w-[100px] h-full  flex justify-center items-center"
      >
        <img src="/logo.png" alt="" className="bg-white" />
      </Link>
      <div className="hidden md:flex gap-5 items-center">
        <Link to="/about" className="text-white text-lg font-medium">
          About Us
        </Link>
        {/* <Link to='/gallery' className='text-white text-lg font-medium'>Gallery</Link> */}
        <Link to="/register" className="text-white text-lg font-medium">
          Register Process
        </Link>
        {/* <Link to='/join' className='text-white text-lg font-medium'>Join Us</Link> */}
        <Link to="/contact" className="text-white text-lg font-medium">
          Contact Us
        </Link>
        {!loggedIn && (
          <Link to="/login" className="text-white text-lg font-medium">
            Login
          </Link>
        )}
        {loggedIn && (
          <button onClick={logout} className="text-white text-lg font-medium">
            Logout
          </button>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-20 left-0 w-full bg-black flex flex-col items-center gap-5 py-4 md:hidden">
          <Link
            to="/about"
            className="text-white text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          {/* <Link
              to="/gallery"
              className="text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link> */}
          <Link
            to="/register"
            className="text-white text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Register Process
          </Link>
          {/* <Link
              to="/join"
              className="text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </Link> */}
          <Link
            to="/contact"
            className="text-white text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          {!loggedIn && (
            <Link
              to="/login"
              className="text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
          {loggedIn && (
            <button
              onClick={logout}
              className="text-white text-lg font-medium"
              // onClick={() => setMenuOpen(false)}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
