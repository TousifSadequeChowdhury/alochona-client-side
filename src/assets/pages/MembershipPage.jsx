import React, { useState } from "react";
import { useNavigate } from "react-router";

const MembershipPage = ({ user, setUser }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // Simulating Payment
  const handlePayment = () => {
    setIsProcessing(true);

    // Mocking a payment processing delay
    setTimeout(() => {
      // Update user state to make them a member
      setUser({ ...user, isMember: true, badge: "Gold" });
      setIsProcessing(false);
      alert("Payment successful! You are now a Gold member.");
      navigate("/"); // Redirect to home page or another desired page
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Membership Payment</h1>

        {!user?.isMember ? (
          <>
            <p className="mb-6 text-gray-700 text-center">
              Become a member for <span className="font-bold">200 Taka</span> and
              unlock exclusive features such as:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Gold badge</li>
              <li>Ability to create more than 5 posts</li>
              <li>Priority support</li>
            </ul>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-2 px-4 text-white font-bold rounded ${
                isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-800 hover:bg-indigo-600"
              } transition duration-300`}
            >
              {isProcessing ? "Processing..." : "Pay Now"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">You are already a Gold Member!</h2>
            <p className="text-gray-600 mb-6">Enjoy your exclusive benefits.</p>
            <button
              onClick={() => navigate("/")}
              className="py-2 px-4 bg-[#3F5E60] hover:bg-[#3F5E60] text-white font-bold rounded transition duration-300"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipPage;
