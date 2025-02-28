import React from "react";
import { useHomeScreenHook } from "../hooks/HomeScreenHook";
import CheckPaymentStatusModal from "../Modals/CheckPaymentStatusModal";

const HomeScreen = () => {
  const { userProfile,isDisplayModal } = useHomeScreenHook();
  // console.log("isDisplayModal",isDisplayModal);

  return (
    <div className="w-full h-full">
      {isDisplayModal && <CheckPaymentStatusModal width="50%"  height="50%" />}
    </div>
  );
};

export default HomeScreen;
