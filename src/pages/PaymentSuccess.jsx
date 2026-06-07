import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">

        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with VENDR. Your order has been placed successfully.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            View Orders
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;