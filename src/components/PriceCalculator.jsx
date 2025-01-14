import { useState } from "react";
import "../styles/PriceCalculator.css";

const PriceCalculator = () => {
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const cost = invites * 500 + duration * 1000;
    setPrice(cost);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-6 my-8 mx-auto max-w-3xl">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Price Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">
            Number of Invites
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={invites}
            onChange={(e) => setInvites(e.target.value)}
            className="w-full"
          />
          <div className="flex-justify-between">
            <span className="text-left">0</span>
            <span className="text-right">100</span>
          </div>
          <span className="text-gray-700">{invites} Invites</span>
        </div>
        <div>
          <label className="block text-gray-600 font-medium">
            Duration of Event (hours)
          </label>
          <input
            type="range"
            min="0"
            max="24"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full"
          />
          <div className="flex-justify-between">
            <span className="text-left">0</span>
            <span className="text-right">24</span>
          </div>
          <span className="text-gray-700">{duration} Hours</span>
        </div>
        <button
          onClick={calculatePrice}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Calculate
        </button>
        {price > 0 && (
          <p className="text-lg font-medium text-gray-700 mt-4">
            Total Price: ₹{price}
          </p>
        )}
      </div>
    </div>
  );
};

export default PriceCalculator;
