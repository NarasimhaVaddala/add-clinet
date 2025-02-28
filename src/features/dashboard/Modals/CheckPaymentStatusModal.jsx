import React from "react";
import ModalLayout from "../../../Layout/ModalLayout";
import { usePayment } from "../hooks/usePayment";

const CheckPaymentStatusModal = ({ width, height }) => {
  const { amount, makePayment, error, isLoading, setAmount } =
    usePayment();
  return (
    <ModalLayout width={width} height={height}>
      <div className="w-full h-full flex justify-center items-center ">
        <button onClick={makePayment} className="w-[120px] h-[45px] bg-primary text-white text-lg font-medium rounded-md">Pay</button>
      </div>
    </ModalLayout>
  );
};

export default CheckPaymentStatusModal;
