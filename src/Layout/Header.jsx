import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ loggedIn, setLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admintoken");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <div
      className={`w-full h-[80px] flex justify-between items-center bg-black px-4 fixed z-40`}
    >
      <NavLink
        to="/"
        // onClick={console.log(this)}
        className="w-[100px] h-full  flex justify-center items-center"
      >
        <img src="/logo.png" alt="" />
      </NavLink>
      <div className="hidden md:flex gap-5 items-center">
        <NavLink
          to="/about"
          className={`text-lg font-medium ${
            location.pathname === "/about" ? "text-[#EA4C89]" : "text-white"
          }`}
        >
          About Us
        </NavLink>
        {/* <NavLink to='/gallery' className='text-white text-lg font-medium'>Gallery</NavLink> */}
        <NavLink
          to="/register"
          className={`text-lg font-medium ${
            location.pathname === "/register" ? "text-[#EA4C89]" : "text-white"
          }`}
        >
          Register Process
        </NavLink>
        {/* <NavLink to='/join' className='text-white text-lg font-medium'>Join Us</NavLink> */}
        <NavLink
          to="/contact"
          className={`text-lg font-medium ${
            location.pathname === "/contact" ? "text-[#EA4C89]" : "text-white"
          }`}
        >
          Contact Us
        </NavLink>
        {!loggedIn && (
          <NavLink
            to="/login"
            className={`text-lg font-medium ${
              location.pathname === "/login" ? "text-[#EA4C89]" : "text-white"
            }`}
          >
            Login
          </NavLink>
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
          <NavLink
            to="/about"
            className={`text-lg font-medium ${
              location.pathname === "/about" ? "text-[#EA4C89]" : "text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          {/* <NavLink
              to="/gallery"
              className="text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink> */}
          <NavLink
            to="/register"
            className={`text-lg font-medium ${
              location.pathname === "/register"
                ? "text-[#EA4C89]"
                : "text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Register Process
          </NavLink>
          {/* <NavLink
              to="/join"
              className="text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </NavLink> */}
          <NavLink
            to="/contact"
            className={`text-lg font-medium ${
              location.pathname === "/contact" ? "text-[#EA4C89]" : "text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          {!loggedIn && (
            <NavLink
              to="/login"
              className={`text-lg font-medium ${
                location.pathname === "/login" ? "text-[#EA4C89]" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
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
