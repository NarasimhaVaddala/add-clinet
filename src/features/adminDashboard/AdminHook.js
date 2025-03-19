import { useEffect, useState } from "react";
import { API } from "../../core/url";
import { toast } from "react-toastify";
import { Contact, Heart, IndianRupee, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const useAdminHook = () => {
  const token = localStorage.getItem("admintoken");
  const navigate = useNavigate();
  const [count, setCount] = useState({
    signedInCount: 0,
    contactCount: 0,
    submittedCount: 0,
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const { signedInCount, contactCount, submittedCount } = count;

  const countData = [
    {
      title: "Signed In Users",
      count: signedInCount,
      customStyl: "bg-yellow-500",
      icon: User, // Pass the component reference
    },

    {
      title: "Submitted Users",
      count: submittedCount,
      customStyl: "bg-green-500",
      icon: Heart, // Pass the component reference
    },

    {
      title: "Contacted Users",
      count: contactCount,
      customStyl: "bg-blue-500",
      icon: Contact, // Pass the component reference
    },
  ];
  const getUserCount = async () => {
    try {
      const response = await API.get("/admin/getcount");
      const data = response.data;
      console.log(data);

      setCount((prevCount) => ({
        ...prevCount,
        ...data, // Spread the data object into the state
      }));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getRegisteredUsers = async () => {
    try {
      const response = await API.get("/admin/getregisteredusers");

      setRegisteredUsers(response.data);
      console.log(response.data, "registered -users -------------");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getContacys = async () => {
    try {
      const response = await API.get("/admin/get-all-contacts");
      setContacts(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserCount();
    getRegisteredUsers();
    getContacys();
  }, []);

  useEffect(() => {
    if (!token) {
      return navigate("/admin-login");
    }
  }, [token]);

  return {
    countData,
    registeredUsers,
    contacts,
  };
};
