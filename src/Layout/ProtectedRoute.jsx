import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUserProfile } from "../features/auth/redux/profileSlice";
// import {
//   setRoleFromStorage,
//   setTokenFromStorage,
// } from "../features/auth/Redux/loginSlice";
// import { fetchUserProfile } from "../features/auth/Redux/profileSlice";

// const useGetUserRole = () => {
//   const { role } = useSelector((state) => state.authToken);
//   return role || localStorage.getItem("token")  || null;
// };

const ProtectedRoute = () => {
  const dispatch = useDispatch();

  const useGetUserToken = () => {
    const { token } = useSelector((state) => state.loginSlice);
    return (
      token ||
      localStorage.getItem("token") ||
      localStorage.getItem("admintoken") ||
      null
    );
  };

  const storedToken = useGetUserToken();

  useEffect(() => {
    if (storedToken) {
      dispatch(fetchUserProfile());
      //   dispatch(setRoleFromStorage(userRole));
      //   dispatch(setTokenFromStorage(storedToken));
    }
  }, [storedToken, dispatch]);

  if (!storedToken) {
    return <Navigate to="/signup" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
