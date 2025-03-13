import React from "react";
import { X } from "lucide-react";

const PaymentConfirmModal = ({ close, payment }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 w-96 max-w-full">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Payment Required</h2>

        <p className="mb-6">
          A payment of ₹499 is required to complete your submission. Your form
          details will be saved and submitted automatically after successful
          payment.
        </p>

        <div className="flex justify-between">
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={payment}
            className="px-4 py-2 bg-[#EA4C89] text-white rounded hover:bg-[#d93c7a]"
          >
            Pay ₹499
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmModal;
