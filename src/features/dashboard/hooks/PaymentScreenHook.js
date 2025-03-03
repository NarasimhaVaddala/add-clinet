import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePayment } from "./usePayment";

export const usePaymentScreenHook = () => {
  const { userProfile } = useSelector((state) => state.profileSlice);

  const { amount, makePayment, error, isLoading, setAmount } = usePayment();

  useEffect(() => {
    if (!userProfile?.paymentStatus) {
      makePayment();
    }
  }, [userProfile]);
};
